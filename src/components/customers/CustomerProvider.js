import React, { createContext, useState } from "react"

export const customerContext = createContext()

export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([])

  const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
      .then(res => res.json())
      .then(setCustomers)
  }

  const addCustomers = (customerObj) => {
    return fetch("http://localhost:8088/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerObj)
    })
      .then(getCustomers)
  }

  return (
    <customerContext.Provider value={{
      customers, getCustomers
    }}>
      {props.children}
    </customerContext.Provider>
  )
}