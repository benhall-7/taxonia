import { useState } from "react";
import { ObservationsResponse } from "src/services/inaturalist/Api";
import TestQuestion from "./TestMain/TestQuestion";
import { Box } from "@mui/material";

export default function TestMain({ observations }: TestMainProps) {
  const [observationsStable] = useState(observations);
  const [question, setQuestion] = useState(0);

  const currentObservation = observationsStable.results[question];

  const next = () => {
    setQuestion(question + 1);
  };

  return (
    <Box>
      {currentObservation ? (
        <>
          Question number: {question + 1} / {observationsStable.results.length}
          <TestQuestion
            key={currentObservation.id}
            observation={currentObservation}
            next={next}
          />{" "}
        </>
      ) : (
        <>Test Results!</>
      )}
    </Box>
  );
}

type TestMainProps = {
  observations: ObservationsResponse;
};
