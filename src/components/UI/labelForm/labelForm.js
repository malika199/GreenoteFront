import React from 'react';
import styles from "./labelForm.module.scss";


const LabelForm = ({ children, ...restProps }) => {
    return(

        <label className={styles.labelForm} {...restProps} > {children} </label>
        

    )

}

export default LabelForm