import { ChangeEvent, useState } from "react";
import { CheckboxOption, FilterProps, FilterType, GroupFormEvent } from "./types";
import './Filter.css'

export const checkboxOptions: CheckboxOption[] = [
  {
    key: 1,
    id: "deckbuilding",
    value: 'Deckbuilding',
    checked: false,
  }, {
    key: 2,
    id: "engineBuilding",
    value: "Engine Building",
    checked: false,
  }, {
    key: 3,
    id: "workerPlacement",
    value: "Worker Placement",
    checked: false,
  }
]

const Filter = ({ setFilter }: FilterProps) => {
  const [showError, setShowError] = useState(false);
  const [mechanismOptions, setMechanismOptions] = useState(checkboxOptions);

  const isValidRange = (from: number, to: number, lowerLimit: number, upperLimit: number) => {
    return from <= to && from >= lowerLimit && to <= upperLimit;
  }

  const handleCheckboxChange = (event: ChangeEvent) => {
    const { id } = event.target;
    const newOptions = mechanismOptions.map(m => {
      if (m.id === id) {
        m.checked = !m.checked;
      }
        return m;
    });
    setMechanismOptions(newOptions)
  }

  const handleSubmit = (event: GroupFormEvent) => {
    const { complexityFrom, complexityTo, groupSizeFrom, groupSizeTo } = event.target;
    event.preventDefault();
    console.log
    if (!(isValidRange(complexityFrom.value, complexityTo.value, 1, 5) && isValidRange(groupSizeFrom.value, groupSizeTo.value, 2, 30))) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const mechanisms = mechanismOptions.filter(m => m.checked).map(m => m.value).join(', ');
    const sizeRange = { from: groupSizeFrom.value, to: groupSizeTo.value };
    const complexityRange = { from: complexityFrom.value, to: complexityTo.value };

    const filtered: FilterType = {mechanisms, groupSize: sizeRange, complexity: complexityRange }
    setFilter(filtered);
  }

  return <>
  <h2>Filter</h2>
    <form className="flex items-center" onSubmit={handleSubmit}>
      <div className="filter__mechanism-checkbox-container">
        {mechanismOptions.map(opt => (
          <span key={opt.key}>
            <input className="filter__checkbox" type="checkbox" onChange={handleCheckboxChange} id={opt.id} name={opt.id} value={opt.value} />
            <label htmlFor={opt.id}>{opt.value}</label>
          </span>
        ))}
      </div>
      <div className="filter__group-size">
        <p>Group size (2-30)</p>
          <label htmlFor="groupSizeFrom">From:</label>
          <input className="filter__text" type="text" id="groupSizeFrom" name="group-size-from" />
          <label htmlFor="groupSizeTo">To:</label>
          <input className="filter__text" type="text" id="groupSizeTo" name="group-size-to"/>
      </div>
      <div className="filter__complexity">
        <p>Complexity (1-5)</p>
        <label htmlFor="complexityFrom">From:</label>
        <input className="filter__text" type="text" id="complexityFrom" name="complexity-from" />
        <label htmlFor="complexityTo">To:</label>
        <input className="filter__text" type="text" id="complexityTo" name="complexity-to"/>
      </div>
      <button type="submit">Find Groups</button>
    </form>
    {showError && <p>Oh no, a placeholder error occurred!</p>}
  </>
}

export default Filter;