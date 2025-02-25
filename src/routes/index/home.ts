import { createRoute } from "@tanstack/react-router";

import Index from "src/pages/Index";
import { rootRoute } from "..";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});
