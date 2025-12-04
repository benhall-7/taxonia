import { Modal, Paper, Stack, Typography } from "@mui/material";
import { MeResponse } from "src/services/taxonia/Api";

export default function ProfileModal({ open, setOpen, user }: LoginModalProps) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="40px"
        >
          <Typography variant="h5">username: {user?.display_name}</Typography>
          <Typography variant="h6">id: {user?.id}</Typography>
        </Stack>
      </Paper>
    </Modal>
  );
}

type LoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  user?: MeResponse;
};
