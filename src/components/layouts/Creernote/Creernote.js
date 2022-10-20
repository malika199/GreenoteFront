import React from "react";
import styles from "./Creernote.module.scss"


const creernote = () => {
	return(
			<div className={styles.wrapper}>
				<form className={styles.paper} method="get" action="">
					<div className={styles.margin}>Title: <input className={styles.title} type="text" name="title"/></div>
					<textarea placeholder="Ecrire une note." className={styles.text} name="text" rows="4" styles="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; "></textarea>
					<br/><input className={styles.button} type="submit" value="Create"/>
				</form>
			</div>
	)
}

export default creernote