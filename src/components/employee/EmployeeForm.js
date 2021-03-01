import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
  const {locations, getLocations} = useContext(LocationContext)
  const {saveEmployees} = useContext(EmployeeContext)

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0
  })

  const history = useHistory()

  useEffect(() => {
    getLocations()
  }, [])

  const handleControlledInputChange = (event) => {
    const newEmployee = {...employee}

    let selectedVal = event.target.value

    if (event.target.id.includes("Id")){
      selectedVal = parseInt(selectedVal)
    }

    newEmployee[event.target.id] = selectedVal

    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault()

    const name = employee.name
    const locationId = employee.locationId

    if (locationId === 0){
      alert("You must choose a location!")
    } else {
      saveEmployees(employee)
      .then(history.push("/employees"))
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Employee Form</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Name: </label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <select defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange}>
            <option valut="0">Select a location...</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn" onClick={handleClickSaveEmployee}>
          Save Employee
        </button>
      </fieldset> 
    </form>
  )
}