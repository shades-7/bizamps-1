import React from 'react'
import styles from '../../stylesheets/index.module.scss'


const IndexProcessCard = (props) => {
    return (
        <div className={styles.processCard}>
            <div className={styles.processTitle}>{props.title}</div>
            <div className={styles.processSubtitle}>{props.subtitle}</div>
            <button className={styles.processButton} >Know More</button>
        </div>
    )
}

export default IndexProcessCard
