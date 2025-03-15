import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { QuizAnswer } from "./types";
import QuizQuestion from "./ActiveQuiz/QuizQuestion";
import ConfirmExitDialog from "./ActiveQuiz/ConfirmExitDialog";
import AnswerDialog from "./ActiveQuiz/AnswerDialog";

import { Observation } from "src/services/inaturalist/Api";
import taxonia from "src/images/taxonia2.png";
import { useNavigate } from "@tanstack/react-router";

export default function ActiveQuiz({
  currentObservation,
  commitAnswer,
  question,
  questionsLen,
}: ActiveQuizProps) {
  const [submittedAnswer, setSubmittedAnswer] = useState<QuizAnswer>(
    QuizAnswer.default()
  );
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);

  const submitAnswer = (input?: string) => {
    const answer = QuizAnswer.score(currentObservation, input);
    setSubmittedAnswer(answer);
    setShowAnswerDialog(true);
  };

  const onAnswerDialogClose = () => {
    commitAnswer(submittedAnswer);
    setSubmittedAnswer(QuizAnswer.default());
    setShowAnswerDialog(false);
  };

  const navigate = useNavigate();
  const onExit = () => {
    navigate({ to: "/" });
  };

  const onClickExitButton = () => {
    if (currentObservation) {
      setShowExitDialog(true);
    } else {
      onExit();
    }
  };

  const handleExitDialogResponse = (exit: boolean) => {
    if (exit) {
      onExit();
    } else {
      setShowExitDialog(false);
    }
  };

  return (
    <Box>
      <AppBar position="static" sx={{ padding: "8px" }}>
        <Toolbar>
          <img src={taxonia} width="64px" />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "8px" }}
            textAlign="center"
          >
            Guess the species: ({question + 1} / {questionsLen})
          </Typography>
          <IconButton aria-label="exit" onClick={onClickExitButton}>
            <CloseOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box margin="20px">
        <QuizQuestion
          key={currentObservation.id}
          observation={currentObservation}
          submitAnswer={submitAnswer}
        />
      </Box>

      <AnswerDialog
        open={showAnswerDialog}
        onClose={onAnswerDialogClose}
        answer={submittedAnswer}
        observation={currentObservation}
      />

      <ConfirmExitDialog
        open={showExitDialog}
        onClose={handleExitDialogResponse}
      />
    </Box>
  );
}

type ActiveQuizProps = {
  currentObservation: Observation;
  question: number;
  questionsLen: number;
  commitAnswer: (answer: QuizAnswer) => void;
};
