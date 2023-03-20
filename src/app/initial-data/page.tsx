import ListUsers from "./list-users";
import { User } from "../types";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

export default async function InitialData() {
  const users = await getUsers();

  return <ListUsers users={users} />;
}
