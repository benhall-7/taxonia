import { Stack, Typography } from "@mui/material";
import { Observation } from "src/services/inaturalist/Api";
import { TestAnswer } from "../types";

export default function ResultRow({ observation, answer }: ResultRowProps) {
  return (
    <Stack
      direction="row"
      justifyContent="left"
      alignItems="center"
      spacing="8px"
      margin="8px 0"
    >
      {observation.photos?.[0]?.url && (
        <img
          src={observation.photos[0].url}
          width="100px"
          height="100px"
          style={{ borderRadius: "8px" }}
        />
      )}
      <Stack direction="column" textAlign="left">
        <Typography variant="body1">
          Guess: {answer.guess || "Skipped"}
        </Typography>
        <Typography variant="body1">
          Actual: {observation.taxon?.name}
        </Typography>
        <Typography variant="body2">
          Common name: {observation.taxon?.preferred_common_name || "None"}
        </Typography>
        <Typography variant="body1">Score: {answer.score}</Typography>
      </Stack>
    </Stack>
  );
}

type ResultRowProps = {
  observation: Observation;
  answer: TestAnswer;
};
