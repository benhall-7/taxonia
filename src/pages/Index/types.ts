import { CorePlace, CoreTaxon, Project, User } from "src/services/inaturalist/Api";

export type NewTestParams = {
  numQuestions: number;
  taxon?: CoreTaxon;
  place?: CorePlace;
  user?: User;
  native?: boolean;
  threatened?: boolean;
  // TODO: implement this later
  project?: Project;
};
