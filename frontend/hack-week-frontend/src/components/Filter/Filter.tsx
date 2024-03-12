import { useState } from "react";
import { GroupFormEvent } from "./types";

const Filter = () => {
  const [showError, setShowError] = useState(false);

  const isValidRange = (from: number, to: number, lowerLimit: number, upperLimit: number) => {
    return from <= to && from >= lowerLimit && to <= upperLimit;
  }

  const handleSubmit = (event: GroupFormEvent) => {
    // checkboxes
    const { deckbuilding, engineBuilding, workerPlacement } = event.target;
    // range values
    const { complexityFrom, complexityTo, groupSizeFrom, groupSizeTo } = event.target;
    event.preventDefault();
    console.log("Deckbuilding:",deckbuilding.checked);
    console.log("Engine building:", engineBuilding.checked);
    console.log("Worker placement:", workerPlacement.checked);

    if (!(isValidRange(complexityFrom.value, complexityTo.value, 1, 5) && isValidRange(groupSizeFrom.value, groupSizeTo.value, 2, 30))) {
      setShowError(true);
      return;
    }
    setShowError(false);
  }

  return <>
    <form onSubmit={handleSubmit}>
      <div className="filter__mechanism-checkbox-container">
        <input type="checkbox" id="workerPlacement" name="worker-placement" value="WP" />
        <label htmlFor="workerPlacement">Worker Placement</label>
        <input type="checkbox" id="deckbuilding" name="deckbuilding"/>
        <label htmlFor="deckbuilding">Deck Building</label>
        <input type="checkbox" id="engineBuilding" name="engine-building" />
        <label htmlFor="engineBuilding">Engine Building</label>
      </div>
      <div className="filter__group-size">
        <p>Group size (2-30)</p>
        <label htmlFor="groupSizeFrom">From:</label>
        <input type="text" id="groupSizeFrom" name="group-size-from" />
        <label htmlFor="groupSizeTo">To:</label>
        <input type="text" id="groupSizeTo" name="group-size-to"/>
      </div>
      <div className="filter__complexity">
        <p>Complexity (1-5)</p>
        <label htmlFor="complexityFrom">From:</label>
        <input type="text" id="complexityFrom" name="complexity-from" />
        <label htmlFor="complexityTo">To:</label>
        <input type="text" id="complexityTo" name="complexity-to"/>
      </div>
      <button type="submit">Search</button>
    </form>
    {showError && <p>Oh no, a placeholder error occurred!</p>}
  </>
}

export default Filter;