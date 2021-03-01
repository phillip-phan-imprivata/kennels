import React from "react"
import "./Animal.css"

export const AnimalCard = (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.animal.name}</h3>
        <div className="animal__breed">{props.animal.breed}</div>
        <div className="location__address">Location: {props.location.name}</div>
        <div className="owner__name">Customer: {props.owner.name}</div>
    </section>
)