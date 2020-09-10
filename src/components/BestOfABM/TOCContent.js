import React,{useState} from 'react'
import Img from 'gatsby-image'

import styles from "../../stylesheets/bestOfABM.module.scss"

const TOCContent = (props) => {
    const [click,setClick]=useState(false)

    const clickHandler=()=>setClick(!click)
    return (
        <div key={props.index} className={styles.innerContainer}>
                                <div onClick={clickHandler} className={styles.tableOfContentBox}>
                                    <div className={styles.num}>{props.item.num}</div>
                                    <div className={styles.nameBox }>
                                        <div className={styles.name}>{props.item.name}</div>
                                        <div className={styles.subname}>{props.item.subname}</div>                                       
                                    </div>
                                </div>
                                {
                                    click ? 
                                    <div className={styles.outerContentBox}>
                                        {
                                            props.item.content.map((item,index)=>{
                                                return (
                                                    <div key={index} className={styles.innerContentBox}>
                                                        {
                                                            item.points.map((item,index)=>{
                                                                return (
                                                                    <div className={styles.innerContentBox2}>
                                                                    <div className={styles.contentBox}>
                                                                    <div className={styles.info}>
                                                                        <div className={styles.key}>{item.key}</div>
                                                                        <div className={styles.content}>
                                                                            <div className={styles.heading}>{item.heading}</div>
                                                                            {/* <div className={styles.subheading}>{item.subheading}</div> */}
                                                                            {
                                                                                item.points.map((item,index)=>{
                                                                                    return (
                                                                                        <div className={styles.points} key={index}>{item.value}</div>
                                                                                    )
                                                                                })
                                                                            }
                                                                            
                                                                        </div>
                                                                        </div>
                                                                    {
                                                                            item.pics.map((item,index)=>{
                                                                                return (
                                                                                    item.pic===""?null:
                                                                                    <div className={styles.imgBox} key={index}>
                                                                                        <Img className={styles.img} fluid={item.pic} />
                                                                                        <div className={styles.caption}>{item.caption}</div>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                 :null
                                }
                            
                        </div>
    )
}

export default TOCContent
