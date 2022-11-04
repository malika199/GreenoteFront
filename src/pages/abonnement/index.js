import React from "react";
import styles from "./abonnement.module.scss"
import {AiOutlineCheck} from "react-icons/ai";


const Index = () => {
	return (
			<div className={styles.body}>
				<header>
					<img  className={styles.img1} src={"../../../images/img1.png"}/>
					<div>
						<img  className={styles.logo}  src="../../../images/logo_greenote.png" alt="Greenote logo" />
					</div>
					<nav>
						<ul>
							<li><a href="#">Accueil</a></li>
							<li><a href="#">Aide</a></li>
							<li><a className={styles.btncnx} href="login">Connexion</a></li>
						</ul>
					</nav>
				</header>
				<img className={styles.img2} src={"../../../images/rond.png"}/>
				<div className={styles.title}>
					ABONNEMENT
				</div>
				<div className={styles.minititle}>
					Découvrez notre abonnement Standard Dés aujourd'hui
				</div>
					<div className={styles.Standard}>
						<span className={styles.title2}> Standard </span>
						<span className={styles.title3}> Perfect to get started </span>
						<span className={styles.price}> 5&#x20AC; </span>
						<span className={styles.mois}> par mois </span>
						<button className={styles.btn}>S'abonner</button>
						<ul>
							<li><AiOutlineCheck style={{color: "rgb(206 206 21)",marginRight: "15px"}}/>10 Notes par jour</li>
							<li><AiOutlineCheck style={{color: "rgb(206 206 21)",marginRight: "15px"}}/>10 Notes par jour</li>
							<li><AiOutlineCheck style={{color: "rgb(206 206 21)",marginRight: "15px"}}/>10 Notes par jour</li>
						</ul>
					</div>
				</div>
	);
};

export default Index;
