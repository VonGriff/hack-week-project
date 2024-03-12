

export type GroupFormEvent = React.FormEvent<HTMLFormElement> & {
  target: {
      workerPlacement: { checked: boolean };
      deckbuilding: { checked: boolean };
      engineBuilding: { checked: boolean };
      groupSizeFrom: { value: number };
      groupSizeTo: { value: number };
      complexityFrom: { value: number };
      complexityTo: { value: number };
  }
}