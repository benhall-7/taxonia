import { Icon, Stack } from "@mui/material";
import inaturalist from "src/images/inaturalist.png";

function InatIconInner() {
  return (
    <Stack alignItems="center" justifyContent="center" textAlign="center">
      <img
        src={inaturalist}
        height="24px"
        width="24px"
        style={{ borderRadius: "50%" }}
      />
    </Stack>
  );
}

export default function InatIcon() {
  return <Icon component={InatIconInner} />;
}
