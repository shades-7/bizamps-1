import React from 'react'
import Layout from "../components/layout"
import { Link,graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Navbar from "../components/navbar/Navbar"
import Footer from '../components/Footer/footer'
import Location from "../components/Location/Location"
import Video from "../components/BestOfABM/Video"
import TableOfContent from "../components/BestOfABM/TableOfContent"

import DpBg from "../assets/BestOfABM/DpBg"

import styles from "../stylesheets/bestOfABM.module.scss"

const BestOfABM = (props) => {

  const tableOfContent=[
    {
      num:"1",
      name:"Benchmarks & Results of Account-Based Marketing",
      subname:"One info-table to rule it all",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic11.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic12.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic13.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic14.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic15.childImageSharp.fluid,
                  caption:""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"2",
      name:"ABM examples vs B2B Demand Generation",
      subname:"See Understand it, with examples",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic21.childImageSharp.fluid,
                  caption:""
                }
              ]
            },
            {
              key:"01",
              heading:"RollWorks",
              subheading:"",
              points:[
                {
                  value:"Used this multichannel approach to make a big impression and get a 41% close rate. "
                }
              ],
              pics:[
                {
                  pic:props.data.topic22.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic23.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic24.childImageSharp.fluid,
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"Jellyvision",
              subheading:"",
              points:[
                {
                  value:"ABM pilot that converted prospects to opportunities 8x higher than their initial goal. "
                }
              ],
              pics:[
                {
                  pic:props.data.topic25.childImageSharp.fluid,
                  caption:""
                },
                {
                  pic:props.data.topic26.childImageSharp.fluid,
                  caption:""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"3",
      name:"How to used old content & better messaging ",
      subname:"Just personalize it!",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic31.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic32.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic33.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic34.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic35.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic36.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic37.childImageSharp.fluid,                  
                  caption:"People who show up on your webinars are mostly already near to buy from you"
                },
                {
                  pic:props.data.topic38.childImageSharp.fluid,                  
                  caption:"Buyer Personas for planning content.  Content Rule of ABM = Personalize, Personalize & Personalize some more!"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"4",
      name:"Why sales in ABM?",
      subname:"ABM doesn't work with Sales + Marketing",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic41.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic42.childImageSharp.fluid,                  
                  caption:""
                },
                {
                  pic:props.data.topic43.childImageSharp.fluid,                  
                  caption:"Automatic email alert from Marketing to Sales"
                },
              ]
            }
          ]
        }
      ]
    },
    {
      num:"5",
      name:"Sales responsibility in ABM",
      subname:"What does Inside sales and account executives need to do?",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic51.childImageSharp.fluid,                  
                  caption:""
                }
              ]
            },
            {
              key:"01",
              heading:"Action Day To-do list of SDRs for 150 contacts:",
              subheading:"",
              points:[
                {
                  value:"A. 15 In mails -"
                },
                {
                  value:"B. 25 Dials - (cold call to decision maker 4% connect rate)"
                },
                {
                  value:"C. Email Cadence (Setup by marketing)"
                },
                {
                  value:"D. Events - Webinars Invites, Round table invite etc"
                },
                {
                  value:"E. Alert on Accounts _ Google, Direct mail Delivery,Engagement"
                },
                {
                  value:"F. MQL Follow-up"
                },
                {
                  value:"G. Weekly standup - SDR/AE/Marketing "
                }
              ],
              pics:[
                {
                  pic:props.data.topic42.childImageSharp.fluid,                  
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"Prep Day To-do list of SDRs: ",
              subheading:"",
              points:[
                {
                  value:"A. Pre Call research"
                },
                {
                  value:"B. Create messaging for each person"
                },
                {
                  value:"C. Write email/In-mail Drafts "
                }
              ],
              pics:[
                {
                  pic:props.data.topic42.childImageSharp.fluid,                  
                  caption:""
                }
              ]
            },
            {
              key:"03",
              heading:"Notes:",
              subheading:"",
              points:[
                {
                  value:"Total 30 accounts/SDR "
                },
                {
                  value:"Each SDR should handle only 2 industries and 10 accounts/month/3Account executives"
                }
              ],
              pics:[
                {
                  pic:props.data.topic42.childImageSharp.fluid,                  
                  caption:""
                }
              ]
            },
            {
              key:"04",
              heading:"PS:",
              subheading:"",
              points:[
                {
                  value:"Schedule a call if you want a custom ABM Pilot Strategy"
                }
              ],
              pics:[
                {
                  pic:props.data.topic52.childImageSharp.fluid,                  
                  caption:""
                }
              ]
            },
            {
              key:"01",
              heading:"MARKETING-SALES HANDOFF",
              subheading:"",
              points:[
                {
                  value:"AE = The Sale Closer.  SDR = Inside Sales Tele-Caller"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"After assigning one SDR to an AE, Ask the AE to train their SDRs if he/she is a fresher"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"03",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Each AE should guide the marketing & SDR;s messaging + help select 10 accounts/SDR/month but marketing first need to bring all kind of data the table on who might buy soon."
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"04",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"AE should help explain - What might be important for each account & it's stakeholders"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"05",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"AE should internalize any messaging brief or any thought leadership content that we use to do marketing/advertising."
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"06",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"AE should know How to use digital/printed content like whitepaper and direct the conversation.  PS: Schedule a call if you want a custom ABM Pilot Strategy"
                }
              ],
              pics:[
                {
                  pic:props.data.topic43.childImageSharp.fluid,                  
                  caption:""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"6",
      name:"Backend & Tech Stack for ABM (For scaling)",
      subname:" PS: You need tech stack to scale, no start",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic61.childImageSharp.fluid,  
                  caption:""
                },
                {
                  pic:props.data.topic62.childImageSharp.fluid,  
                  caption:"How fluke automated their inbound leads to meetings"
                },
                {
                  pic:props.data.topic63.childImageSharp.fluid,  
                  caption:""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"7",
      name:"Points to Note before starting",
      subname:"These are combined insights of multiple ABM practitioners.",
      content:[
        {
          points:[
            {
              key:"01",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Define the Purpose of ABM & have shared metrics:.  Grow accounts/ Cross-sell & Upsell/ Get new accounts/ Defend base"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Think Post Campaign Metrics (Comparing ABM vs Non-ABM):.  Winrate, Deal Size, Lead Velocity, Reputation, Relationship, Revenue"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"03",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Get Written Buy-in from Leadership Team:. Head Sales + Head Marketing + Head Customer Success"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"04",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Workshop for ‘Target Accounts’ | Sales & Marketing Alignment schedule"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"05",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Source account insight from AEs, SDRs, 3rd party (Salt in the recipe of ABM). PS: Schedule a call if you want a custom ABM Pilot Strategy "
                }
              ],
              pics:[
                {
                  pic:props.data.topic71.childImageSharp.fluid,  
                  caption:"Know who wants what"
                },
                {
                  pic:props.data.topic72.childImageSharp.fluid,  
                  caption:"Create awesome and FAST websites!"
                },
                {
                  pic:props.data.topic73.childImageSharp.fluid,  
                  caption:""
                },
                {
                  pic:props.data.topic74.childImageSharp.fluid,  
                  caption:"Create awesome and FAST websites!"
                },
                {
                  pic:props.data.topic75.childImageSharp.fluid,  
                  caption:"DemandBase's Suggestion"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"8",
      name:"How to Select Accounts (The 5 Levels)",
      subname:" All the best ways ",
      content:[
        {
          points:[
            {
              key:"",
              heading:"",
              subheading:"",
              points:[
                {
                  value:""
                }
              ],
              pics:[
                {
                  pic:props.data.topic81.childImageSharp.fluid,  
                  caption:"Level 1"
                },
                {
                  pic:props.data.topic82.childImageSharp.fluid,  
                  caption:"Level 2"
                },
                {
                  pic:props.data.topic83.childImageSharp.fluid,  
                  caption:"Level 3 - Combine manual qualification, like do they have a 'free demo'"
                },
                {
                  pic:props.data.topic84.childImageSharp.fluid,  
                  caption:"Level 4 - Enrich with Intent data"
                },
                {
                  pic:props.data.topic81.childImageSharp.fluid,  
                  caption:"Level 5"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      num:"9",
      name:"BizAmps's Step by Step ABM Pilot ",
      subname:"ABM Pilot= Use your current marketing tactics but focus only on 10 accounts.",
      content:[
        {
          points:[
            {
              key:"01",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Usually Sales think Marketing is doing everything wrong "
                }
              ],
              pics:[
                {
                  pic:"", 
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"You can't do ABM without sales buy-in"
                }
              ],
              pics:[
                {
                  pic:"", 
                  caption:""
                }
              ]
            },
            {
              key:"03",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Company internal education on ABM is highly needed"
                }
              ],
              pics:[
                {
                  pic:"", 
                  caption:""
                }
              ]
            },
            {
              key:"04",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Marketing needs to take work off the SDRs and need to work along them to improve results"
                }
              ],
              pics:[
                {
                  pic:"", 
                  caption:""
                }
              ]
            },
            {
              key:"05",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Try Doing two types of ABM at once, it has higher ROI"
                }
              ],
              pics:[
                {
                  pic:"", 
                  caption:""
                }
              ]
            },
            {
              key:"06",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Probably there is no need/want for your offering, so plan your strategy & marketing accordingly"
                }
              ],
              pics:[
                {
                  pic:"", 
                  caption:""
                }
              ]
            },
            {
              key:"07",
              heading:"",
              subheading:"",
              points:[
                {
                  value:"Buyers are really sophisticated. First they want to hear about you from multiple places. Then they might be receptive to your outreach, which ideally shorter than a tweet but no-canned stuff. That’s why they don’t hear to voicemails"
                },
                {
                  value:"PS: Schedule a call if you want a custom ABM Pilot Strategy."
                }
              ],
              pics:[
                {
                  pic:props.data.topic91.childImageSharp.fluid, 
                  caption:"Step 1 - Think about the end product"
                }
              ]
            },
            {
              key:"01",
              heading:"STAGE 1: PRE-OUTREACH MARKETING",
              subheading:"",
              points:[
                {
                  value:"Content for Cold Audience:"
                },
                {
                  value:"Examples of their peers using, etc"
                },
                {
                  value:"The Case for Change: Signs for change, etc"
                },
                {
                  value:"Insights via Surveys, Industry & Analyst"
                },
                {
                  value:"Reports"
                },
                {
                  value:"Channels:"
                },
                {
                  value:"Segmented Marketing emails for engagement initiation"
                },
                {
                  value:"Content Track with In-text CTA | Infographic with Image CTA |"
                },
                {
                  value:"Ads for awareness (Social, Display, Video) "
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"STAGE 2 : OUTREACH",
              subheading:"",
              points:[
                {
                  value:"Direct mail"
                },
                {
                  value:"LinkdIn Inmail"
                },
                {
                  value:"Phone Call & Prospecting Cadence"
                },
                {
                  value:"Outreach Text-only Email (Shorter than a tweet)"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"03",
              heading:"STAGE 3 : MEETING SCHEDULED",
              subheading:"",
              points:[
                {
                  value:"Content:"
                },
                {
                  value:"Case Studies Blogs"
                },
                {
                  value:"Thought-provoking questions on Change"
                },
                {
                  value:"Product Features/Use cases"
                },
                {
                  value:"Channels:"
                },
                {
                  value:"Dynamic Landing page"
                },
                {
                  value:"Retargeting Ads(Social, Display, Video)"
                },
                {
                  value:"Drip Email"
                },
                {
                  value:"Invite for Webinars"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"04",
              heading:"STAGE 4 : OPPORTUNITY CREATED",
              subheading:"",
              points:[
                {
                  value:"Content"
                },
                {
                  value:"Comparison"
                },
                {
                  value:"How to sell internally"
                },
                {
                  value:"Showing ROI"
                },
                {
                  value:"Risk Analysis"
                },
                {
                  value:"Channels"
                },
                {
                  value:"-Same as stage 3-"
                }
              ],
              pics:[
                {
                  pic:props.data.topic92.childImageSharp.fluid,
                  caption:"STAGE 5"
                },
                {
                  pic:props.data.topic93.childImageSharp.fluid,
                  caption:"Deliverables required accoriding to stages"
                },
                {
                  pic:props.data.topic94.childImageSharp.fluid,
                  caption:"Content for each buyer's stage"
                }
              ]
            },
            {
              key:"01",
              heading:"People Required (Most can be part-time):",
              subheading:"",
              points:[
                {
                  value:"1. Strategist/Manager"
                },
                {
                  value:"2. Content Creator"
                },
                {
                  value:"3. Designer (Custom graphics bases on their industry + role"
                },
                {
                  value:"4. Conducting Sales tech outreach"
                },
                {
                  value:"Teach Ops (Setups, Integration, Reporting, Dashboards"
                },
                {
                  value:"PS: Schedule a call if you want a custom ABM Pilot Strategy"
                }
              ],
              pics:[
                {
                  pic:"",
                  caption:""
                }
              ]
            },
            {
              key:"02",
              heading:"Marketing Tricks",
              subheading:"",
              points:[
                {
                  value:"1. Get the whole team visit a target account's on LinkedIn"
                },
                {
                  value:"2. Let employees share the content first and then reshare that from company page"
                },
                {
                  value:"3. To get some-one's buy-in, Co-author an article with them"
                },
                {
                  value:"4. Bring you Tech/R&D/SMEs to the prospect meetings. "
                }
              ],
              pics:[
                {
                  pic:props.data.topic95.childImageSharp.fluid,
                  caption:"Programmatic ABM Example"
                },
                {
                  pic:props.data.topic96.childImageSharp.fluid,
                  caption:"Internal Report - When scaling ABM"
                },
                {
                  pic:props.data.topic97.childImageSharp.fluid,
                  caption:"Create awesome and FAST websites!"
                },
                {
                  pic:props.data.topic98.childImageSharp.fluid,
                  caption:"ABM Report"
                },
                {
                  pic:props.data.topic99.childImageSharp.fluid,
                  caption:"ABM can be started with 1 person and no special tools"
                }
              ]
            }
          ]
        }
      ]
    }
  ]

    return (
        <Layout>
            <div className={styles.navBox}>
                <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
            </div>

            <div className={styles.headerContainer}>
              <div className={styles.headerImgBox}>
                <div className={styles.headerImgBg} >
                  <Img fluid={props.data.headerImg.childImageSharp.fluid} /> 
                </div>
                {/* <Img className={styles.headerImg} /> */}
              </div>
              <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>"I WENT THROUGH EVERY ACCOUNT-BASED MARKETING WEBINAR, TALK & EBOOK AND HERE’S THE BEST OF THEM!"</h1>
                <h2 className={styles.headerSubtitle}>NOTE: ABM IS STARTEGY, BELOW MENTION ARE TACTICS & TECHNIQUES.</h2>
              </div>
            </div>

            <Video num="1" thumbnail={props.data.video1.childImageSharp.fluid} link="https://www.youtube.com/watch?v=DyZQJZ5NSF0&feature=youtu.be&loop=0&autoplay=0" />

            <div className={styles.tocContainer}>
              <div className={styles.tocHeading}>Table of Contents:</div>
              <div className={styles.tocContentContainer}>
                {
                  tableOfContent.map((item,index)=>{
                    return (
                      <div key={index} className={styles.tocContent}>
                        <div className={styles.tocNum}>{item.num}</div>
                        <div className={styles.tocName}>{item.name}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <TableOfContent toc={tableOfContent} />

            <Video num="2" thumbnail={props.data.video2.childImageSharp.fluid} link="https://www.youtube.com/watch?v=RQRHjItSFRc&feature=youtu.be&loop=0&autoplay=0" />

              <div className={styles.quoteContainer}>
                <div className={styles.quote}>" A full 87% of B2B marketers have agreed ABM delivers a higher ROI than other marketing activities. "</div>
                <div className={styles.itsma}>-ITSMA</div>
              </div>

            <Video num="3" thumbnail={props.data.video3.childImageSharp.fluid} link="https://www.youtube.com/watch?v=t5SgVRKQZR8&feature=youtu.be&loop=0&autoplay=0" />

            <div className={styles.infoOverload}>
              <div className={styles.infoOverloadTitle}>Don't over complicate it! - <a target="_blank" href="https://calendly.com/akshatkharbanda/30min?month=2020-06" style={{color:"#2F80ED"}}>Schedule a call</a> if you want a custom ABM Pilot Strategy</div>
              <Img className={styles.infoOverloadImg} fluid={props.data.infoOverload.childImageSharp.fluid} />
              <div className={styles.infoOverloadBottom}></div>
            </div>

            <Location first="Home" second="Expertise" third="[Guide] Best of ABM" />

            <Footer />
        </Layout>
    )
}

export default BestOfABM

export const B2BMarketingPackagePageQuery = graphql`
  query {
   video1 : file(relativePath: { eq: "videoPart1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    video2 : file(relativePath: { eq: "videoPart2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    video3 : file(relativePath: { eq: "videoPart3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic11 : file(relativePath: { eq: "topic1.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic12 : file(relativePath: { eq: "topic1.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic13 : file(relativePath: { eq: "topic1.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic14 : file(relativePath: { eq: "topic1.4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic15 : file(relativePath: { eq: "topic1.5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic21 : file(relativePath: { eq: "topic2.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic22 : file(relativePath: { eq: "topic2.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic23 : file(relativePath: { eq: "topic2.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic24 : file(relativePath: { eq: "topic2.4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic25 : file(relativePath: { eq: "topic2.5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic26 : file(relativePath: { eq: "topic2.6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic31 : file(relativePath: { eq: "topic3.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic32 : file(relativePath: { eq: "topic3.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic33 : file(relativePath: { eq: "topic3.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  

    topic34 : file(relativePath: { eq: "topic3.4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  

    topic35 : file(relativePath: { eq: "topic3.5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  

    topic36 : file(relativePath: { eq: "topic3.6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  

    topic37 : file(relativePath: { eq: "topic3.7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    topic38 : file(relativePath: { eq: "topic3.8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    topic41 : file(relativePath: { eq: "topic4.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    topic42 : file(relativePath: { eq: "topic4.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic43 : file(relativePath: { eq: "topic4.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic51 : file(relativePath: { eq: "topic5.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    topic52 : file(relativePath: { eq: "topic5.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic53 : file(relativePath: { eq: "topic5.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic61 : file(relativePath: { eq: "topic6.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
    topic62 : file(relativePath: { eq: "topic6.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic63 : file(relativePath: { eq: "topic6.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic71 : file(relativePath: { eq: "topic7.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic72 : file(relativePath: { eq: "topic7.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic73 : file(relativePath: { eq: "topic7.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic74 : file(relativePath: { eq: "topic7.4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic75 : file(relativePath: { eq: "topic7.5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  
    topic81 : file(relativePath: { eq: "topic8.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic82 : file(relativePath: { eq: "topic8.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic83 : file(relativePath: { eq: "topic8.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic84 : file(relativePath: { eq: "topic8.4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic85 : file(relativePath: { eq: "topic8.5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic91 : file(relativePath: { eq: "topic9.1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic92 : file(relativePath: { eq: "topic9.2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic93 : file(relativePath: { eq: "topic9.3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic94 : file(relativePath: { eq: "topic9.4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic95 : file(relativePath: { eq: "topic9.5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic96 : file(relativePath: { eq: "topic9.6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic97 : file(relativePath: { eq: "topic9.7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic98 : file(relativePath: { eq: "topic9.8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    topic99 : file(relativePath: { eq: "topic9.9.jpg" }) {
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

    infoOverload : file(relativePath: { eq: "infoOverload.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    headerImg : file(relativePath: { eq: "headerImg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    
  }
`;
