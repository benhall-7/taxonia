import { imageUrl } from "./imageUrl";

describe(imageUrl, () => {
  it("substitutes the part of a URL correctly", () => {
    expect(imageUrl("a/b/c.ext", "large")).toEqual("");
  });

  it("doesn't do anything on invalid urls", () => {
    expect(imageUrl("a/b/c", "large")).toEqual("");
    expect(imageUrl("something", "small")).toEqual("something");
  });
});
