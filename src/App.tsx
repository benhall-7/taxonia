import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import routes from "./routes/index";
import { RouterProvider } from "@tanstack/react-router";
import { amber, deepPurple } from "@mui/material/colors";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
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
