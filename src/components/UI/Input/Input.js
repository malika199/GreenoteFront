import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
    return(
        <div className={styles.form__group}>
            <input
                readOnly = {props.readOnly}
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input;
