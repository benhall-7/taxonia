import inaturalist from "src/services/inaturalist";

export function getTaxaAutocompleteList(
  ...args: Parameters<typeof inaturalist.taxa.autocompleteList>
) {
  return inaturalist.taxa.autocompleteList(...args).then((res) => res.data);
}
