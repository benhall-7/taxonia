import { useCallback, useState } from "react";
import { Observation, Photo } from "src/services/inaturalist/Api";
import {
  Box,
  Button,
  ButtonGroup,
  FormLabel,
  MobileStepper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { imageUrl } from "src/utils/imageUrl";

export default function TestQuestion({
  observation,
  submitAnswer,
}: TestQuestionProps) {
  const [guess, setGuess] = useState("");
  const [guessError, setGuessError] = useState<boolean>(false);
  const [whichPhoto, setWhichPhoto] = useState(0);

  const indexedPhoto = observation.photos?.[whichPhoto];

  const getSrc = (photo?: Photo) => {
    const originalUrl = photo?.url;
    return originalUrl && imageUrl(originalUrl, "medium");
  };
  const photoSrc = getSrc(indexedPhoto);

  const numPhotos = observation.photos?.length ?? 0;

  const preloadNextImg = useCallback(() => {
    if (numPhotos <= 1) {
      return;
    }
    const nextIndex = (whichPhoto + 1) % numPhotos;
    const nextSrc = getSrc(observation.photos?.[nextIndex]);
    if (nextSrc) {
      new Image().src = nextSrc;
    }
  }, [observation, whichPhoto, numPhotos]);

  const prevPhoto = () => {
    if (numPhotos > 0) {
      setWhichPhoto((whichPhoto - 1 + numPhotos) % numPhotos);
    }
  };

  const nextPhoto = () => {
    if (numPhotos > 0) {
      setWhichPhoto((whichPhoto + 1) % numPhotos);
    }
  };

  const handleSubmit = () => {
    if (guess.length === 0) {
      setGuessError(true);
    } else {
      setGuessError(false);
      submitAnswer(guess);
    }
  };

  return (
    <Box maxWidth="800px" margin="auto">
      <Stack
        height="480px"
        justifyContent="space-between"
        alignItems="center"
        gap="8px"
      >
        <Box flex="1 1 0" textAlign="center">
          <img
            key={photoSrc}
            src={photoSrc}
            style={{
              height: "0",
              minHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
            onLoad={preloadNextImg}
          />
        </Box>
        {numPhotos > 1 && (
          <Box width="fit-content">
            <MobileStepper
              variant="dots"
              position="static"
              steps={numPhotos}
              activeStep={whichPhoto}
              backButton={<Button onClick={prevPhoto}>Prev</Button>}
              nextButton={<Button onClick={nextPhoto}>Next</Button>}
            />
          </Box>
        )}
      </Stack>

      <Box height="20px" />

      <Stack>
        {observation.place_guess && (
          <Typography variant="body1">
            Location: {observation.place_guess}
          </Typography>
        )}
        {observation.created_at && (
          <Typography variant="body1">
            Date: {observation.created_at}
          </Typography>
        )}

        <FormLabel id="species-test-guess-input">Species name</FormLabel>
        <TextField
          aria-describedby="species-test-guess-input"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Homo sapiens"
          size="medium"
          margin="normal"
          error={guessError}
        />
        <ButtonGroup variant="text">
          <Button disabled={guess.length === 0} onClick={handleSubmit}>
            Submit
          </Button>
          <Button color="warning" onClick={() => submitAnswer()}>
            Skip
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

type TestQuestionProps = {
  observation: Observation;
  submitAnswer: (input?: string) => void;
};
