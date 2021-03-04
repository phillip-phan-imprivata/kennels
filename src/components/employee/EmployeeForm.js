import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
  const {locations, getLocations} = useContext(LocationContext)
  const {saveEmployees, getEmployeeById, updateEmployee} = useContext(EmployeeContext)

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0
  })

  const [isLoading, setIsLoading] = useState(true);

  const {employeeId} = useParams()
  const history = useHistory()

  useEffect(() => {
    getLocations()
    if (employeeId){
      getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
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

      setIsLoading(true)

      if (employeeId){
        updateEmployee({
          id: employee.id,
          name: employee.name,
          locationId: parseInt(employee.locationId)
        })
        .then(() => history.push(`/employee/detail/${employee.id}`))
      } else {
        saveEmployees(employee)
        .then(history.push("/employees"))
      }
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
          <select value={employee.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange}>
            <option value="0">Select a location...</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn" 
        disbaled={isLoading}
        onClick={event => {
          event.preventDefault()
          handleClickSaveEmployee()
          }}>
          Save Employee
        </button>
      </fieldset> 
    </form>
  )
}