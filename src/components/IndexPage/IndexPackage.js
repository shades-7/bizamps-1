import React from 'react'
import styles from '../../stylesheets/index.module.scss'


const IndexPackage = (props) => {
    return (
        <div className={styles.packages}>
            <div className={styles.packageImg}>{props.image}</div>
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}

export default IndexPackage
