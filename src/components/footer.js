import React from 'react'
import styles from './footer.module.css'
import {Link} from 'gatsby'

export default (props) => (
    <footer>
    <ul>
        <li><Link to="/about">About</Link></li>
        <li><a href="https://makovako.xyz">Landing page</a></li>
        <li><a href="https://github.com/makovako">Github</a></li>
        <li>&copy; Marek Valko</li>
        <li>Build using <a href="https://www.gatsbyjs.org/">Gatsby</a></li>
    </ul>
</footer>
)