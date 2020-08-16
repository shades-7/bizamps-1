import React from 'react'

// import styles from "../stylesheets/b2bMarketingCard.module.scss"
import styles from "../stylesheets/b2bMarketingPackage.module.scss"


const B2BMarketingCard = (props) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div><props.img /> </div>
                <div className={styles.contentCard}>
                   <div className={styles.cardHeading} >
                       <div>{props.heading} </div>
                   </div>
                   <div className={styles.divContainer}>
                       <span className={styles.cardSubheading}>Who is it for: </span>
                       <span className={styles.cardText}>{props.who} </span>
                   </div>
                   <div className={styles.divContainer}>
                       <div className={styles.cardSubheading}>Concept:</div>
                       <div className={styles.cardText}>{props.concept1} </div>
                       <div className={styles.cardText}>{props.concept2} </div>
                   </div>
                   <div className={styles.divContainer}>
                       <span className={styles.cardSubheading}>Why it works: </span>
                       <span className={styles.cardText}>{props.whyWorks} </span>
                   </div>
                   <div className={styles.divContainer}>
                       <span className={styles.cardSubheading}>Timeline: </span>
                       <span className={styles.cardText}>{props.timeline} </span>
                   </div>
                   <div className={styles.divContainer}>
                       <span className={styles.cardSubheading}>Monthly Price: </span>
                       <span className={styles.cardText}>{props.monthlyPrice} </span>
                   </div>
                   <div className={styles.divContainer}>
                       <span className={styles.cardSubheading}>Why BizAmps: </span>
                       <span className={styles.cardText}>{props.whyBiz} </span>
                   </div>
                   <div className={styles.divContainer}>
                       <span className={styles.cardSubheading}>Channels: </span>
                       <span className={styles.cardText}>{props.channels} </span>
                   </div>
                </div>
            </div>
        </>
    )
}

export default B2BMarketingCard
