import React from 'react'

import styles from '../stylesheets/index.module.scss'

const IndexHeaderCard=(props)=> {
    return (
       <>
            <div className={styles.innerContent}>
                <div>{props.icon}</div>
                <div className={styles.contentCard}>
                    <span className={styles.contentTitle}>{props.title} </span>
                    <span className={styles.contentSubtitle}> {props.subtitle}</span>
                </div>
                
            </div>
       </>
    )
}

export default IndexHeaderCard

