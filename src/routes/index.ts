import { createRootRoute, createRouter } from "@tanstack/react-router";
import { homeRoute } from "./index/home";
import { testRoute } from "./index/test";

export const rootRoute = createRootRoute();

const routeTree = rootRoute.addChildren([homeRoute, testRoute]);
const router = createRouter({ routeTree });

export default router;

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
