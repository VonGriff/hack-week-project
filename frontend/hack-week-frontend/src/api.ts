import { AddGroupType } from "./components/AddForm/types";
import { FilterType } from "./components/Filter/types";
import { GroupType } from "./components/Group/types";

const baseUrl = 'http://localhost:3000/api';
const groupUrl = baseUrl + '/groups';
const profileUrl = baseUrl + '/profile';

export const getAllGroups = async () => {
  const response = await fetch(groupUrl);

  const result: GroupType[] = await response.json();
  console.log(result);
  return result;
}

export const getFiltered = async (filter: FilterType) => {
  console.log("filter to be posted:", filter);
  try {
    const response = await fetch(`${groupUrl}/filter`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(filter)
    })
    const data: GroupType[] = await response.json();
    console.log("filtered data:", data);
    return data;
  } catch (e: unknown) {
    console.log(e);
    return;
  }
}

export const postGroup = async (group: AddGroupType) => {
  try {
    await fetch(groupUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(group)
    })

  } catch(e: unknown) {
    console.log(e);
  }
}

export const addGroupToUser = async (id: number) => {
  const response = await fetch(`${profileUrl}/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
}