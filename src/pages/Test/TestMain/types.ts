import { Observation } from "src/services/inaturalist/Api";
import { normalizedLevenshtein } from "src/utils/levenshtein";

export type TestAnswer = {
  guess?: string;
  score: number;
};

export const TestAnswer = {
  score(observation: Observation, guess?: string): TestAnswer {
    const unlerped =
      1 - normalizedLevenshtein(observation.taxon?.name || "", guess || "");

    const lerped =
      unlerped < 0.5
        ? 0
        : unlerped > 0.95
          ? 1
          : (unlerped - 0.5) / (0.95 - 0.5);

    return {
      guess,
      score: lerped,
    };
  },
  default(): TestAnswer {
    return {
      guess: undefined,
      score: 0,
    };
  },
};
