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
          <div className="single-contact-info" >  
              <Accordion />
              
          </div>
               
          </div>
        </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                    <style jsx>
        {`
        .contact-title mb-30 {
          text-align: center;
          font-size:20px;
        }`}
        </style>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="button button1" type="submit">
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
            
        </div>
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



