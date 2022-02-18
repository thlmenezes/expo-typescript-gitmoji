import { useQuery } from "react-query";

import { getUserListAsync } from "../services";

export const useUsers = () => {
  const { data, isLoading } = useQuery("users", async () => {
    const { data } = await getUserListAsync();
    return data;
  });

  return { users: data, isLoading };
};
