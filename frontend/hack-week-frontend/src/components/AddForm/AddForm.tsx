import { checkboxOptions } from "../Filter/Filter"
import { ChangeEvent, useState } from "react"
import { AddFormType, AddGroupType } from "./types"
import '../Filter/Filter.css'

const AddForm = ({addGroup}: {addGroup: (group: AddGroupType) => void}) => {
  const [mechanismOptions, setMechanismOptions] = useState(checkboxOptions)
  const [showError, setShowError] = useState(false);

  const isValidRange = (from: number, to: number, lowerLimit: number, upperLimit: number) => {
    return from <= to && from >= lowerLimit && to <= upperLimit;
  }

  const handleSubmit = (event: AddFormType) => {
    const { title, complexityFrom, complexityTo, groupSizeFrom, groupSizeTo } = event.target;
    event.preventDefault();
    
    if (!(isValidRange(complexityFrom.value, complexityTo.value, 1, 5) && isValidRange(groupSizeFrom.value, groupSizeTo.value, 2, 30))) {
      setShowError(true);
      return;
    }
    setShowError(false);
    
    const mechanisms = mechanismOptions.filter(m => m.checked).map(m => m.value).join(', ');
    const sizeRange = { from: groupSizeFrom.value, to: groupSizeTo.value };
    const complexityRange = { from: complexityFrom.value, to: complexityTo.value };
    
    const filtered: AddGroupType = {title: title.value, mechanisms, groupSize: sizeRange, complexity: complexityRange }
    console.log(filtered);
    addGroup(filtered);
    event.currentTarget.reset();
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

  return <div data-theme="luxury" className="rounded-xl p-2">
    <h2>Add new group</h2>
    <form className="flex items-center"onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title"/>
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
      <button type="submit">Add Group</button>
    </form>
    {showError && <p>Oops</p>}
  </div>
}

export default AddForm;