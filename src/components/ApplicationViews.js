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
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

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
                <AnimalSearch />
                <AnimalList />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>

              <Route path="/animals/edit/:animalId(\d+)">
                <AnimalForm />
              </Route>

              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>
            </CustomerProvider>
            </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
            <LocationProvider>
              <Route exact path="/employees">
                <EmployeeList />
              </Route>

              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>

              <Route exact path="/employees/edit/:employeeId(\d+)">
                <EmployeeForm />
              </Route>

              <Route exact path="/employee/detail/:employeeId(\d+)">
                <EmployeeDetail />
              </Route>
            </LocationProvider>
            </EmployeeProvider>

            <AnimalProvider>
            <EmployeeProvider>
            <LocationProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>

              <Route exact path="/locations/create">
                <LocationForm />
              </Route>

              <Route exact path="/locations/edit/:locationId(\d+)">
                <LocationForm />
              </Route>

              <Route exact path="/locations/detail/:locationId(\d+)">
                <LocationDetail />
              </Route>
            </LocationProvider>
            </EmployeeProvider>
            </AnimalProvider>

            <CustomerProvider>
              <Route exact path="/customers">
                <CustomerList />
              </Route>
            </CustomerProvider>            
        </>
    )
}