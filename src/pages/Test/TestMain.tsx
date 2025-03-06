import { useState } from "react";

import FinishedTest from "./TestMain/FinishedTest";
import { TestAnswer } from "./TestMain/types";
import ActiveTest from "./TestMain/ActiveTest";

import { ObservationsResponse } from "src/services/inaturalist/Api";

export default function TestMain({ observations }: TestMainProps) {
  const [observationsStable] = useState(observations);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);

  const currentObservation = observationsStable.results[question];

  const commitAnswer = (answer: TestAnswer) => {
    setAnswers([...answers, answer]);
    setQuestion(question + 1);
  };


  return currentObservation ? (
    <ActiveTest
      key={question}
      currentObservation={currentObservation}
      commitAnswer={commitAnswer}
      question={question}
      questionsLen={observationsStable.results.length}
    />
  ) : (
    <FinishedTest
      key={question}
      observations={observationsStable.results}
      answers={answers}
    />
  );
}

type TestMainProps = {
  observations: ObservationsResponse;
};
