import { GroupType } from "./types";

export const mockedGroupData: GroupType = {
  id: 1,
  title: 'Looking for members',
  wantedSize: { from: 4, to: 4 },
  currentSize: 2,
  complexityRange: { from: 2.3, to: 3.14 },
  mechanisms: ['Worker Placement', 'Deckbuilding']
}

export const mockedGroupList: GroupType[] = [
  {
    id: 1,
    title: 'Looking for members',
    wantedSize: { from: 4, to: 4 },
    currentSize: 2,
    complexityRange: { from: 2.3, to: 3.14 },
    mechanisms: ['Worker Placement', 'Deckbuilding']
  }, {
    id: 2,
    title: 'Group trying to learn complex games',
    wantedSize: { from: 3, to: 5 },
    currentSize: 3,
    complexityRange: { from: 3.6, to: 4.5 },
    mechanisms: ['Worker Placement', 'Engine Building']
  }
]