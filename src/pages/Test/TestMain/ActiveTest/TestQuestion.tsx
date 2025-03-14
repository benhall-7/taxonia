import { useCallback, useState } from "react";
import { Observation } from "src/services/inaturalist/Api";
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
import ImageModal from "src/components/ImageModal";

export default function TestQuestion({
  observation,
  submitAnswer,
}: TestQuestionProps) {
  const [guess, setGuess] = useState("");
  const [guessError, setGuessError] = useState<boolean>(false);
  const [whichPhoto, setWhichPhoto] = useState(0);

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageModalSrc, setImageModalSrc] = useState<string>();

  const indexedPhoto = observation.photos?.[whichPhoto];

  const photoSrc = indexedPhoto?.url && imageUrl(indexedPhoto.url, "medium");

  const numPhotos = observation.photos?.length ?? 0;

  const preloadNextImg = useCallback(() => {
    if (numPhotos <= 1) {
      return;
    }
    const nextIndex = (whichPhoto + 1) % numPhotos;
    const next = observation.photos?.[nextIndex];
    const nextSrc = next?.url && imageUrl(next.url, "medium");
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

  const imageClick = () => {
    const originalSrc =
      indexedPhoto?.url && imageUrl(indexedPhoto.url, "original");
    setImageModalSrc(originalSrc);
    setImageModalOpen(true);
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
              cursor: "pointer",
            }}
            onLoad={preloadNextImg}
            onClick={imageClick}
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
          autoFocus
          error={guessError}
        />
        <ButtonGroup>
          <Button
            variant="contained"
            disabled={guess.length === 0}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            disabled={guess.length > 0}
            color="warning"
            onClick={() => submitAnswer()}
          >
            Skip
          </Button>
        </ButtonGroup>
      </Stack>

      {/* Modals */}
      <ImageModal
        open={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        src={imageModalSrc}
      />
    </Box>
  );
}

type TestQuestionProps = {
  observation: Observation;
  submitAnswer: (input?: string) => void;
};
