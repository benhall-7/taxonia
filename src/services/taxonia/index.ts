import * as tax from "./Api";

const taxonia = new tax.Api({
  baseUrl: API_URL,
  baseApiParams: { credentials: "include" },
});

export default taxonia;
