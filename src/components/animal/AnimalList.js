import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
  }, [])


  return (
    <div className="animals">
      <h2>Animals</h2>
      <button onClick={() => {history.push("/animals/create")}}>
        Add Animal
      </button>
      {
        animals.map(animal => {
          const owner = customers.find(customer => customer.id === animal.customerId)
          const location = locations.find(location => location.id === animal.locationId)

          return <AnimalCard key={animal.id} animal={animal} location={location} owner={owner} />
        })
      }
    </div>
  )
}