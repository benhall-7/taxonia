import { useMemo, useState } from "react";
import {
  Alert,
  AppBar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AddCircle,
  CloseOutlined,
  RefreshOutlined,
} from "@mui/icons-material";

import { Observation } from "src/services/inaturalist/Api";
import taxonia from "src/images/taxonia2.png";

import { QuizAnswer } from "./types";
import ResultRow from "./FinishedQuiz/ResultRow";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Trie } from "src/utils/trie";
import { TaxonTree } from "./FinishedQuiz/TaxonTree";
import { useMutation } from "@tanstack/react-query";
import actions from "src/actions";

export default function FinishedQuiz({
  observations,
  answers,
}: FinishedQuizProps) {
  type Rating = ReturnType<typeof QuizAnswer.scoreRating>;
  const [filter, setFilter] = useState<Rating | null>(null);

  const averageScore =
    answers.reduce((sum, answer) => sum + answer.score, 0) / answers.length;

  const quizSearchParams = useSearch({ from: "/quiz" });
  const postQuizParams: Parameters<typeof actions.postQuizResults.action>[0] = {
    quiz_type: "species",
    params: quizSearchParams,
    question_count: quizSearchParams.questionCount,
    score: averageScore,
  };
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: [actions.postQuizResults.key],
    mutationFn: () => actions.postQuizResults.action(postQuizParams),
  });

  const filteredAnswers = useMemo(
    () =>
      observations
        .map((obs, index) => ({
          answer: answers[index],
          observation: obs,
          questionNum: index,
        }))
        .filter(({ answer }) => {
          if (filter === null) {
            return true;
          }
          return QuizAnswer.scoreRating(answer.score) === filter;
        }),
    [answers, filter, observations]
  );

  const taxonTrie = useMemo(() => {
    const taxonTrie = new Trie<number, undefined>();
    for (const obs of observations) {
      if (obs.taxon?.ancestor_ids) {
        taxonTrie.insert(obs.taxon.ancestor_ids, undefined);
      }
    }
    // remove top-level nodes with only one child
    let topNode = taxonTrie.root;
    while (topNode.children.size === 1) {
      taxonTrie.root = topNode;
      topNode = topNode.children.entries().next().value![1];
    }

    return taxonTrie;
  }, [observations]);

  const navigate = useNavigate();
  const onExit = () => {
    navigate({ to: "/" });
  };
  const refresh = () => {
    window.location.reload();
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <img src={taxonia} width="64px" />
          <Stack direction="column" flex="1 0 0">
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "8px" }}
              textAlign="center"
            >
              Results
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "8px" }}
              textAlign="center"
            >
              Accuracy: {averageScore.toFixed(3)}
            </Typography>
          </Stack>
          <ButtonGroup sx={{ display: "flex", gap: "8px" }}>
            <IconButton aria-label="refresh" onClick={() => refresh()}>
              <RefreshOutlined />
            </IconButton>
            <IconButton aria-label="exit" onClick={() => onExit()}>
              <CloseOutlined />
            </IconButton>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Stack direction="row" flexWrap="wrap" gap="20px" margin="20px">
        <Stack direction="column" minWidth="500px" flexGrow="1">
          <Stack direction="row" justifyContent="space-between">
            <ToggleButtonGroup
              value={filter}
              onChange={(_, v) => setFilter(v)}
              exclusive
            >
              <ToggleButton value={"good" satisfies Rating}>
                <Typography>Correct</Typography>
              </ToggleButton>
              <ToggleButton value={"ok" satisfies Rating}>
                <Typography>Partial</Typography>
              </ToggleButton>
              <ToggleButton value={"bad" satisfies Rating}>
                <Typography>Incorrect</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            <Stack direction="row" justifyContent="end" gap="8px">
              {isSuccess && <Alert severity="success">Success!</Alert>}
              {isError && (
                <Alert severity="error">Error saving quiz results!</Alert>
              )}
              <Button
                aria-label="save"
                onClick={() => mutate()}
                disabled={isPending || isSuccess}
                startIcon={<AddCircle />}
                variant="outlined"
                size="small"
              >
                Save results
              </Button>
            </Stack>
          </Stack>
          {filteredAnswers.map(({ answer, observation, questionNum }) => (
            <ResultRow
              key={questionNum}
              observation={observation}
              answer={answer}
            />
          ))}
        </Stack>

        <Stack direction="column" minWidth="500px" flexGrow="1">
          <Typography variant="h4">Taxon tree:</Typography>
          <TaxonTree trie={taxonTrie} />
        </Stack>
      </Stack>
    </Box>
  );
}

type FinishedQuizProps = {
  observations: Observation[];
  answers: QuizAnswer[];
};
