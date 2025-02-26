import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function ConfirmExitDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>Confirm exit?</DialogTitle>
      <DialogContent>Your progress won't be recorded</DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>Cancel</Button>
        <Button onClick={() => onClose(true)}>Exit</Button>
      </DialogActions>
    </Dialog>
  );
}

type Props = {
  open: boolean;
  onClose: (exit: boolean) => void;
};
