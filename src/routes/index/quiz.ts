import { z } from "zod";
import { createRoute } from "@tanstack/react-router";
import Quiz from "src/pages/Quiz";
import { rootRoute } from "src/routes";

const quizSearchSchema = z.object({
  questionCount: z.number().catch(15),
  taxon: z.number().optional().catch(undefined),
  place: z.number().optional().catch(undefined),
  user: z.number().optional().catch(undefined),
  introduced: z.boolean().optional().catch(undefined),
  threatened: z.boolean().optional().catch(undefined),
  project: z.number().optional().catch(undefined),
  excludeDead: z.boolean().optional().catch(undefined),
});

export const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: Quiz,
  validateSearch: quizSearchSchema,
});
