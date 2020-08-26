import React from 'react'

import CloseButton from "../assets/B2BMarketingPackages/CloseButton"
import PlusButton from "../assets/B2BMarketingPackages/PlusButton"

import styles from "../stylesheets/b2bMarketingPackage.module.scss"


const B2BMarketingCard = (props) => {

    const displayWorkflow=()=>{
        let workflow=document.getElementById(props.key)
        workflow.style.display="block";
    }
    const hideWorkflow=()=>{
        let workflow=document.getElementById(props.key)
        workflow.style.display="none";
    }
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardImgContainer}>
                <div className={styles.cardImgHeading}>{props.heading}</div>
                    <props.img /> 
                    {
                        props.workflow!==""?
                        <div className={styles.seeWorkflow}  onClick={displayWorkflow}><span>See Workflow </span><PlusButton /></div>
                        : ""
                    }
                </div>
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
            {
                    props.workflow!==""?<span className={styles.workflow} id={props.key}>
                    <div><props.workflow /></div>
                    <div className={styles.closeButton} onClick={hideWorkflow}><CloseButton /></div>
                </span>:""
                }
        </>
    )
}

export default B2BMarketingCard
