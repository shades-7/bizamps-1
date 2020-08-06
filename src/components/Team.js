import React from 'react'
import Img from 'gatsby-image'

import LeftArrow from "../assets/indexPage/LeftArrow"
import RightArrow from "../assets/indexPage/RightArrow"

import styles from '../stylesheets/team.module.scss'

const Team = (props) => {
    return (
        <div className={styles.teamContainer}>
        <div className={styles.founder}>
          <div className={styles.founderImg}><Img fluid={props.akshat} style={{width:"250px",height:"250px",borderRadius:"50%"}} /></div>
          <div className={styles.name}>Akshat Kharbanda</div>
          <div className={styles.designation}>CEO & B2B Expert</div>
        </div>
        <div className={styles.team}>
          <LeftArrow />
          {/* <Img fluid={props.mehvish}/>
          <Img fluid={props.anvishka} /> */}
          <RightArrow />
        </div>
      </div>
    )
}

export default Team

export const TeamQuery = graphql`
  query {
    mehvish: file(relativePath: { eq: "mehvish.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bizampsLogo: file(relativePath: { eq: "bizampsLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    akshat: file(relativePath: { eq: "akshat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    video: file(relativePath: { eq: "video1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    conor: file(relativePath: { eq: "conor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gautam: file(relativePath: { eq: "gautam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
