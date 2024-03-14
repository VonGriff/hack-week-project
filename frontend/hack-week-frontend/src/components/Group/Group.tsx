import { useState } from "react";
import { GroupProps, GroupRange } from "./types";


const Group = ({ details }: GroupProps) => {
  const { complexityRange, currentSize, mechanisms, title, wantedSize, } = details;
  const [isClicked, setIsClicked] = useState(false);

  const displayRange = ({from, to}: GroupRange) => to === from ? to : `${from} - ${to}`;

  return <>
    <h2>{title}</h2>
    <ul>
      <li><p>Looking for a group size of: <strong>{ displayRange(wantedSize) }</strong></p></li>
      <li><p>Current group size: <strong>{ currentSize }</strong></p></li>
      <li><p>Complexity: <strong>{ displayRange(complexityRange) }</strong></p></li>
      <li><p>Mechanisms: <strong>{ mechanisms && mechanisms.map(m => m).join(', ') }</strong></p></li>
    </ul>
    {isClicked ? <button>Sent!</button> :<button onClick={() => setIsClicked(true)}>Request to join</button>}
  </>
}

export default Group;