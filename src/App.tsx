import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import routes from "./routes/index";
import { RouterProvider } from "@tanstack/react-router";
import { amber, deepPurple, purple } from "@mui/material/colors";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#7E57C2", // warm purple
      light: "#B085F5",
      dark: "#4D2C91",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C39A6A", // speckle color from main icon
      light: "#D8B98A",
      dark: "#9C7547",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F7F3EA", // warm and neutral background
      paper: "#FCF9F2",
    },
    text: {
      primary: "#3E2F1E", // warm dark brown for high readability
      secondary: "#6F604A",
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
