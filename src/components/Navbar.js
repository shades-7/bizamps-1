import React from 'react'
import Img from 'gatsby-image'
import { Link,graphql } from "gatsby"

import styles from "../stylesheets/navbar.module.scss"

const Navbar = (props) => {
    const toggleNav=()=>{
      const nav=document.getElementById("nav")
      if (nav.className === styles.nav) {
        nav.className=styles.toggleNav
      } else {
        nav.className = styles.nav;
      }
    }
    return (
        <div className={styles.navContainer}>
          <div><Img fluid={props.logo} className={styles.logo}  /> </div>
          <div className={styles.navToggle} onClick={toggleNav}  ><span></span><span></span><span></span></div>
          
          <ul className={styles.nav} id="nav">
            <li className={styles.navlist}>
              <div style={{display:"flex",flexDirection:"row"}}>
              <text className={styles.text}>Expertise</text>
              <div className={styles.arrow} >{"<"}</div>
              </div>
            <div className={styles.dropdown}>
                <Link>[Guide] Best of ABM</Link>
                <Link>[Guide] LeadGen Cold outreach</Link>
                <Link>[Blog] Value In Sales?</Link>
                <Link>[Blog] When to Outsource LeadGen?</Link>
                <Link>[Blog] Expectations for Outsourcing LeadGen?</Link>
            </div>   
            </li>
            <li className={styles.navlist}>
              <div style={{display:"flex",flexDirection:"row"}}>
            <text className={styles.text}>Pricing</text>
              <div className={styles.arrow}>{"<"}</div>
              </div>
            <div className={styles.dropdown}>
                <Link>B2B Marketing Packages</Link>
                <Link>Marketing Strategy Consultancy</Link>
            </div> 
            </li>
            <li className={styles.navlist}>
              <div style={{display:"flex",flexDirection:"row"}}>
            <text className={styles.text}>Case Stories</text>
              <div className={styles.arrow}>{"<"}</div>
              </div>
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
