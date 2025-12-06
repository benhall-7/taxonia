import { getObservationsList } from "./observations";
import { getPlacesAutocompleteList, getPlacesDetail } from "./places";
import { getQuizResults, postQuizResults } from "./quizzes";
import { getTaxaAutocompleteList, getTaxaDetail, getTaxaList } from "./taxa";
import { getAuthLoginUrl, getAuthMe } from "./user";
import { getUsersAutocompleteList } from "./users";

const actionsList = {
  getObservationsList,
  getPlacesAutocompleteList,
  getPlacesDetail,
  getTaxaAutocompleteList,
  getTaxaList,
  getTaxaDetail,
  getUsersAutocompleteList,
  getAuthMe,
  getAuthLoginUrl,
  getQuizResults,
  postQuizResults,
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
