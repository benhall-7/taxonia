import inaturalist from "src/services/inaturalist";

export function getUsersAutocompleteList(
  ...args: Parameters<typeof inaturalist.users.autocompleteList>
) {
  return inaturalist.users.autocompleteList(...args).then((res) => res.data);
}
