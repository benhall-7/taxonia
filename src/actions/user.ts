import taxonia from "src/services/taxonia/index.ts";

export function getAuthMe(
  ...args: Parameters<typeof taxonia.auth.authMeList>
) {
  return taxonia.auth.authMeList(...args).then((res) => res.data);
}
