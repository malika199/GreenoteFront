import React from "react";
import styles from "./aide.module.scss";
import Accordion from "../../components/Accordion";

const Index = () => {
	return (
        
        <div className={styles.body}>
        <header >
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
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            
          <div className="accord">
              <h1 >FAQ</h1>
          </div>
          <style jsx>
        {`
        .accord  {
          text-align: center;
          font-size:20px;
        }`}
        </style>
          <div className={styles.Accordion}  >  
              <Accordion />
             
          

              
          </div>
               
          </div>
        </div>
        <br>
        </br>      
                
        <footer className={styles.footer}>
            <div className={styles.contain}>
                <div className={styles.col}>
                    <img  className={styles.logo2}  src="../../../images/logo_greenote.png" alt="Greenote logo" />
                </div>
                <div className={styles.col}>
                    <p>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <p>Ressource</p>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <p>Support</p>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
            </div>
            <svg className={styles.Rectangle}>
                <rect className={styles.Rectanglecolor} rx="0" ry="0" x="0" y="0" width="1140" height="2">
                </rect>
            </svg>
            <div className={styles.copyright}>
                <span>Copyright @ GREENOTE 2022. All Rights Reserved.</span>
            </div>
        </footer>
        </div>

     
        
        

	);
};

export default Index;



