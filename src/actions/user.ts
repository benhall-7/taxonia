import taxonia from "src/services/taxonia/index.ts";

export function getAuthMe(...args: Parameters<typeof taxonia.auth.getAuth>) {
  return taxonia.auth.getAuth(...args).then((res) => res.data);
}

export function getAuthLoginUrl(
  ...args: Parameters<typeof taxonia.auth.loginUrlList>
) {
  return taxonia.auth.loginUrlList(...args).then((res) => res.data);
}
