import { Observation } from "src/services/inaturalist/Api";
import "./ObservationDetail.css";
import { imageUrl } from "src/services/inaturalist_open_data";
import Rectangle from "src/components/Rectangle";

export default function ObservationDetail(obs: ObservationDetailProps) {
  const originalUrl = obs.photos?.[0]?.url;
  const mediumUrl = originalUrl ? imageUrl(originalUrl, "medium") : originalUrl;

  return (
    <div className="observation-detail">
      <h1>{obs.taxon?.name || "No taxon name"}</h1>
      <Rectangle width="100%" height="200px">
        <img src={mediumUrl} alt={obs.taxon?.name || "no image found"} />
      </Rectangle>
      <p>{obs.taxon?.preferred_common_name}</p>
      <p>{obs.place_guess}</p>
    </div>
  );
}

type ObservationDetailProps = Observation;
