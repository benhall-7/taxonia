export function chunk<T>(arr: Array<T>, size: number) {
  if (size > 0) {
    const numChunks = Math.ceil(arr.length / size);
    return Array.from({ length: numChunks }, (_, i) => i).map((chunkId) =>
      arr.slice(chunkId * size, (chunkId + 1) * size)
    );
  }
  return [];
}
