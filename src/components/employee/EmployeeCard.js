import React from "react"
import "./Employee.css"

export const EmployeeCard = (props) => (
    <section className="employee">
        <h3 className="employee__name">{props.employee.name}</h3>
        <div className="employee__location">{props.location.name}</div>
    </section>
)