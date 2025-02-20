import { Route, Switch } from "wouter";

import "./App.css";
import { Index } from "./Index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  );
}

export default App;
