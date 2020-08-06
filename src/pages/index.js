import React from "react"
import { Link,graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import IndexHeaderCard from "../components/IndexHeaderCard"
import IndexProcessCard from '../components/IndexProcessCard'
import IndexPackage from "../components/IndexPackage"
import Testimonial from "../components/Testimonial"
import Navbar from "../components/Navbar"
import Team from "../components/Team"

import HelpB2BClients from "../assets/indexPage/HelpB2Bclients"
import EasilyIcon from "../assets/indexPage/EasilyIcon"
import QualitativeIcon from "../assets/indexPage/QualitativeIcon"
import SystematicIcon from "../assets/indexPage/SystematicIcon"
import Target from "../assets/indexPage/Target"
import Landing from "../assets/indexPage/Landing"
import Retarding from "../assets/indexPage/Retarding"
import Email from "../assets/indexPage/Email"
import Lead from "../assets/indexPage/Lead"
import TeamIcon from "../assets/indexPage/Team"
import Consultation from "../assets/indexPage/Consultation"

import styles from '../stylesheets/index.module.scss'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
   
      <BackgroundImage fluid={props.data.bgOverlay.childImageSharp.fluid} className={styles.container} backgroundColor={"#2F80ED"}>
        <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
        <div className={styles.headerContent}>
          <div className={styles.content}>
           <h1 className={styles.contentHeading}>We help our B2B clients to</h1>
           < IndexHeaderCard title="Get into Dream Accounts" subtitle="Easily" icon={<EasilyIcon />} />
           <IndexHeaderCard title="Accelerate Sales Pipelines" subtitle="Systematically" icon={<QualitativeIcon />} />
           <IndexHeaderCard title="Create Leads that Sales love" subtitle="Qualitatively" icon={<SystematicIcon />} />
          </div>
          <div style={{right:"4rem",position:"relative"}}><HelpB2BClients  /></div>
        </div>
      /</BackgroundImage>

      <div className={styles.container2}>
        <IndexProcessCard title="THE DEMAND GENERATION PROCESS" subtitle="" />
        <IndexProcessCard title="ACCOUNT BASED MARKETING PROCESS" subtitle="For Dream Accounts" />
        <IndexProcessCard title="SALES ♡ MARKETING LEADS" subtitle="SQLs not MQLs" />
      </div>

      <div className={styles.container3}>
        <h2>Package Overview</h2>
        <div className={styles.packageContainer}>
          <IndexPackage image={<Target />} text="1. Your Target Accounts List" />
          <IndexPackage image={<Landing />} text="2. Landing & Case Study Page" />
          <IndexPackage image={<Retarding />} text="3. Retarding Ads" />
          <IndexPackage image={<Email />} text="4. Email Auto-Nurture Sequence" />
          <IndexPackage image={<Lead />} text="5. Free Lead Tracking & Alert System" />
          <IndexPackage image={<TeamIcon />} text="6. Team Training for Handoff" />
          </div>
      </div>
      <div className={styles.container5}>
        <div className={styles.packageList}>
          <span>Full Package</span>
          <span>Package 2</span>
          <span>Custom Package</span>
        </div>
        <div className={styles.spans}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.amount}>
        <span>abcd</span>
          <span>abcd</span>
          <span>abcd</span>
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.contactBox}>
          <div className={styles.consultTitle} >SCHEDULE A CONSULTATION</div>
          <div className={styles.consultSubtitle}>Get a free 10-step marketing audit with ideas.</div>
          <button className={styles.consultButton}>SEE TIME SLOTS</button>
        </div>
        <div className={styles.contactImg}><Consultation /></div>
      </div>

      <div className={styles.container6}>
        <Img fluid={props.data.video.childImageSharp.fluid} className={styles.video} />
      </div>

      <div className={styles.container7}>
        <h2>
          Testimonials
        </h2>
        <div className={styles.testimonials}>
          <Testimonial pic={props.data.conor.childImageSharp.fluid}  name="Conor Rath" 
          body="I got on a call with Akshat not knowing what to expect to get a 3rd opinion on my campaigns I was running (as I do with all my large campaigns).
          He quickly was able to add alot of value with some great actionable advice. His breadth of experience in digital marketing really shined through. He is a truly well versed digital strategist.
          
          As a fellow digital marketer based in Australia I highly recommend Akshat." 
          desig="Strategic Marketer"
           />
           <Testimonial pic={props.data.gautam.childImageSharp.fluid} name="Gautam Sampathkumr" 
          body="Great work!
          Very entrepreneurial and diligent in his approach.
          Broad knowledge of various pieces of the Digital Ecosystem.
          Would love to work with them again." 
          desig="Crypto Entrepreneur | Advisor: Datalaab & The Kode Network"
           />
        </div>
      </div>

      <Team akshat={props.data.akshat.childImageSharp.fluid} 
      mehvish={props.data.mehvish.childImageSharp.fluid} 
      anvishka={props.data.anvishka.childImageSharp.fluid} 
      />
     
  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  query {
    bgOverlay: file(relativePath: { eq: "bgOverlay.jpg" }) {
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
  }
`;