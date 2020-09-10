import React from 'react'
import Img from 'gatsby-image'

import styles from "../../stylesheets/bestOfABM.module.scss"
import TOCContent from './TOCContent'

const TableOfContent = (props) => {
    return (
        <div className={styles.outerContainer}>
            {
                props.toc.map((item,index)=>{
                    return (
                        <TOCContent item={item} index={index} />
                    )
                })
            }
            
        </div>
    )
}

export default TableOfContent
