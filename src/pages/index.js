import React,{useState} from "react"
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

const IndexPage = (props) => {

  const [process1,setProcess1]=useState([
    { title:"STEP 1. TECH STACK ANALYSIS",subtitle:"via competitor analysis & spy tools",caption:"80% chance that we can decode your company's marketing strategy just by looking at your MarTech Stack, Ads and Search Rankings"},
    { title:"2. FINDING LEVERAGE POINTS",subtitle:"Craft quick win strategy",caption:"Should your first segmenting your ads? Use intent + visitor discovery tools to prioritize outreach? Implement dynamic landing pages & messaging?"},
    { title:"3. IMPLEMENTING EXPERIMENTS",subtitle:"Set the stage & execute",caption:"From campaign ideation to execution to analysis. We help with everything."},
    { title:"4. DOUBLE DOWN",subtitle:"Scale what is working now",caption:"We help you find what is working best for you and then scale it.Fast"}
  ])
  const [process2,setProcess2]=useState([
    { title:"Step 1. WORKSHOPS",subtitle:"Account selection framework",caption:"(CRM data + marketing engagement + Intent data + qualification criteria)" ,subcaption:"READ IN-DEPTH GUIDE"},
    { title:"2. ALIGNMENT",subtitle:"Sales + Marketing",caption:"Using sales team;s insights to personalize marketing. Using marketing's insights to personalize sales's messaging.",subcaption:"READ IN-DEPTH GUIDE"},
    { title:"3. PERSONALIZE",subtitle:"Customizing touch points",caption:"Crafting marketing material for each stage in the buyer's journey from ads to social to content to emails to direct mail.",subcaption:"READ IN-DEPTH GUIDE"},
    { title:"4. ENGAGING",subtitle:"Stop not till the goal is reached",caption:"Did you engage 40% of accounts? If not, lets change something until we do.",subcaption:"READ IN-DEPTH GUIDE"}
  ])
  const [process3,setProcess3]=useState([
    { title:"STEP 1. NUMBER CHURNING",subtitle:"Lead value * Volume",caption:"If Whitepaper download lead is worth $500 & Demo request $2000.Then why not have more CTAs for demo requests?"},
    { title:"2. LEAD QUALIFICATION",subtitle:"Before they enter your funnel",caption:"Use intent + visitor discovery + News signals to prioritize leads.Know who is in-market for your solution."},
    { title:"3. PRE-SALES CAMPAIGN",subtitle:"Increase lead velocity",caption:"Ex: Marketing (not sales) calls content downloaders and guide them until they are sales ready."}
  ])


  return (
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
          <div className={styles.B2BContainer}><HelpB2BClients  /></div>
        </div>
      /</BackgroundImage>

      <div className={styles.container2}>
        <IndexProcessCard title="THE DEMAND GENERATION PROCESS" subtitle="" content={process1} />
        <IndexProcessCard title="ACCOUNT BASED MARKETING PROCESS" subtitle="For Dream Accounts" content={process2} />
        <IndexProcessCard title="SALES ♡ MARKETING LEADS" subtitle="SQLs not MQLs" content={process3} />
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
          <a href="https://calendly.com/akshatkharbanda/30min?month=2020-06" target="_blank"><button className={styles.consultButton}>SEE TIME SLOTS</button></a>
        </div>
        <div className={styles.contactImg}><Consultation /></div>
      </div>

      <div className={styles.container6}>
        <a href="https://www.youtube.com/watch?v=WMUHIPwca4Q&feature=youtu.be&loop=0&autoplay=0" target="_blank"><Img fluid={props.data.video.childImageSharp.fluid} className={styles.video} /></a>
      </div>

     <Testimonial conor={props.data.conor.childImageSharp.fluid} gautam={props.data.gautam.childImageSharp.fluid} />

      <Team akshat={props.data.akshat.childImageSharp.fluid} 
      mehvish={props.data.mehvish.childImageSharp.fluid} 
      anvishka={props.data.anvishka.childImageSharp.fluid} 
      shweta={props.data.shweta.childImageSharp.fluid}
      />
     
  </Layout>
  )
  }

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

    indexHeader: file(relativePath: { eq: "indexHeader.svg" }) {
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

    shweta: file(relativePath: { eq: "shweta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;