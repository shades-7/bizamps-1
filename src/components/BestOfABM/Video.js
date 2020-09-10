import React from 'react'
import Img from 'gatsby-image'

import styles from "../../stylesheets/bestOfABM.module.scss"


const Video = (props) => {
    return (
        <div className={styles.videoContainer}>
           <div className={styles.videoTitle}>Video Overview - Part {props.num}</div>
           <a target="_blank" href={props.link} className={styles.video}>
               <Img fluid={props.thumbnail} />
            </a>
        </div>
    )
}

export default Video
