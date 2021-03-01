import React, { useContext, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory } from "react-router-dom"

export const LocationForm = () => {
  const {saveLocations} = useContext(LocationContext)

  const history = useHistory()

  const [location, setLocation] = useState({
    name: "",
    address: ""
  })

  const handleControlledInputChange = (event) => {
    let newLocation = {...location}

    let setVal = event.target.value

    newLocation[event.target.id] = setVal

    setLocation(newLocation)
  }

  const handleClickSaveLocation = (event) => {
    saveLocations(location)
    .then(history.push("/locations"))
  }

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">Location Form</h2>
      <fieldset className="form-group">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleControlledInputChange} autoFocus required placeholder="Location name..."></input>
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="address">Address: </label>
        <input type="text" id="address" onChange={handleControlledInputChange} required placeholder="Location address..."></input>
      </fieldset>
      <button className="btn" onClick={handleClickSaveLocation}>
        Save Location
      </button>
    </form>
  )
}