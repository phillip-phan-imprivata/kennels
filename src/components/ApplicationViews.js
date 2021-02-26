import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/home">
              <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
              <Route exact path="/animals">
                <AnimalList />
              </Route>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <EmployeeProvider>
              <Route path="/employees">
                <EmployeeList />
              </Route>
            </EmployeeProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <LocationProvider>
              <Route path="/location">
                <LocationList />
              </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
              <Route path="/customers">
                <CustomerList />
              </Route>
            </CustomerProvider>
        </>
    )
}