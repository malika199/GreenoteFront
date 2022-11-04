import React from "react";

import styles from "./SubImage.module.scss"


const SubImage = () => {
    return(
        <div className={styles.container}>
           <img  className={styles.ImageSub}  src="/images/imageNotes.jpg" alt="Greenote images" />

        </div>
    )
}

export default SubImage