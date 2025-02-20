type ImageSize = "square" | "thumb" | "small" | "medium" | "large" | "original";

export function imageUrl(originalUrl: string, imageSize: ImageSize) {
  const original = new URL(originalUrl);
  const pathParts = original.pathname.split("/");

  if (pathParts.length > 0) {
    const lastPart = pathParts[pathParts.length - 1];
    const filenameParts = lastPart.split(".");

    if (filenameParts.length > 0) {
      filenameParts[0] = imageSize;
      pathParts[pathParts.length - 1] = filenameParts.join(".");

      original.pathname = pathParts.join("/");
    }
  }

  return original.toString();
}
