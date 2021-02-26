import React, { createContext, useState } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    fetch("http://localhost:8088/locations")
      .then(res => res.json())
      .then(setLocations)
  }

  const saveLocations = (locationObj) => {
    fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(locationObj)
    })
      .then(getLocations)
  }

  return (
    <LocationContext.Provider value={{
      locations, getLocations, saveLocations
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}