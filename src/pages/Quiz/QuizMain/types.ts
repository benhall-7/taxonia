import { Observation } from "src/services/inaturalist/Api";
import { normalizedLevenshtein } from "src/utils/levenshtein";

export type QuizAnswer = {
  guess?: string;
  score: number;
};

export const QuizAnswer = {
  score(observation: Observation, guess?: string): QuizAnswer {
    const normalizedA = observation.taxon?.name?.trim().toLocaleLowerCase();
    const normalizedB = guess?.trim().toLocaleLowerCase();

    const wordsA = normalizedA?.split(" ") || [];
    const wordsB = normalizedB?.split(" ") || [];

    const count = Math.max(wordsA.length, wordsB.length);

    const range = Array.from({ length: count }, (_, index) => index);
    const scores = range.map((index) => {
      const wordA = wordsA[index] || "";
      const wordB = wordsB[index] || "";

      const unlerped = 1 - normalizedLevenshtein(wordA, wordB);
      const lerped =
        unlerped < 0.5
          ? 0
          : unlerped > 0.9
            ? 1
            : (unlerped - 0.5) / (0.9 - 0.5);

      return lerped;
    });

    const averageScore =
      scores.reduce((acc, score) => acc + score, 0) / scores.length;

    return {
      guess,
      score: averageScore,
    };
  },
  scoreRating(score: number) {
    if (score < 0.5) {
      return "bad";
    }
    if (score < 0.9) {
      return "ok";
    }
    return "good";
  },
  default(): QuizAnswer {
    return {
      guess: undefined,
      score: 0,
    };
  },
};
