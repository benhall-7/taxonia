import { Icon, Stack } from "@mui/material";
import kofi from "src/images/kofi_symbol.png";

function KofiIconInner() {
  return (
    <Stack alignItems="center" justifyContent="center" textAlign="center">
      <img
        src={kofi}
        height="24px"
        width="24px"
        style={{ borderRadius: "50%", objectFit: "contain" }}
      />
    </Stack>
  );
}

export default function KofiIcon() {
  return <Icon component={KofiIconInner} />;
}
