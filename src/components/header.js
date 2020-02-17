import React from "react"
import styles from "./header.module.css"
import {Link} from 'gatsby'

export default ({ children }) => (
  <header>
    <h1><Link to="/">My projects</Link></h1>
  </header>
)
