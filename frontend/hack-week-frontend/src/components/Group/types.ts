export type GroupType = {
  title: string;
  wantedSize: GroupRange;
  currentSize: number;
  complexityRange: GroupRange;
  mechanisms: string[];
}

export type GroupProps = {
  details: GroupType;
}

export type GroupRange = {
  from: number;
  to:  number;
}