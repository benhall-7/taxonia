import { useState } from "react";

import FinishedQuiz from "./QuizMain/FinishedQuiz";
import ActiveQuiz from "./QuizMain/ActiveQuiz";
import { QuizAnswer } from "./QuizMain/types";

import { ObservationsResponse } from "src/services/inaturalist/Api";

export default function QuizMain({ observations }: QuizMainProps) {
  const [observationsStable] = useState(observations);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const numQuestions = observationsStable.results.length;

  const commitAnswer = (answer: QuizAnswer) => {
    setAnswers([...answers, answer]);
    setQuestion(question + 1);
  };

  return question < numQuestions ? (
    <ActiveQuiz
      key={question}
      currentObservation={observationsStable.results[question]}
      commitAnswer={commitAnswer}
      question={question}
      questionsLen={observationsStable.results.length}
    />
  ) : (
    <FinishedQuiz
      key={question}
      observations={observationsStable.results}
      answers={answers}
    />
  );
}

type QuizMainProps = {
  observations: ObservationsResponse;
};
