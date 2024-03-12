export type GroupType = {
  id: number;
  title: string;
  wantedSize: GroupRange;
  currentSize: number;
  complexityRange: GroupRange;
  mechanisms: Mechanism[];
}

export type GroupProps = {
  details: GroupType;
}

export type GroupRange = {
  from: number;
  to:  number;
}

export type Mechanism = 
  'Deckbuilding' |
  'Engine Building' |
  'Worker Placement';