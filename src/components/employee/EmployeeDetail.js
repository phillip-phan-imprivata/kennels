import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeDetail = () => {
  const {getEmployeeById} = useContext(EmployeeContext)

  const [employee, setEmployee] = useState({})

  const {employeeId} = useParams()
  const history = useHistory()

  useEffect(() => {
    getEmployeeById(employeeId)
    .then((res) => {
      setEmployee(res)
    })
  }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">{employee.location?.name}</div>
      <button onClick={() => {
          history.push(`/employees/edit/${employee.id}`)
      }}>Edit</button>
    </section>
  )
}