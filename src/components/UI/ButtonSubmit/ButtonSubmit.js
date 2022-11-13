import React from "react";

import styles from "./ButtonSubmit.module.scss"

const ButtonSubmit = (props) => {
    return(
        <input className={styles.ButtonSubmit}
        type={props.type}
        value={props.value}
        
        />
    )
}

export default ButtonSubmit