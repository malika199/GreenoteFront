import React, {useState} from "react";
import styles from "./Accueil.module.scss"
import Creernote from '../Creernote/Creernote';

const Accueil = () => {
	const [note, setnote] = useState(false);
	
	return(
				<div className={styles.form__group}>
				<h1 className={styles.text}>Bonjour</h1>
				<div className={styles.wrapper}>
					<h1>NOTES</h1>
					<div className={styles.btnnote} onClick={() => setnote(true)}>
						<h1 className={styles.text2} > Créer une note </h1>
						</div>
				</div>
					{note && <Creernote/>}
				</div>
	)
}

export default Accueil