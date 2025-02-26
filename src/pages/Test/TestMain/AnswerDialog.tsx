import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Observation } from "src/services/inaturalist/Api";
import { TestAnswer } from "./types";

export default function AnswerDialog({
  open,
  onClose,
  answer,
  observation,
}: AnswerDialogProps) {
  // closing is an animation, and we only want the state to update
  // once the modal opens again
  const [currentGuess, setCurrentGuess] = useState(answer);
  const [currentObservation, setCurrentObservation] = useState(observation);

  useEffect(() => {
    if (open) {
      setCurrentGuess(answer);
      setCurrentObservation(observation);
    }
  }, [open, observation, answer]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Solution</DialogTitle>
      <DialogContent>
        <Typography>Guess: {currentGuess.guess || "Skipped"}</Typography>
        <Typography>Actual: {currentObservation.taxon?.name}</Typography>
        <Typography>
          Common name: {currentObservation?.taxon?.preferred_common_name}
        </Typography>
        <Typography>Accuracy: {currentGuess.score}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Next</Button>
      </DialogActions>
    </Dialog>
  );
}

type AnswerDialogProps = {
  open: boolean;
  onClose: () => void;
  answer: TestAnswer;
  observation: Observation;
};
