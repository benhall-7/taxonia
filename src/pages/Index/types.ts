import {
  AutocompleteTaxon,
  CorePlace,
  Project,
  User,
} from "src/services/inaturalist/Api";

export type NewTestForm = {
  questionCount: number;
  taxon?: AutocompleteTaxon;
  place?: CorePlace;
  user?: User;
  // kind of code-smell-ish, but this is a limitation imposed by the
  // component; it expects strings everywhere
  introduced: "true" | "false" | "undefined";
  threatened: "true" | "false" | "undefined";
  // TODO: implement this later
  project?: Project;
};

export function newTestValidate(form: NewTestForm) {
  // const numQuestionsValid =
  //   form.numQuestions >= 1 &&
  //   form.numQuestions <= 100;

  // const hasErrors = !numQuestionsValid;

  // if (hasErrors)
  //   return {
  //     state: "error" as const,
  //     data: {
  //       numQuestions: numQuestionsValid
  //         ? undefined
  //         : "Should be between 1 and 100",
  //       taxon: undefined,
  //       place: undefined,
  //       user: undefined,
  //       native: undefined,
  //       threatened: undefined,
  //       project: undefined,
  //     },
  //   };

  // there's no way for this validation to fail, but I'd like to keep this style of
  // validation around for use later, so I'm leaving it for now
  return {
    // state: "ok" as const,
    // data: {
    questionCount: form.questionCount,
    taxon: form.taxon?.id,
    place: form.place?.id,
    // TODO: shouldn't this be user name?
    user: form.user?.id,
    introduced:
      form.introduced === "undefined" ? undefined : form.introduced === "true",
    threatened:
      form.threatened === "undefined" ? undefined : form.threatened === "true",
    project: form.project?.id,
    // },
  };
}
