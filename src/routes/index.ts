import { createRootRoute, createRouter } from "@tanstack/react-router";
import { homeRoute } from "./index/home";
import { quizRoute } from "./index/quiz";

export const rootRoute = createRootRoute();

const routeTree = rootRoute.addChildren([homeRoute, quizRoute]);
const router = createRouter({ routeTree });

export default router;

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
