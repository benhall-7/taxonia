import { z } from "zod";
import { createRoute } from "@tanstack/react-router";
import Test from "src/pages/Test";
import { rootRoute } from "src/routes";

export const testSearchSchema = z.object({
  questionCount: z.number().catch(15),
  taxon: z.number().optional().catch(undefined),
  place: z.number().optional().catch(undefined),
  user: z.number().optional().catch(undefined),
  introduced: z.boolean().optional().catch(undefined),
  threatened: z.boolean().optional().catch(undefined),
  project: z.number().optional().catch(undefined),
});

export type TestSearch = z.infer<typeof testSearchSchema>;

export const testRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/test",
  component: Test,
  validateSearch: testSearchSchema,
});
