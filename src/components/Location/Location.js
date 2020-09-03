import React from 'react'

import styles from "../../stylesheets/location.module.scss"

const Location = (props) => {
    return (
        <div className={styles.location}>
        {props.first} {">>"} {props.second} {">>"} <span className={styles.end}>{props.third}</span>
      </div>
    )
}

export default Location
