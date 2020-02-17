import React from "react"
import styles from "./container.module.css"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Header from './header'

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
