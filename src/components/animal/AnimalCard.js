import React from "react"
import "./Animal.css"

export const AnimalCard = (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.animal.name}</h3>
        <address className="location__address">{props.animal.location.name}</address>
    </section>
)