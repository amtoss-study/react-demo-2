import { partial } from "ramda";

const baseUrl = "http://localhost:3001/";

export const get = async <Data>(url: string): Promise<Data> => {
  const response = await fetch(`${baseUrl}${url}`);
  return response.json();
};

export const postPutPatch = async (
  method: "POST" | "PUT" | "PATCH",
  url: string,
  requestData: Record<string, any>
) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method,
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

type PostPutPatch = {
  <Data>(url: string, requestData: Record<string, any>): Promise<Data>;
};

export const post: PostPutPatch = partial(postPutPatch, ["POST"]);

export const put: PostPutPatch = partial(postPutPatch, ["PUT"]);

export const patch: PostPutPatch = partial(postPutPatch, ["PATCH"]);

export const del = async <Data>(url: string): Promise<Data> => {
  const response = await fetch(`${baseUrl}${url}`, { method: "DELETE" });
  return response.json();
};

const api = { get, post, put, patch, del };

export default api;
