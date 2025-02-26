import { Box, Typography } from "@mui/material";
import { Observation } from "src/services/inaturalist/Api";
import { TestAnswer } from "./types";
import ResultRow from "./TestResults/ResultRow";

export default function TestResults({
  observations,
  answers,
}: TestResultsProps) {
  const averageScore =
    answers.reduce((sum, answer) => sum + answer.score, 0) / answers.length;
  return (
    <Box textAlign="center">
      <Typography variant="h3">Results</Typography>
      <Typography variant="subtitle2">
        Overall accuracy: {averageScore}
      </Typography>
      {observations.map((obs, index) => (
        <ResultRow observation={obs} answer={answers[index]} />
      ))}
    </Box>
  );
}

type TestResultsProps = {
  observations: Observation[];
  answers: TestAnswer[];
};
