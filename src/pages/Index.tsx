import GeneralPage from "src/components/GeneralPage";
import NewQuizDialog from "./Index/NewQuizDialog";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { NewQuizForm } from "./Index/types";

const QUIZ_PRESETS = {
  birds: {
    questionCount: 15,
    threatened: "undefined",
    introduced: "undefined",
    taxon: { id: 3, name: "Aves" },
    place: { id: 97394, display_name: "North America" },
  },
  mammals: {
    questionCount: 15,
    threatened: "undefined",
    introduced: "false",
    taxon: { id: 40151, name: "Mammalia" },
    place: { id: 1, display_name: "United States" },
  },
  orchids: {
    questionCount: 15,
    threatened: "undefined",
    introduced: "false",
    taxon: { id: 47217, name: "Orchidaceae" },
    place: { id: 42, display_name: "Pennsylvania" },
  },
} satisfies Record<string, NewQuizForm>;

const QUIZ_PRESET_IMAGES = {
  birds:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/395125966/medium.jpg",
  mammals:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/384525743/medium.jpg",
  orchids:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/447322136/medium.jpeg",
};

export default function Index() {
  const [newQuizModalOpen, setNewQuizModalOpen] = useState(false);
  const [newQuizModalProps, setNewQuizModalProps] = useState<NewQuizForm>();

  // TODO: implement an API for a user's 12(?) most recent quizzes
  // const recentQuizzes = [];

  const openNewQuizModal = (initialValues?: NewQuizForm) => {
    setNewQuizModalProps(initialValues);
    setNewQuizModalOpen(true);
  };

  return (
    <GeneralPage>
      <Stack direction="column" spacing="20px">
        <Box textAlign="center">
          <Button variant="outlined" onClick={() => openNewQuizModal()}>
            + New Quiz
          </Button>
        </Box>

        {/* <Box minHeight="120px">
          <Typography variant="h3">Recent quizzes</Typography>
          {recentQuizzes.length === 0 && (
            <Typography
              variant="body1"
              color="textSecondary"
              textAlign="center"
            >
              Looks like there's no history yet. Try starting a quiz and saving
              your results, then checking back later.
            </Typography>
          )}
        </Box> */}

        <Box>
          <Typography variant="h3">Example quizzes</Typography>
          <Stack
            direction="row"
            gap="8px"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Card
              sx={{ minWidth: "400px", maxWidth: "600px", flex: "1 0 0" }}
              elevation={2}
            >
              <CardActionArea
                onClick={() => openNewQuizModal(QUIZ_PRESETS.birds)}
              >
                <CardMedia
                  component="img"
                  src={QUIZ_PRESET_IMAGES.birds}
                  sx={{ width: "100%", height: "200px" }}
                />

                <CardContent>
                  <Typography>Birds of North America</Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{ minWidth: "400px", maxWidth: "600px", flex: "1 0 0" }}
              elevation={2}
            >
              <CardActionArea
                onClick={() => openNewQuizModal(QUIZ_PRESETS.mammals)}
              >
                <CardMedia
                  component="img"
                  src={QUIZ_PRESET_IMAGES.mammals}
                  sx={{ width: "100%", height: "200px" }}
                />

                <CardContent>
                  <Typography>Native Mammals of the United States</Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{ minWidth: "400px", maxWidth: "600px", flex: "1 0 0" }}
              elevation={2}
            >
              <CardActionArea
                onClick={() => openNewQuizModal(QUIZ_PRESETS.orchids)}
              >
                <CardMedia
                  component="img"
                  src={QUIZ_PRESET_IMAGES.orchids}
                  sx={{ width: "100%", height: "200px" }}
                />

                <CardContent>
                  <Typography>Native Orchids of Pennsylvania</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Box>
      </Stack>

      {/* Modals */}
      <NewQuizDialog
        key={JSON.stringify(newQuizModalProps)}
        open={newQuizModalOpen}
        setOpen={setNewQuizModalOpen}
        initialValues={newQuizModalProps}
      />
    </GeneralPage>
  );
}
