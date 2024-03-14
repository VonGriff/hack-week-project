import { GroupRange } from "../Group/types";

export type FilterProps = {
  setFilter: () => void;
}

export type GroupFormEvent = React.FormEvent<HTMLFormElement> & {
  target: {
      workerPlacement: { checked: boolean, value: string };
      deckbuilding: { checked: boolean };
      engineBuilding: { checked: boolean };
      groupSizeFrom: { value: number };
      groupSizeTo: { value: number };
      complexityFrom: { value: number };
      complexityTo: { value: number };
  }
}

export type CheckboxOption = {
  id: string;
  key: number;
  value: string;
  checked: boolean;
}

export type FilterType = {
  mechanisms: string;
  groupSize: GroupRange;
  complexity: GroupRange;
}