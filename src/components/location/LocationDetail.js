import React, { useContext, useState, useEffect } from "react"
import "./Location.css"
import { LocationContext } from "./LocationProvider"
import { useParams, useHistory } from "react-router-dom"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const LocationDetail = () => {
  const {getLocationById} = useContext(LocationContext)
  const {employees, getEmployees} = useContext(EmployeeContext)
  const {animals, getAnimals} = useContext(AnimalContext)

  const [location, setLocation] = useState({})

  const {locationId} = useParams();
  const history = useHistory()

  useEffect(() => {
    getLocationById(locationId)
    .then(res => {
      setLocation(res)
    })
    getEmployees()
    .then(getAnimals)
  }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <div className="location__employees">
        <h4>Employees</h4>
        {
          employees.filter(employee => employee.locationId === location.id)
            .map(employee => employee.name).join(", ")
        }
      </div>
      <div className="location__animals">
        <h4>Current Residents</h4>
        {
          animals.filter(animal => animal.locationId === location.id)
          .map(animal => animal.name).join(", ")
        }
      </div>
      <button onClick={() => {
        history.push(`/locations/edit/${location.id}`)
      }}>Edit</button>
    </section>
  )
}