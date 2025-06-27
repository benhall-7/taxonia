import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import actions from "src/actions";
import { ShowTaxon } from "src/services/inaturalist/Api";
import { chunk } from "src/utils/chunk";
import { Trie, TrieNode } from "src/utils/trie";

export function TaxonTree({ trie }: { trie: Trie<number, undefined> }) {
  const taxonIds = useMemo(() => trie.keys(), [trie]);

  const { results: taxaResults } = useQueries({
    // API takes a max of 30 IDs per request
    queries: chunk(taxonIds, 30).map((chunkIds) => ({
      queryKey: [actions.getTaxaList.key, chunkIds],
      queryFn: () => actions.getTaxaDetail.action(chunkIds),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    })),
    combine: (results) => ({
      results: results.flatMap((res) => res.data?.results ?? []),
      // TODO: add loading indicator?
      pending: results.some((res) => res.isPending),
    }),
  });

  if (trie.root.children.size == 0) {
    return null;
  }

  return (
    <SimpleTreeView defaultExpandedItems={taxonIds.map(String)}>
      {[...trie.root.children].map(([childId, childNode]) => (
        <TaxonTreeItem
          nodeKey={String(childId)}
          nodeId={childId}
          node={childNode}
          taxa={taxaResults}
        />
      ))}
    </SimpleTreeView>
  );
}

function TaxonTreeItem({
  nodeKey,
  nodeId,
  node,
  taxa,
}: {
  nodeKey: string;
  nodeId: number;
  node: TrieNode<number, undefined>;
  taxa: ShowTaxon[];
}) {
  const taxon = taxa.find((taxon) => taxon.id === nodeId);
  const taxonName = taxon?.preferred_common_name
    ? `${taxon.name} (${taxon.preferred_common_name})`
    : taxon?.name;
  const label = taxon ? `${taxon.rank?.toUpperCase()}: ${taxonName}` : nodeId;
  return (
    <TreeItem key={nodeKey} label={label} itemId={String(nodeId)}>
      {node.children.size > 0
        ? [...node.children].map(([childId, childNode]) => (
            <TaxonTreeItem
              nodeKey={String(childId)}
              nodeId={childId}
              node={childNode}
              taxa={taxa}
            />
          ))
        : null}
    </TreeItem>
  );
}
