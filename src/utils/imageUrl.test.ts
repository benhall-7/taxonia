import { describe, it, expect } from "vitest";

import { imageUrl } from "./imageUrl";

describe(imageUrl.name, () => {
  it("substitutes the part of a URL correctly", () => {
    expect(imageUrl("proto://example.com/a/b/c", "large")).toEqual(
      "proto://example.com/a/b/large"
    );
    expect(imageUrl("proto://example.com/a/b/c.ext", "large")).toEqual(
      "proto://example.com/a/b/large.ext"
    );
  });
});
