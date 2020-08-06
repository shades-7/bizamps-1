import React from 'react'
import styles from '../stylesheets/index.module.scss'


const IndexProcessCard = (props) => {
    return (
        <div className={styles.processCard}>
            <div className={styles.processTitle}>{props.title}</div>
            <div className={styles.processSubtitle}>{props.subtitle}</div>
            <button style={{backgroundColor:"white",padding:"0.5rem 1.3rem",marginTop:"1rem",borderRadius:"10px"}}>Know More</button>
        </div>
    )
}

export default IndexProcessCard
