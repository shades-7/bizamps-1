import React from 'react'
import Img from 'gatsby-image'
import { Link,graphql } from "gatsby"

import styles from "../stylesheets/navbar.module.scss"

const Navbar = (props) => {
    {console.log("navbar ",props.logo)}
    return (
        <div className={styles.navContainer}>
          <div><Img fluid={props.logo} className={styles.logo}  /> </div>
          <ul className={styles.nav}>
            <li className={styles.navlist}>Expertise
            <div className={styles.dropdown}>
                <Link>[Guide] Best of ABM</Link>
                <Link>[Guide] LeadGen Cold outreach</Link>
                <Link>[Blog] Value In Sales?</Link>
                <Link>[Blog] When to Outsource LeadGen?</Link>
                <Link>[Blog] Expectations for Outsourcing LeadGen?</Link>
            </div>   
            </li>
            <li className={styles.navlist}>Pricing
            <div className={styles.dropdown}>
                <Link>B2B Marketing Packages</Link>
                <Link>Marketing Strategy Consultancy</Link>
            </div> 
            </li>
            <li className={styles.navlist}>Case Stories
            <div className={styles.dropdown}>
                <Link>Indian Enterprises</Link>
                <Link>International Institutes</Link>
                <Link>Targeting U.S.</Link>
                <Link>Crowd Funding</Link>
            </div> 
            </li>
          </ul>
        </div>
    )
}

export default Navbar
