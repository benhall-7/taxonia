import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";
import useUser from "src/hooks/useUser";
import { QuizAnswer } from "../Quiz/QuizMain/types";
import { QuizResultResponse } from "src/services/taxonia/Api";
import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { ShowPlace } from "src/services/inaturalist/Api";

export default function RecentQuizzes() {
  // hooks
  const theme = useTheme();
  const navigate = useNavigate();

  // query hooks
  const { data: user, isFetching: isFetchingUser } = useUser();
  const quizParams: Parameters<typeof actions.getQuizResults.action>[0] = {
    limit: 12,
    offset: 0,
  };
  const { data: quizzes, isFetching: isFetchingQuizzes } = useQuery({
    queryKey: [actions.getQuizResults.key, quizParams],
    queryFn: ({ signal }) =>
      actions.getQuizResults.action(quizParams, { signal }),
    enabled: Boolean(user),
  });

  // get place identifiers from quiz results
  // kind of ugly. TODO: use well structured data in the database instead of json?
  const placeParams: Parameters<typeof actions.getPlacesDetail.action>[0] = (
    quizzes?.items ?? []
  )
    .filter((quiz) => "place" in quiz.params)
    .map((quiz) => String(quiz.params.place));
  const { data: places } = useQuery({
    queryKey: [actions.getPlacesDetail.key, placeParams],
    queryFn: ({ signal }) =>
      actions.getPlacesDetail.action(placeParams, undefined, { signal }),
    enabled: Boolean(quizzes),
  });
  const placesKey = useMemo(
    () =>
      (places?.results ?? []).reduce(
        (acc, place) => {
          if (place.id) {
            acc[place.id] = place;
          }
          return acc;
        },
        {} as Record<number, ShowPlace>
      ),
    [places]
  );

  // get taxon identifiers from quiz results
  // same problem with unstructured param data
  const taxaParams: Parameters<typeof actions.getTaxaDetail.action>[0] = (
    quizzes?.items ?? []
  )
    .filter((quiz) => "taxon" in quiz.params)
    .map((quiz) => Number(quiz.params.taxon));
  const { data: taxa } = useQuery({
    queryKey: [actions.getTaxaDetail.key, taxaParams],
    queryFn: ({ signal }) =>
      actions.getTaxaDetail.action(taxaParams, undefined, { signal }),
    enabled: Boolean(quizzes),
  });
  const taxaKey = useMemo(
    () =>
      (taxa?.results ?? []).reduce(
        (acc, taxon) => {
          if (taxon.id) {
            acc[taxon.id] = taxon;
          }
          return acc;
        },
        {} as Record<number, ShowPlace>
      ),
    [taxa]
  );

  // callbacks
  const onStartTest = (quiz: QuizResultResponse) => {
    console.log(quiz.params);
    navigate({ to: "/quiz", search: quiz.params });
  };

  // conditional renders
  if (isFetchingQuizzes || isFetchingUser) {
    return null;
  }

  if (!user) {
    return (
      <Box>
        <Typography variant="body1" color="textSecondary" textAlign="center">
          You'll need to login to save and view past quizzes
        </Typography>
      </Box>
    );
  }

  if (!quizzes) {
    return (
      <Box>
        <Alert severity="error">There's been an error loading quizzes</Alert>
      </Box>
    );
  }

  // default render
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap="16px">
      {quizzes.items.length === 0 ? (
        <Typography variant="body1" color="textSecondary" textAlign="center">
          Looks like there's no history yet. Try starting a quiz and saving your
          results, then checking back later.
        </Typography>
      ) : (
        quizzes.items.map((quiz) => {
          const result = QuizAnswer.scoreRating(quiz.score);
          const scoreColor =
            result === "bad"
              ? theme.palette.error
              : result === "ok"
                ? theme.palette.warning
                : theme.palette.success;

          const questionCount = quiz.question_count;
          const place =
            quiz.params.place !== undefined
              ? Number(quiz.params.place)
              : undefined;
          const taxon =
            quiz.params.taxon !== undefined
              ? Number(quiz.params.taxon)
              : undefined;
          return (
            <Card
              sx={{
                minWidth: "200px",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                flex: "1 0 0",
              }}
            >
              <CardContent sx={{ flexGrow: "1" }}>
                <Typography fontWeight="500">
                  Score:{" "}
                  <span style={{ color: scoreColor.main }}>
                    {quiz.score.toFixed(3)}
                  </span>
                </Typography>
                <Typography variant="body2">
                  Date: {new Date(quiz.created_at).toLocaleDateString()}
                </Typography>
                <Typography variant="caption" display="block" lineHeight="1.2">
                  Questions: {questionCount || 15}
                </Typography>
                {place && (
                  <Typography variant="caption" display="block" lineHeight="1.2">
                    {placesKey[place]?.display_name || place}
                  </Typography>
                )}
                {taxon && (
                  <Typography variant="caption" display="block" lineHeight="1.2">
                    {taxaKey[taxon]?.name || taxon}
                  </Typography>
                )}
              </CardContent>
              <CardActionArea sx={{ display: "flex", justifyContent: "end" }}>
                <Button onClick={() => onStartTest(quiz)}>Start test</Button>
              </CardActionArea>
            </Card>
          );
        })
      )}
    </Stack>
  );
}
