import React, { useContext, useEffect } from "react"
import {customerContext} from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(customerContext)

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
  )
}