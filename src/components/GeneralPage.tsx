import taxonia from "src/images/taxonia2.png";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import actions from "src/actions";

export default function GeneralPage({ children }: Props) {
  const { data, error } = useQuery({
    queryKey: [actions.getAuthMe.key],
    queryFn: ({ signal }) =>
      actions.getAuthMe.action({ signal, credentials: "include" }),
  });

  console.log({ data, error });

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, marginLeft: "8px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Stack direction="row" alignItems="center" gap="8px">
                <img src={taxonia} width="64px" height="64px" />
                <Typography variant="h2" component="div" color="textPrimary">
                  Taxonia
                </Typography>
              </Stack>
            </Link>
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box margin="20px">{children}</Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>;
