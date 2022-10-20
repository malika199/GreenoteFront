import React from "react";

import styles from "./ButtonSubmit.module.scss"

const ButtonSubmit = (props) => {
    return(
        <input className={styles.ButtonSubmit}
        type="submit"
        value={props.value}
        
        />
    )
}

export default ButtonSubmit