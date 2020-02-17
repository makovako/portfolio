import React from "react"
import styles from "./container.module.css"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Header from './header'
export default ({ children }) => (
  <div className={styles.container}>
    <Header></Header>
    <Navigation></Navigation>
    {children}
    <Footer></Footer>
  </div>
)
