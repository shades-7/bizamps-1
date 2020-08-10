import React from 'react'
import styles from '../stylesheets/testimonial.module.scss'
import Img from 'gatsby-image'

const Testimonial = (props) => {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.top}>
                <h3>{props.name}</h3>
            </div>
            <Img fluid={props.pic} className={styles.pic} />
            <div className={styles.body}>{props.body}</div>
            <div className={styles.desig}>{props.desig}</div>
        </div>
    )
}

export default Testimonial
