import { getObservationsList } from "src/actions/observations";

const actionsList = {
  getObservationsList,
};

type WithKeys<T> = {
  [K in keyof T]: { key: K; action: T[K] };
};

const actions = Object.entries(actionsList).reduce(
  (acc, [k, v]) => {
    const key = k as keyof typeof actionsList;
    acc[key] = { key, action: v };
    return acc;
  },
  {} as WithKeys<typeof actionsList>
);

export default actions;
