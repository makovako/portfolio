import React from 'react'
import styles from './footer.module.css'
import {Link} from 'gatsby'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHotel, faInfoCircle, faCopyright, faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => (
    <footer>
    <ul>
        <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle}/> About</Link></li>
        <li><a href="https://makovako.xyz"><FontAwesomeIcon icon={faHotel}/> Landing page</a></li>
        <li><a href="https://github.com/makovako"><FontAwesomeIcon icon={faGithub}/> Github</a></li>
        <li><FontAwesomeIcon icon={faCopyright}/>  Marek Valko</li>
        <li><FontAwesomeIcon icon={faHammer}/> Build using <a className={styles.gatsby} href="https://www.gatsbyjs.org/">Gatsby</a></li>
    </ul>
</footer>
)