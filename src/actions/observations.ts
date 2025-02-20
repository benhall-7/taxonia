import inaturalist from "src/services/inaturalist";

export function getObservationsList(
  ...args: Parameters<typeof inaturalist.observations.observationsList>
) {
  return inaturalist.observations
    .observationsList(...args)
    .then((res) => res.data);
}
