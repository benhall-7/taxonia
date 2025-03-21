import taxonia from "src/images/taxonia2.png";
import {
  AppBar,
  Box,
  // IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

export default function GeneralPage({ children }: Props) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <img src={taxonia} width="64px" />
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "8px" }}
          >
            Taxonia
          </Typography>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Box margin="20px">{children}</Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>;
