export interface TrieNode<K, T> {
  children: Map<K, TrieNode<K, T>>;
  value?: T;
}

export class Trie<K, T> {
  public root: TrieNode<K, T> = { children: new Map() };

  insert(path: K[], value: T): void {
    let current = this.root;
    for (const step of path) {
      if (!current.children.has(step)) {
        current.children.set(step, { children: new Map() });
      }
      current = current.children.get(step)!;
    }
    current.value = value;
  }

  search(path: K[]): T | undefined {
    let current = this.root;
    for (const step of path) {
      if (!current.children.has(step)) {
        return undefined;
      }
      current = current.children.get(step)!;
    }
    return current.value;
  }

  keys(): K[] {
    let keys: K[] = [];
    let stack = [this.root];
    while (stack.length > 0) {
      const top = stack.pop()!;
      keys = [...keys, ...top.children.keys()];
      stack = [...stack, ...top.children.values()];
    }

    return keys;
  }
}
