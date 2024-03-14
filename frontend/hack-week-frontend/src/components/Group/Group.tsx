import { useState } from "react";
import { GroupProps, GroupRange } from "./types";


const Group = ({ details }: GroupProps) => {
  const { complexityRange, currentSize, mechanisms, title, wantedSize, } = details;
  const [isClicked, setIsClicked] = useState(false);

  const displayRange = ({from, to}: GroupRange) => to === from ? to : `${from} - ${to}`;

  return <>
    <h2>{title}</h2>
    <ul>
      <li>Looking for a group size of: { displayRange(wantedSize) }</li>
      <li>Current group size: { currentSize }</li>
      <li>Complexity: { displayRange(complexityRange) }</li>
      <li>Mechanisms: { mechanisms && mechanisms.map(m => m).join(', ') }</li>
    </ul>
    {isClicked ? <p>Request sent!</p> :<button onClick={() => setIsClicked(true)}>Request to join</button>}
  </>
}

export default Group;