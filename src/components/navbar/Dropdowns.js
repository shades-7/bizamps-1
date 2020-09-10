import React,{useState} from 'react'
import { Link,graphql } from "gatsby"

import NavBottomArrow from "../../assets/Navbar/NavBottomArrow"

import styles from "../../stylesheets/nav.module.scss"

const Dropdowns = (props) => {
   
    return (
        <li className={styles.options}>

            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <text className={styles.text} >{props.option.name}</text>
                <div className={styles.arrow} ><NavBottomArrow /></div>  
            </div> 

            <div className={styles.dropdown}>
                {
                    props.option.subOptions.map((item,index)=>{
                        return (
                            <Link to={item.link} key={index}>{item.name}</Link>
                        )
                    })
                }
            </div> 

        </li>
    )
}


export default Dropdowns
