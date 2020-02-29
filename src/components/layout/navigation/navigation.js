import React from "react"
// eslint-disable-next-line no-unused-vars
import styles from "./navigation.module.css"
import { Link } from "gatsby"
import { faHome, faDesktop, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
  <nav>
    <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
    <Link to="/demo"><FontAwesomeIcon icon={faDesktop}/> Demos</Link>
    <Link to="/language"><FontAwesomeIcon icon={faGlobeEurope}/> Languages</Link>
  </nav>
)
