import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { CssBaseline } from "@mui/material";
import routes from "./routes/index";
import { RouterProvider } from "@tanstack/react-router";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
