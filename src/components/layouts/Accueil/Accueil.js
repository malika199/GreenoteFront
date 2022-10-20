import React, {useState} from "react";
import styles from "./Accueil.module.scss"
import Creernote from '../Creernote/Creernote';
import Note from '../Note/Note';

const Accueil = () => {
	const [note, setnote] = useState(false);
	
	return(
				<div className={styles.form__group}>
				<h1 className={styles.text}>Bonjour</h1>
				<div className={styles.wrapper}>
					<h1>NOTES</h1>
					<input className={styles.btnnote} type={'button'} onClick={() => setnote(true)} value={'Creer une note'}/>
				</div>
					{note && <Creernote/>}
				</div>
	)
}

export default Accueil