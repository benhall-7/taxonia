import {
  Alert,
  AlertColor,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Observation } from "src/services/inaturalist/Api";
import { TestAnswer } from "../types";
import { imageUrl } from "src/utils/imageUrl";

export default function ResultRow({
  observation,
  answer,
}: ResultRowProps) {
  const rating = TestAnswer.scoreRating(answer.score);
  const alertColors: Record<typeof rating, AlertColor> = {
    bad: "error",
    ok: "warning",
    good: "success"
  }

  const url = observation.photos?.[0].url;
  const newUrl = url ? imageUrl(url, "medium") : undefined;

  return (
    <Card
      sx={{
        display: "flex",
        margin: "8px 0",
        minWidth: "400px",
      }}
      elevation={2}
    >
      <CardMedia
        component="img"
        sx={{
          width: "180px",
          height: "180px",
          minHeight: "180px",
          minWidth: "180px",
        }}
        image={newUrl}
        alt={observation.taxon?.name}
      />
      <CardContent
        sx={{
          textOverflow: "ellipsis",
          overflow: "scroll",
          whiteSpace: "nowrap",
        }}
      >
        <Stack
          direction="column"
          textAlign="left"
          height="100%"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{observation.taxon?.name}</Typography>
            <Typography variant="subtitle1">
              {observation.taxon?.preferred_common_name || "No common name"}
            </Typography>
          </Box>
          <Alert
            variant="standard"
            severity={alertColors[rating]}
          >
            <Typography variant="body1">
              Guess: {answer.guess || "Skipped"}
            </Typography>
            <Typography variant="body1">
              Score: {answer.score.toFixed(3)}
            </Typography>
          </Alert>
        </Stack>
      </CardContent>
    </Card>
  );
}

type ResultRowProps = {
  observation: Observation;
  answer: TestAnswer;
};
