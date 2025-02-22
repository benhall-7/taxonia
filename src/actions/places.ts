import inaturalist from "src/services/inaturalist";

export function getPlacesAutocompleteList(
  ...args: Parameters<typeof inaturalist.places.autocompleteList>
) {
  return inaturalist.places.autocompleteList(...args).then((res) => res.data);
}
