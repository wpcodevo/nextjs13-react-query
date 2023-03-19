import ListUsers from "./list-users";
import { User } from "../types";

export default async function InitialData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];

  return <ListUsers users={users} />;
}
