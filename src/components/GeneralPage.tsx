import taxonia from "src/images/taxonia2.png";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { GitHub, Person } from "@mui/icons-material";
import InatIcon from "./GeneralPage/InatIcon";
import useUser from "src/hooks/useUser";
import LoginModal from "./GeneralPage/LoginModal";
import ProfileModal from "./GeneralPage/ProfileModal";

export default function GeneralPage({ children }: Props) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const { data: user, isFetching } = useUser();

  return (
    <Stack direction="column" minHeight="100vh">
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
            onClick={handleClick}
            disabled={isFetching}
          >
            <Person />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleClose}
          >
            {user ? (
              <MenuItem
                disabled={isFetching}
                onClick={() => setProfileModalOpen(true)}
              >
                Profile
              </MenuItem>
            ) : (
              <MenuItem
                disabled={isFetching}
                onClick={() => setLoginModalOpen(true)}
              >
                Login
              </MenuItem>
            )}
          </Menu>
          <LoginModal open={loginModalOpen} setOpen={setLoginModalOpen} />
          <ProfileModal
            open={profileModalOpen}
            setOpen={setProfileModalOpen}
            user={user}
          />
        </Toolbar>
      </AppBar>

      <Box margin="20px" flexGrow="1">
        {children}
      </Box>

      <Paper elevation={8} variant="outlined">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          height="64px"
        >
          <IconButton
            href="https://www.github.com/benhall-7/taxonia/"
            size="small"
            style={{ backgroundColor: "white", border: "1px solid darkgray" }}
          >
            <GitHub />
          </IconButton>

          <IconButton
            href="https://www.inaturalist.org/"
            size="small"
            style={{ backgroundColor: "white", border: "1px solid darkgray" }}
          >
            <InatIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Stack>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = React.PropsWithChildren<{}>;
