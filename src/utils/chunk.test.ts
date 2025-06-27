import { describe, it, expect } from "vitest";

import { chunk } from "./chunk";

describe(chunk.name, () => {
  it("calculates the absolute distances", () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
  });
});
