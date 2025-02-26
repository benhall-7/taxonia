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

export default function AnswerDialog({
  open,
  onClose,
  guess,
  observation,
}: AnswerDialogProps) {
  // closing is an animation, and we only want the state to update
  // once the modal opens again
  const [currentGuess, setCurrentGuess] = useState(guess);
  const [currentObservation, setCurrentObservation] = useState(observation);

  useEffect(() => {
    if (open) {
      setCurrentGuess(guess);
      setCurrentObservation(observation);
    }
  }, [open, observation, guess]);

  const accuracy = currentGuess === currentObservation.taxon?.name ? 1 : 0;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Solution</DialogTitle>
      <DialogContent>
        <Typography>Guess: {currentGuess || "Skipped"}</Typography>
        <Typography>Actual: {currentObservation.taxon?.name}</Typography>
        <Typography>
          Common name: {currentObservation?.taxon?.preferred_common_name}
        </Typography>
        <Typography>Accuracy: {accuracy}</Typography>
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
  guess?: string;
  observation: Observation;
};
