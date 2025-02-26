import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { ObservationsResponse } from "src/services/inaturalist/Api";
import TestQuestion from "./TestMain/TestQuestion";
import taxonia from "src/images/taxonia.png";
import { CloseOutlined } from "@mui/icons-material";
import AnswerDialog from "./TestMain/AnswerDialog";
import { homeRoute } from "src/routes/index/home";
import ConfirmExitDialog from "./TestMain/ConfirmExitDialog";
import TestResults from "./TestMain/TestResults";

export default function TestMain({ observations }: TestMainProps) {
  const [observationsStable] = useState(observations);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<string | undefined>>([]);

  const [currentGuess, setCurrentGuess] = useState<string | undefined>();
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);

  const [showExitDialog, setShowExitDialog] = useState(false);

  const currentObservation = observationsStable.results[question];

  const submitAnswer = (input?: string) => {
    setCurrentGuess(input);
    setShowAnswerDialog(true);
  };

  const onAnswerDialogClose = () => {
    setCurrentGuess(undefined);
    setAnswers([...answers, currentGuess]);
    setQuestion(question + 1);
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
            {currentObservation &&
              `Guess the species: (${question + 1} / ${observationsStable.results.length})`}
          </Typography>
          <IconButton aria-label="exit" onClick={onClickExitButton}>
            <CloseOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box height="20px" />

      {currentObservation ? (
        <TestQuestion
          key={currentObservation.id}
          observation={currentObservation}
          submitAnswer={submitAnswer}
        />
      ) : (
        <TestResults />
      )}

      {currentObservation && (
        <AnswerDialog
          open={showAnswerDialog}
          onClose={onAnswerDialogClose}
          guess={currentGuess}
          observation={currentObservation}
        />
      )}

      <ConfirmExitDialog
        open={showExitDialog}
        onClose={handleExitDialogResponse}
      />
    </Box>
  );
}

type TestMainProps = {
  observations: ObservationsResponse;
};
