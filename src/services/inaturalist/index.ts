import * as inat from "./Api";

const inaturalist = new inat.Api({
  baseUrl: "https://api.inaturalist.org/v1",
});

export default inaturalist;
