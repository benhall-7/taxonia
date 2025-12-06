import taxonia from "src/services/taxonia/index.ts";

export function getQuizResults(
  ...args: Parameters<typeof taxonia.quiz.resultsList>
) {
  return taxonia.quiz.resultsList(...args).then((res) => res.data);
}

export function postQuizResults(
  ...args: Parameters<typeof taxonia.quiz.resultsCreate>
) {
  return taxonia.quiz.resultsCreate(...args).then((res) => res.data);
}
