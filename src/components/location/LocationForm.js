import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory, useParams } from "react-router-dom"

export const LocationForm = () => {
  const {saveLocations, getLocationById, updateLocation} = useContext(LocationContext)

  const {locationId} = useParams()
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(true)

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

  console.log(locationId)
  const handleClickSaveLocation = (event) => {
    setIsLoading(true)
    if (locationId){
      updateLocation({
        id: location.id,
        name: location.name,
        address: location.address
      })
      .then(() => history.push(`/locations/detail/${location.id}`))
    } else {
      saveLocations(location)
      .then(() => history.push("/locations"))
    }
  }
  
  useEffect(() => {
    if (locationId){
      getLocationById(locationId)
      .then(res => {
        setLocation(res)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [])

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">Location Form</h2>
      <fieldset className="form-group">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleControlledInputChange} value={location.name} autoFocus required placeholder="Location name..." />
      </fieldset>
      <fieldset className="form-group">
        <label htmlFor="address">Address: </label>
        <input type="text" id="address" onChange={handleControlledInputChange} value={location.address} required placeholder="Location address..." />
      </fieldset>
      <button className="btn" 
        disabled={isLoading}
        onClick={event => {
          event.preventDefault()
          handleClickSaveLocation()
        }}>
        Save Location
      </button>
    </form>
  )
}