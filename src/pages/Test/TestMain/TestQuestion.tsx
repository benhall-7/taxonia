import { useState } from "react";
import { Observation } from "src/services/inaturalist/Api";
import { Box } from "@mui/material";
import { imageUrl } from "src/utils/imageUrl";

export default function TestQuestion({ observation, next }: TestQuestionProps) {
  const [guess, setGuess] = useState("");
  const [whichPhoto] = useState(0);

  const indexedPhoto = observation.photos?.[whichPhoto];
  const originalUrl = indexedPhoto?.url;
  const newUrl = originalUrl && imageUrl(originalUrl, "medium");

  return (
    <Box>
      <img src={newUrl} alt="photo failed to load" width="240px" />
      <br />
      Location: {observation.place_guess}
      <br />
      Date: {observation.created_at}
      <br />
      Your species guess (format is two words: Genus and species-epiphet ):
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={guess} onChange={(e) => setGuess(e.target.value)} />
      </form>
      <br />
      <button onClick={next}>NEXT</button>
    </Box>
  );
}

type TestQuestionProps = {
  observation: Observation;
  next: () => void;
};
