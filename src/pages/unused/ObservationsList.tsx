import { Observation } from "src/services/inaturalist/Api";
import ObservationDetail from "./ObservationsList/ObservationDetail";
import "./ObservationsList.css";

export default function ObservationsList({
  observations,
}: ObservationsListProps) {
  console.log(observations);
  return (
    <div className="observations-list">
      {observations
        .filter((obs) => obs.id !== undefined)
        .map((obs) => (
          <ObservationDetail key={obs.id} {...obs} />
        ))}
    </div>
  );
}

type ObservationsListProps = {
  observations: Observation[];
};
