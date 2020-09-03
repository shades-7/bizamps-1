import React from 'react'
import Layout from "../components/layout"
import { Link,graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Location from "../components/Location/Location"
import Team from "../components/Team/Team"
import Testimonial from "../components/Testimonial/Testimonial"
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/footer'

import Workflow from "../assets/MarketingStrategy/Workflow"
import Play from "../assets/MarketingStrategy/Play"
import Graph from "../assets/MarketingStrategy/Graph"
import HeaderImg from "../assets/MarketingStrategy/HeaderImg"
import HeaderBg from "../assets/MarketingStrategy/HeaderBG"
import WorkflowMobi from "../assets/MarketingStrategy/WorkflowMobi"

import styles from "../stylesheets/marketingStrategy.module.scss"

const CustomDigitalSalesMarketingPlan = (props) => {

    const samples1=[
        {
            key:"1",
            point:"Groundwork Session"
        },
        {
            key:"2",
            point:"Market & Competitor Research"
        },
        {
            key:"3",
            point:"Target Audience Research"
        },
        {
            key:"4",
            point:"Promotion & Positioning Strategy"
        },
        {
            key:"5",
            point:"Lead Generation Strategy (Outbound & Inbound)"
        },
    ]
    const samples2=[
        {
            key:"6",
            point:"Lead Nurturing Strategy"
        },
        {
            key:"7",
            point:"Top of Mind Awareness Strategy"
        },
        {
            key:"8",
            point:"Integrating & utilizing old marketing assets"
        },
        {
            key:"9",
            point:"Presentation & Consultation Session"
        },
        {
            key:"10",
            point:"Project Plan"
        },
    ]

    return (
        <Layout>

          <div className={styles.headerContainer} style={{backgroundColor:"#294f8c"}}>
              <div className={styles.headerMap}><HeaderBg /></div>
              <div className={styles.headerBox}>
               <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
               <div className={styles.header}>
              <div className={styles.headerContent}>
                <div className={styles.headerTitle}>B2B Marketing Plan & Strategy</div>
                <div className={styles.headerSubtitle}>Because your company's problems require a unique solution</div>
                <div className={styles.headerMobiImg}>
                <HeaderImg />
              </div>
                <a target="_blank" href="https://www.instamojo.com/akshatkharbanda/custom-digital-marketing-plan-by-bizamps/"><button className={styles.headerButton}>BUILD ME A MARKETING PLAN</button></a>
                <div className={styles.headerCaption}>Secure Payment via Instamojo</div>
              </div>
              <div className={styles.headerImg}>
                <HeaderImg />
              </div>
              </div>
    
              </div>
             
          </div>

        <div className={styles.strips}>
            <div className={styles.strip1}></div>
            <div className={styles.strip2}></div>
        </div>

        <div className={styles.clarityContainer}>
            <Img fluid={props.data.clarity.childImageSharp.fluid} className={styles.clarityImg} />
           <a target="_blank" href="https://www.youtube.com/watch?v=7PbhTv0-0BU&feature=youtu.be"> <span className={styles.clarityPlay}><Play /></span></a>
        </div>

        <div className={styles.graphContainer}>
            <div className={styles.graph}><Graph /></div>
            <div className={styles.graphContent}>
                <span className={styles.graphTitle}>Marketing Plan</span>
                <span className={styles.graphSubtitle}>Point 10 Sample</span>
            </div>
        </div>

        <div className={styles.samplesContainer}>
            <div className={styles.sampleContainer}>
                {
                    samples1.map((sample)=>{
                        return (
                            <div key={sample.key} className={styles.pointContainer}>
                                <div className={styles.pointKey}>{sample.key}</div>
                                <div className={styles.pointPoint}>{sample.point}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.sampleContainer}>
                {
                    samples2.map((sample)=>{
                        return (
                            <div key={sample.key} className={styles.pointContainer}>
                                <div className={styles.pointKey}>{sample.key}</div>
                                <div className={styles.pointPoint}>{sample.point}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className={styles.workflowContainer}>
            <div className={styles.workflow}><Workflow /> </div>
            <div className={styles.workflowMobi}><WorkflowMobi /></div>
        </div>

        <div>
        <Testimonial conor={props.data.conor.childImageSharp.fluid} gautam={props.data.gautam.childImageSharp.fluid} />
        </div>

        <Team akshat={props.data.akshat.childImageSharp.fluid} 
        mehvish={props.data.mehvish.childImageSharp.fluid} 
        anvishka={props.data.anvishka.childImageSharp.fluid} 
        shweta={props.data.shweta.childImageSharp.fluid}
        />

        <Location first="Home" second="Pricing" third="Marketing Strategy Consultancy" />

        <Footer />

        </Layout>
    )
}

export default CustomDigitalSalesMarketingPlan

export const B2BMarketingPackagePageQuery = graphql`
  query {
    map: file(relativePath: { eq: "Map.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bg4: file(relativePath: { eq: "bg4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    clarity: file(relativePath: { eq: "clarity.jpg" }) {
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