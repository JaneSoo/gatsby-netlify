import React from "react"
import { Link } from "gatsby"
import Header from "../pages/header"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Header/>
    {children}
  </div>
)
