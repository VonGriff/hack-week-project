import { GroupFormEvent } from "../Filter/types";
import { GroupRange } from "../Group/types";

export type AddGroupType = {
  title: string;
  mechanisms: string;
  groupSize: GroupRange;
  complexity: GroupRange;
}

export type AddFormType = GroupFormEvent & {
  target: {
    title: { 
      value: string
    }
  };
}