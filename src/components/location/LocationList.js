import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useHistory } from "react-router-dom"
import {EmployeeContext} from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const LocationList = () => {
  const {locations, getLocations} = useContext(LocationContext)
  const {employees, getEmployees} = useContext(EmployeeContext)
  const {animals, getAnimals} = useContext(AnimalContext)

  const history = useHistory()

  useEffect(() => {
    getEmployees()
    .then(getAnimals)
    .then(getLocations)
  }, [])

  return (
    <div className="locations">
      <h2>Locations</h2>
      <button onClick={() => history.push("locations/create")}>
        Add Locations
      </button>
      {
        locations.map(location => {
          const matchingEmployees = employees.filter(employee => employee.locationId === location.id)
          const matchingAnimals = animals.filter(animal => animal.locationId === location.id)

          return <LocationCard key={location.id} location={location} employees={matchingEmployees} animals={matchingAnimals} />
        })
      }
    </div>
  )
}