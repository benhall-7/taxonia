import GeneralPage from "src/components/GeneralPage";
import NewTestDialog from "./Index/NewTestDialog";
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
import { NewTestForm } from "./Index/types";

const TEST_PRESETS = {
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
} satisfies Record<string, NewTestForm>;

const TEST_PRESET_IMAGES = {
  birds:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/395125966/medium.jpg",
  mammals:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/384525743/medium.jpg",
  orchids:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/447322136/medium.jpeg",
};

export default function Index() {
  const [newTestModalOpen, setNewTestModalOpen] = useState(false);
  const [newTestModalProps, setNewTestModalProps] = useState<NewTestForm>();

  // TODO: implement this API endpoint
  const recentTests = [];

  const openNewTestModal = (initialValues?: NewTestForm) => {
    setNewTestModalProps(initialValues);
    setNewTestModalOpen(true);
  };

  return (
    <GeneralPage>
      <Stack direction="column" spacing="20px">
        <Box textAlign="center">
          <Button variant="outlined" onClick={() => openNewTestModal()}>
            + New Test
          </Button>
        </Box>

        <Box minHeight="120px">
          <Typography variant="h3">Recent tests</Typography>
          {recentTests.length === 0 && (
            <Typography
              variant="body1"
              color="textSecondary"
              textAlign="center"
            >
              Looks like there's no history yet. Try starting a test and saving
              your results, then checking back later.
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant="h3">Example tests</Typography>
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
                onClick={() => openNewTestModal(TEST_PRESETS.birds)}
              >
                <CardMedia
                  component="img"
                  src={TEST_PRESET_IMAGES.birds}
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
                onClick={() => openNewTestModal(TEST_PRESETS.mammals)}
              >
                <CardMedia
                  component="img"
                  src={TEST_PRESET_IMAGES.mammals}
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
                onClick={() => openNewTestModal(TEST_PRESETS.orchids)}
              >
                <CardMedia
                  component="img"
                  src={TEST_PRESET_IMAGES.orchids}
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
      <NewTestDialog
        key={JSON.stringify(newTestModalProps)}
        open={newTestModalOpen}
        setOpen={setNewTestModalOpen}
        initialValues={newTestModalProps}
      />
    </GeneralPage>
  );
}
