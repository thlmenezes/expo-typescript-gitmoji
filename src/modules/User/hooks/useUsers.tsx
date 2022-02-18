import { useQuery } from "react-query";

import { getUserListAsync, User } from "../services";

export const useUsers = () => {
  const { data, isLoading } = useQuery<User[] | undefined>("users", async () => {
    const { data } = await getUserListAsync();
    return data;
  });

  return { users: data, isLoading };
};
