import React from 'react'
import Layout from "../components/layout"
import { Link,graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Testimonial from "../components/Testimonial/Testimonial"

import styles from "../stylesheets/cold.module.scss"

const Cold = (props) => {
    return (
        <Layout>

          <div className={styles.headerContainer} >

            <div className={styles.logoContainer}><Link to="/"><Img fluid={props.data.bizampsLogo.childImageSharp.fluid} className={styles.logo} /></Link></div>
              <div className={styles.contentContainer}>
              <div className={styles.heading}>
                <div className={styles.title}>Cold Outreach for Leadgen Guide</div>
                <div className={styles.subtitle}>+ WORKSHOP RECORDING</div>
              </div>

              <div className={styles.bookMobiContainer}><Img fluid={props.data.book.childImageSharp.fluid} className={styles.bookMobi} /></div>

              <div className={styles.content}>
                    <div>
                      <span>1. Real-life Benchmarks</span>
                      <span>Our numbers are real</span>
                    </div>
                    <div>
                      <span>2. Evolution of our mistakes</span>
                      <span>How we got banned, marked, spam, etc</span>
                    </div>
                    <div>
                      <span>3. Currently working scripts</span>
                      <span>Our LinkedIn, Email & Ad creatives</span>
                    </div>
                    <button>SEND ME NOW</button>
              </div>
              </div>
              
              <div className={styles.bookContainer}><Img fluid={props.data.book.childImageSharp.fluid} className={styles.book} /></div>
            
          </div>

          <div>
        <Testimonial conor={props.data.conor.childImageSharp.fluid} gautam={props.data.gautam.childImageSharp.fluid} />
        </div>

        <div className={styles.footer}></div>
            
        </Layout>
    )
}

export default Cold

export const B2BMarketingPackagePageQuery = graphql`
  query {

    bizampsLogo: file(relativePath: { eq: "bizampsLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    book: file(relativePath: { eq: "Book.png" }) {
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

    mehvish: file(relativePath: { eq: "mehvish.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    anvishka: file(relativePath: { eq: "anvishka.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    shweta: file(relativePath: { eq: "shweta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;