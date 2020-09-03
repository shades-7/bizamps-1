import React from 'react'

import styles from "../../stylesheets/b2bMarketingPackage.module.scss"

const WeAreCard = (props) => {
    return (
        <div className={styles.weAreCard}>
            <div  className={styles.weAreIcon} ><props.icon/></div>
            <div  className={styles.weAreIconMob} ><props.iconMob/></div>
            <div className={styles.weAreTitle}>{props.title} </div>
            <hr/>
            <div className={styles.weAreSubtitle}>{props.subtitle} </div>
            <div className={styles.weAreCaption}>{props.caption}</div>
        </div>
    )
}

export default WeAreCard
