import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

import { Observation } from "src/services/inaturalist/Api";
import taxonia from "src/images/taxonia.png";

import { TestAnswer } from "./types";
import ResultRow from "./TestResults/ResultRow";
import { useNavigate } from "@tanstack/react-router";

export default function FinishedTest({
  observations,
  answers,
}: TestResultsProps) {
  type Rating = ReturnType<typeof TestAnswer.scoreRating>;
  const [filter, setFilter] = useState<Rating | null>(null);

  const averageScore =
    answers.reduce((sum, answer) => sum + answer.score, 0) / answers.length;

  const navigate = useNavigate();
  const onExit = () => {
    navigate({ to: "/" });
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <img src={taxonia} width="24px" />
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
          <IconButton aria-label="exit" onClick={() => onExit()}>
            <CloseOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Stack direction="column" margin="20px">
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
        {observations
          .map((obs, index) => (
            <ResultRow key={obs.id} observation={obs} answer={answers[index]} />
          ))
          .filter((_, index) => {
            const answer = answers[index];
            if (filter === null) {
              return true;
            }
            return TestAnswer.scoreRating(answer.score) === filter;
          })}
      </Stack>
    </Box>
  );
}

type TestResultsProps = {
  observations: Observation[];
  answers: TestAnswer[];
};
