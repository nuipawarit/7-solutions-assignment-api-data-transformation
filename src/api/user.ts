import axios from "axios";
import { User } from "../@types";

export const getUsers = async () =>
  (
    await axios.get<{
      users: User[];
      total: number;
      skip: number;
      limit: number;
    }>("https://dummyjson.com/users")
  ).data;
