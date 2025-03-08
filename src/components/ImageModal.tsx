import { Fade, Modal } from "@mui/material";

export default function ImageModal({ open, onClose, src }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open} style={{ outline: "none" }}>
        <img
          src={src}
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
          }}
        />
      </Fade>
    </Modal>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  src?: string;
};
