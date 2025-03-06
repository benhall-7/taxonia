import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { TestAnswer } from "./types";
import TestQuestion from "./ActiveTest/TestQuestion";
import ConfirmExitDialog from "./ActiveTest/ConfirmExitDialog";
import AnswerDialog from "./ActiveTest/AnswerDialog";

import { Observation } from "src/services/inaturalist/Api";
import { homeRoute } from "src/routes/index/home";
import taxonia from "src/images/taxonia.png";

export default function ActiveTest({
  currentObservation,
  commitAnswer,
  question,
  questionsLen,
}: ActiveTestProps) {
  const [submittedAnswer, setSubmittedAnswer] = useState<TestAnswer>(
    TestAnswer.default()
  );
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);

  const submitAnswer = (input?: string) => {
    const answer = TestAnswer.score(currentObservation, input);
    setSubmittedAnswer(answer);
    setShowAnswerDialog(true);
  };

  const onAnswerDialogClose = () => {
    commitAnswer(submittedAnswer);
    setSubmittedAnswer(TestAnswer.default());
    setShowAnswerDialog(false);
  };

  const navigate = homeRoute.useNavigate();
  const onExit = () => {
    navigate({ to: homeRoute.fullPath });
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
      <AppBar position="static">
        <Toolbar>
          <img src={taxonia} width="24px" />
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
        <TestQuestion
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

type ActiveTestProps = {
  currentObservation: Observation;
  question: number;
  questionsLen: number;
  commitAnswer: (answer: TestAnswer) => void;
};
