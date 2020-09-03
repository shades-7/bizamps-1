import React from 'react'

import Facebook from '../../assets/Footer/Facebook'
import Instagram from '../../assets/Footer/Instagram'
import Linkedin from '../../assets/Footer/Linkedin'
import Slideshare from '../../assets/Footer/Slideshare'
import Twitter from '../../assets/Footer/Twitter'
import Youtube from '../../assets/Footer/Youtube'

import '../../stylesheets/footer.css'

const Footer = () => {
    return (
        <div className="footerContainer" >
            <div className="iconContainer">
                <span className="icons"><Youtube/></span>
                <span className="icons"><Slideshare /></span>
                <span className="icons"><Linkedin /></span>
                <span className="icons"><Instagram /></span>
                <span className="icons"><Facebook /></span>
                <span className="icons"><Twitter /></span>
            </div>
            <hr/>
            <div className="title">BizAmps is B2B marketing consultancy based out of India. The team is spread across Delhi NCR, Chandigarh & Mumbai</div>
            <div className="subtitle">All Rights Reserved © Copyright 2020  </div>
        </div>
    )
}

export default Footer
