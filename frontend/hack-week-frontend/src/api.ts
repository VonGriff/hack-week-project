import { GroupType } from "./components/Group/types";

const baseUrl = 'http://localhost:3000/api/groups';

export const getGroup = async () => {
  const response = await fetch(baseUrl);

  const result: GroupType[] = await response.json();
  console.log(result);
  return result;
}