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
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { NewQuizForm } from "./Index/types";
import RecentQuizzes from "./Index/RecentQuizzes";

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

  const openNewQuizModal = (initialValues?: NewQuizForm) => {
    setNewQuizModalProps(initialValues);
    setNewQuizModalOpen(true);
  };

  return (
    <GeneralPage>
      <Container maxWidth="lg">
        <Stack direction="column" spacing="20px">
          <Box>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              gap="16px"
            >
              <Typography variant="h4" mb="8px">
                Previous Quizzes
              </Typography>
              <Button variant="outlined" onClick={() => openNewQuizModal()}>
                + New Quiz
              </Button>
            </Stack>

            <Box minHeight="80px">
              <RecentQuizzes />
            </Box>
          </Box>

          <Stack direction="row" gap="20px" margin="20px" flexWrap="wrap">
            <Stack
              direction="column"
              flex="2 0 0"
              minWidth="300px"
              justifyContent="start"
              textAlign="right"
            >
              <Typography variant="h4">A Taxonomy Practice Tool</Typography>
              <Typography variant="body1">
                Taxonia is a quiz-based taxonomy learning app (think: Homo
                sapiens, Felis catus, etc). It utilizes iNaturalist to select
                from real, verified observations for you to train your
                memorization and identification skills.
                <br />
                <br />
                You can use the test examples provided to try it out, or change
                the parameters to test whatever categories you want.
              </Typography>
            </Stack>

            <Box flex="1 0 0">
              <Stack direction="column" gap="8px" justifyContent="center">
                <Card sx={{ minWidth: "300px" }} elevation={2}>
                  <CardActionArea
                    onClick={() => openNewQuizModal(QUIZ_PRESETS.birds)}
                  >
                    <CardMedia
                      component="img"
                      src={QUIZ_PRESET_IMAGES.birds}
                      sx={{ width: "100%", height: "100px" }}
                    />

                    <CardContent>
                      <Typography>Birds of North America</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ minWidth: "300px" }} elevation={2}>
                  <CardActionArea
                    onClick={() => openNewQuizModal(QUIZ_PRESETS.mammals)}
                  >
                    <CardMedia
                      component="img"
                      src={QUIZ_PRESET_IMAGES.mammals}
                      sx={{ width: "100%", height: "100px" }}
                    />

                    <CardContent>
                      <Typography>Mammals of the US</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ minWidth: "300px" }} elevation={2}>
                  <CardActionArea
                    onClick={() => openNewQuizModal(QUIZ_PRESETS.orchids)}
                  >
                    <CardMedia
                      component="img"
                      src={QUIZ_PRESET_IMAGES.orchids}
                      sx={{ width: "100%", height: "100px" }}
                    />

                    <CardContent>
                      <Typography>Orchids of Pennsylvania</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        {/* Modals */}
        <NewQuizDialog
          key={JSON.stringify(newQuizModalProps)}
          open={newQuizModalOpen}
          setOpen={setNewQuizModalOpen}
          initialValues={newQuizModalProps}
        />
      </Container>
    </GeneralPage>
  );
}
