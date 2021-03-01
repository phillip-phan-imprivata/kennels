import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/home">
              <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
            <LocationProvider>
            <CustomerProvider>
              <Route exact path="/animals">
                <AnimalList />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>
            </CustomerProvider>
            </LocationProvider>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <EmployeeProvider>
            <LocationProvider>
              <Route exact path="/employees">
                <EmployeeList />
              </Route>

              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>
            </LocationProvider>
            </EmployeeProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <LocationProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>

              <Route exact path="/locations/create">
                <LocationForm />
              </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
              <Route exact path="/customers">
                <CustomerList />
              </Route>
            </CustomerProvider>
        </>
    )
}