import { describe, it, expect } from "vitest";

import { levenshtein, normalizedLevenshtein } from "./levenshtein";

describe(levenshtein.name, () => {
  it("calculates the absolute distances", () => {
    expect(levenshtein("abc", "abc")).toEqual(0);
    expect(levenshtein("abc", "def")).toEqual(3);
  });
});

describe(normalizedLevenshtein.name, () => {
  it("normalizes the distance", () => {
    expect(normalizedLevenshtein("a", "a")).toEqual(0);
    expect(normalizedLevenshtein("a", "bdef")).toEqual(1);
    expect(normalizedLevenshtein("ab", "ac")).toEqual(0.5);
  });
});
