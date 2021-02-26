import React, { createContext, useState } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    fetch("http://localhost:8088/employees")
      .then(res => res.json())
      .then(setEmployees)
  }

  const saveEmployees = (employeeObj) => {
    fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
    })
      .then(getEmployees)
  }

  return (
    <EmployeeContext.Provider value={{
      employees, getEmployees, saveEmployees
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}