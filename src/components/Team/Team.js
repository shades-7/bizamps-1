import React,{useState,useEffect} from 'react'
import Img from 'gatsby-image'

import styles from '../../stylesheets/team.module.scss'

const Team = (props) => {

    const [member,setMember]=useState([
      {pic:props.mehvish,name:"Mehvish Diwan",designation:"Outreach Manager"},
      {pic:props.anvishka,name:"Anviksha Kharbanda",designation:"Client success"},
      {pic:props.shweta,name:"Shweta Chaurasia",designation:"Web Developer"}
    ])
    const [currentIndex,setCurrentIndex]=useState(0)
    const [counter,setCounter]=useState(0)

    useEffect(()=>{
        setInterval(()=>{  
          setCounter(prev=>prev+1)    
        },1000)
    },[])

    useEffect(()=>{
      if(counter%3===0&&counter!=0){
        setCurrentIndex(prev=>prev===member.length-1?0:prev+1)
      }
    },[counter])

    const previous=()=>{
      if(currentIndex===0)
      {
        setCurrentIndex(member.length-1)
        setCounter(0)
      }
      else{
        setCurrentIndex(prev=>prev-1)
        setCounter(0)
      }
    }

    const next=()=>{
      if(currentIndex===member.length-1)
      {
        setCurrentIndex(0)
        setCounter(0)
      }
      else{
        setCurrentIndex(prev=>prev+1)
        setCounter(0)
      }
    }

    return (
        <div className={styles.teamContainer}>
        <div className={styles.founder}>
          <Img className={styles.founderImg} fluid={props.akshat}  />
          <div className={styles.name}>Akshat Kharbanda</div>
          <div className={styles.designation}>CEO & B2B Expert</div>
        </div>
        <div className={styles.team}>
          <div onClick={previous} className={styles.arrow} >{"<"}</div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <Img fluid={member[currentIndex].pic} className={styles.founderImg} />
          <div className={styles.name}>{member[currentIndex].name} </div>
          <div className={styles.designation}>{member[currentIndex].designation} </div>
          </div>
          <div onClick={next} className={styles.arrow} >{">"}</div>
        </div>
      </div>
    )
}

export default Team
