import { Alert, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";

export default function LoginModal({ open, setOpen }: LoginModalProps) {
  const { data: loginUrl, error: loginUrlError } = useQuery({
    queryKey: [actions.getAuthLoginUrl],
    queryFn: actions.getAuthLoginUrl.action,
  });

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
          <Button
            href={loginUrl?.url || ""}
            target="_blank"
            disabled={!loginUrl}
          >
            Login with iNaturalist OAuth
          </Button>
          {loginUrlError && (
            <Alert variant="standard" severity="error">
              <Typography variant="body1">{loginUrlError.message}</Typography>
            </Alert>
          )}
        </Stack>
      </Paper>
    </Modal>
  );
}

type LoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
