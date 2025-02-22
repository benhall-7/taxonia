import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Index } from "./pages/Index";
import { CssBaseline } from "@mui/material";
import Test from "./pages/Test";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Routes />
    </QueryClientProvider>
  );
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Index} />

      <Route path="/test" component={Test} />
    </Switch>
  );
}

export default App;
