import {User} from "./user";

export type UseProducts = {
    user: User | null;
    loading: boolean;
    error: string | null;
  };

