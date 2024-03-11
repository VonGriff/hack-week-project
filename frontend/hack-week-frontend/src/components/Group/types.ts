export type GroupType = {
  title: string;
  wantedSize: number | { from: number; to: number };
  currentSize: number;
  mechanisms: string[];
}