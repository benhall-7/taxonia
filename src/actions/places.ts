import inaturalist from "src/services/inaturalist";

export function getPlacesAutocompleteList(
  ...args: Parameters<typeof inaturalist.places.autocompleteList>
) {
  return inaturalist.places.autocompleteList(...args).then((res) => res.data);
}

export function getPlacesDetail(
  ...args: Parameters<typeof inaturalist.places.placesDetail>
) {
  return inaturalist.places.placesDetail(...args).then((res) => res.data);
}
