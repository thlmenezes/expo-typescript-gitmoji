import { api, handlerApiAsync } from "@root/services";

import { homeBase } from "../utils";

interface HomeAsyncProps {
  id: number;
}

export async function getHomeAsync({ id }: HomeAsyncProps) {
  const response = await handlerApiAsync({ execute: () => api.get(`${homeBase()}/${id}`) });
  return response;
}

export function postHomeAsync({ id }: HomeAsyncProps) {
  return api.post(`${homeBase()}/${id}`);
}
