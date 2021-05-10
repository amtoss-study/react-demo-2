import { partial } from "ramda";

const baseUrl = "http://localhost:3001/";

export const get = (url: string) => {
  return fetch(`${baseUrl}${url}`).then((response) => response.json());
};

export const postPutPatch = (
  method: "POST" | "PUT" | "PATCH",
  url: string,
  requestData: Record<string, any>
) => {
  return fetch(`${baseUrl}${url}`, {
    method,
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const post = partial(postPutPatch, ["POST"]);

export const put = partial(postPutPatch, ["PUT"]);

export const patch = partial(postPutPatch, ["PATCH"]);

export const del = (url: string) => {
  return fetch(`${baseUrl}${url}`, { method: "DELETE" }).then((response) =>
    response.json()
  );
};

const api = { get, post, put, patch, del };

export default api;
