import inaturalist from "src/services/inaturalist";

export function getTaxaAutocompleteList(
  ...args: Parameters<typeof inaturalist.taxa.autocompleteList>
) {
  return inaturalist.taxa.autocompleteList(...args).then((res) => res.data);
}

export function getTaxaList(
  ...args: Parameters<typeof inaturalist.taxa.taxaList>
) {
  return inaturalist.taxa.taxaList(...args).then((res) => res.data);
}

export function getTaxaDetail(
  ...args: Parameters<typeof inaturalist.taxa.taxaDetail>
) {
  return inaturalist.taxa.taxaDetail(...args).then((res) => res.data);
}
