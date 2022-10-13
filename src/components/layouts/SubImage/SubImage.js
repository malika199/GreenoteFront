import React from "react";

import styles from "./SubImage.module.scss"


const SubImage = () => {
    return(
        <div>
           <img  className={styles.ImageSub}  src="/images/imageNotes.jpg" alt="Greenote images" />

        </div>
    )
}

export default SubImage