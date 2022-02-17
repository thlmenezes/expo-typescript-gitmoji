import { api, handlerApiAsync } from "@root/services";

import { userBase } from "../utils";

interface UserAsyncProps {
  id: number;
}

export async function getUserAsync({ id }: UserAsyncProps) {
  const response = await handlerApiAsync({ execute: () => api.get(`${userBase()}/${id}`) });
  return response;
}

export function postUserAsync({ id }: UserAsyncProps) {
  return api.post(`${userBase()}/${id}`);
}
