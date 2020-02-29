import React from "react"
import styles from "./container.module.css"
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import Header from '../header/header'

// fix for big font awesome icons
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

export default ({ children }) => (
  <div className={styles.container}>
    <Header></Header>
    <Navigation></Navigation>
    {children}
    <Footer></Footer>
  </div>
)
