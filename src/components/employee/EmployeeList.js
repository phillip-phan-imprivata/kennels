import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = () => {
  const {employees, getEmployees} = useContext(EmployeeContext)
  const {locations, getLocations} = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    getLocations()
    .then(getEmployees)
  }, [])

  return (
  <div className="employees">
      <h2>Employees</h2>
      <button onClick={() => {history.push("employees/create")}}>
        Add Employee
      </button>
    {
    employees.map(employee => {
      const location = locations.find(l => l.id === employee.locationId)
      return <EmployeeCard key={employee.id} employee={employee} location={location}/>
    })
    }
  </div>
  )
}