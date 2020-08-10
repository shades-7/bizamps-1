import React from 'react'

import TestimonialCard from "../components/TestimonialCard"

import styles from '../stylesheets/testimonial.module.scss'

const Testimonial = (props) => {
    return (
        <div className={styles.container7}>
        <h2>
          Testimonials
        </h2>
        <div className={styles.testimonials}>
          <TestimonialCard pic={props.conor}  name="Conor Rath" 
          body="I got on a call with Akshat not knowing what to expect to get a 3rd opinion on my campaigns I was running (as I do with all my large campaigns).
          He quickly was able to add alot of value with some great actionable advice. His breadth of experience in digital marketing really shined through. He is a truly well versed digital strategist.
          
          As a fellow digital marketer based in Australia I highly recommend Akshat." 
          desig="Strategic Marketer"
           />
           <TestimonialCard pic={props.gautam} name="Gautam Sampathkumr" 
          body="Great work!
          Very entrepreneurial and diligent in his approach.
          Broad knowledge of various pieces of the Digital Ecosystem.
          Would love to work with them again." 
          desig="Crypto Entrepreneur | Advisor: Datalaab & The Kode Network"
           />
        </div>
      </div>

    )
}

export default Testimonial
