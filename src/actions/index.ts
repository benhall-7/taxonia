import { getObservationsList } from "./observations";
import { getPlacesAutocompleteList } from "./places";
import { getTaxaAutocompleteList, getTaxaDetail, getTaxaList } from "./taxa";
import { getUsersAutocompleteList } from "./users";

const actionsList = {
  getObservationsList,
  getPlacesAutocompleteList,
  getTaxaAutocompleteList,
  getTaxaList,
  getTaxaDetail,
  getUsersAutocompleteList,
};

type Entry<K, V> = { key: K; action: V };

type WithKeys<T> = {
  [K in keyof T]: Entry<K, T[K]>;
};

const actions = Object.entries(actionsList).reduce(
  (acc, [k, v]) => {
    acc[k] = { key: k, action: v };
    return acc;
  },
  {} as Record<string, Entry<unknown, unknown>>
) as WithKeys<typeof actionsList>;

export default actions;
