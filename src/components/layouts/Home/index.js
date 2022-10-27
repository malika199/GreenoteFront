import React, { useState } from "react";
import styles from "./styles.module.scss";


const index = () => {
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
        <div className={styles.Content}>
            <div className={styles.Managing_business}>
                <span>Managing business payments has never been easier</span>
            </div>
            <div className={styles.Product_Growth}>
                <span>Product Growth Solution in Single Platform.</span>
            </div>
            <div className={styles.Never_at_water}>
                <span>Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</span>
            </div>
        </div>
        <img  className={styles.capecr} src={"../../../images/capecr.png"}/>
        <svg className={styles.Ellipse}>
            <ellipse className={styles.Ellipsep} rx="228" ry="228" cx="228" cy="228"/>
        </svg>
        <div className={styles.Content2}>
            <div className={styles.We_help}>
                <span>We have best team and best process.</span>
            </div>
            <div className={styles.Why_kept}>
                <span>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.</span>
            </div>
        </div>
    
        <div className={styles.Content3}>
            <svg className={styles.Vector} viewBox="0 0 948.738 381.185">
                <path className={styles.Vectorc}
                      d="M 0 296.8395080566406 C 44.77817153930664 330.593505859375 149.0739898681641 394.243896484375 208.0319213867188 378.8135070800781 C 281.7293090820312 359.5255126953125 299.9204711914062 260.1923217773438 413.731689453125 237.0467224121094 C 527.5428466796875 213.9011383056641 611.0354614257812 294.4285278320312 699.1925048828125 178.2183532714844 C 787.3494873046875 62.00816345214844 830.261962890625 -14.17942905426025 948.737548828125 2.215366840362549">
                </path>
            </svg>
            <div className={styles.Content4}>
                <div className={styles.n1}>
                    <span>1</span>
                </div>
                <div className={styles.Content5}>
                    <div className={styles.Project_Discovery}>
                        <span>Project Discovery Call</span>
                    </div>
                    <div className={styles.Party}>
                        <span>Party we years to order allow asked of. We so opinion friends me message as delight. </span>
                    </div>
                </div>
                <div className={styles.Content6}>
                    <svg className={styles.Rectangle2}>
                        <rect className={styles.Rectanglec2} rx="20" ry="20" x="0" y="0" width="60" height="62">
                        </rect>
                    </svg>
                    <svg className={styles.Rectangle3}>
                        <rect className={styles.Rectanglec3} rx="10" ry="10" x="0" y="0" width="21" height="22">
                        </rect>
                    </svg>
                </div>
            </div>
            <div className={styles.Content7}>
                <div className={styles.n2}>
                    <span>2</span>
                </div>
                <div className={styles.Content8}>
                    <div  className={styles.Project_Discovery}>
                        <span>Project Discovery Call</span>
                    </div>
                    <div  className={styles.His_defective}>
                        <span>His defective nor convinced residence own. Connection has put impossible own apartments boisterous.</span>
                    </div>
                </div>
                <div className={styles.Content9}>
                    <svg className={styles.Rectangle4}>
                        <rect className={styles.Rectanglec4} rx="20" ry="20" x="0" y="0" width="60" height="62">
                        </rect>
                    </svg>
                    <svg className={styles.Rectangle5}>
                        <rect className={styles.Rectanglec5} rx="10" ry="10" x="0" y="0" width="23" height="22">
                        </rect>
                    </svg>
                </div>
            </div>
            <div className={styles.Content10}>
                <div className={styles.n3}>
                    <span>3</span>
                </div>
                <div className={styles.Content11}>
                    <div className={styles.Project_Discovery}>
                        <span>Project Discovery Call</span>
                    </div>
                    <div className={styles.From_they}>
                        <span>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.</span>
                    </div>
                </div>
                <div className={styles.Content12}>
                    <svg className={styles.Rectangle6}>
                        <rect className={styles.Rectanglec6} rx="20" ry="20" x="0" y="0" width="60" height="61">
                        </rect>
                    </svg>
                    <svg className={styles.Rectangle7}>
                        <rect className={styles.Rectanglec7} rx="10" ry="10" x="0" y="0" width="22" height="22">
                        </rect>
                    </svg>
                </div>
            </div>
        </div>
        <img  className={styles.img2} src={"../../../images/img2.png"}/>
        <div className={styles.Content13}>
            <div className={styles.p2}>
                <span>We help your business grow faster.</span>
            </div>
            <div className={styles.p3}>
                <span>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.</span>
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

export default index;
