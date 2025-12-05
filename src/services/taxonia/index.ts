import * as tax from "./Api";

const taxonia = new tax.Api({
  baseUrl: import.meta.env.VITE_API_URL,
  baseApiParams: { credentials: "include" },
});

export default taxonia;
