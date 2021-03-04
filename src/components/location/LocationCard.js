import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = (props) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${props.location.id}`}>
              {props.location.name}
            </Link>
        </h3>
        <div className="location__employees">{props.employees.length} Employees</div>
        <div className="location__animals">{props.animals.length} Animals</div>
    </section>
)