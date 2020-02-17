import React from "react"
import styles from "./navigation.module.css"
import { Link } from "gatsby"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  <nav>
    <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
  </nav>
)
