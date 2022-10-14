
import { useEffect } from "react";
import React from "react";
// import { webFonts, dynamicHeightFix } from "./../EKUtils.js";

import styles from "./dashboard.module.scss";

function Dashboard() {

	// useEffect(() => {
	// 	webFonts();
	// 	dynamicHeightFix();
	// }, [])

	return ( <div>
			<div className={styles._bg___2_signup___2}  ></div>

			<div className={styles.groupe_23}  >
				<img alt="ek_image" src="/images/kelly_sikkema_hl3ludykric_unsplash.png" className={styles.kelly_sikkema_hl3ludykric_unsplash} />
				<div className={styles.kelly_sikkema_hl3ludykric_unsplash_ek1}  ></div>

			</div>
			<div className={styles.rectangle_39}  ></div>
			<img alt="ek_image" src="/images/ellipse_7.png" className={styles.ellipse_7} />
			<div className={styles.greennote_team} >
				GREENNOTE TEAM
			</div>

			<div className={styles.icon_feather_settings} >
				<img alt="ek_image" src="/images/trac__12.png" className={styles.trac__12} />
				<img alt="ek_image" src="/images/trac__13.png" className={styles.trac__13} />

			</div>
			<div className={styles.rectangle_38} ></div>

			<div className={styles.groupe_25}  >
				<div className={styles.rectangle_36}  ></div>

				<div className={styles.groupe_24}  >

					<div className={styles.icon_feather_search} >
						<img alt="ek_image" src="/images/trac__14.png" className={styles.trac__14} />
						<img alt="ek_image" src="/images/trac__15.png" className={styles.trac__15}/>

					</div>
					<div className={styles.search} >
						Search
					</div>

				</div>

			</div>

			<div className={styles.groupe_27}  >
				<div className={styles.rectangle_37}  ></div>

				<div className={styles.groupe_26}  >

					<div className={styles.icon_feather_plus_circle} >
						<img alt="ek_image" src="/images/trac__16.png" className={styles.trac__16} />
						<img alt="ek_image" src="/images/trac__17.png" className={styles.trac__17} />
						<img alt="ek_image" src="/images/trac__18.png" className={styles.trac__18} />

					</div>
					<div className={styles.new} >
						New
					</div>

				</div>

			</div>

			<div className={styles.groupe_28}  >
				<img alt="ek_image" src="/images/icon_awesome_home.png" className={styles.icon_awesome_home}/>
				<div className={styles.home} >
					Home
				</div>

			</div>

			<div className={styles.groupe_32}  >
				<img alt="ek_image" src="/images/icon_open_account_logout.png" className={styles.icon_open_account_logout} />
				<div className={styles.log_out} >
					Log out
				</div>

			</div>
			<div className={styles.rectangle_40}  ></div>
			<div className={styles.notes} >
				Notes
			</div>
			<div className={styles.rectangle_41}  ></div>
			<div className={styles.rectangle_4}  ></div>
			<div className={styles.rectangle_43}  ></div>
			<div className={styles.untitled} >
				UNtitled
			</div>
			<div className={styles.untitled_ek1} >
				UNtitled
			</div>

			<div className={styles.icon_feather_plus_circle_ek1}  >
				<img alt="ek_image" src="/images/trac__16_ek1.png" className={styles.trac__16_ek1} />
				<img alt="ek_image" src="/images/trac__17_ek1.png" className={styles.trac__17_ek1} />
				<img alt="ek_image" src="/images/trac__18_ek1.png" className={styles.trac__18_ek1} />

			</div>
			<div className={styles.create_new__one} >
				Create New <br/>One
			</div>
			<div className={styles.bonjour__greenote_team___} >
				<span >Bonjour </span><span >@Greenote Team</span><span> ! </span>
			</div>
			<div className={styles._13_10_2022} >
				13/10/2022
			</div>

			<div className={styles.groupe_31}  >
				<div className={styles.shared_with_me} >
					Shared with me
				</div>
				<img alt="ek_image" src="/images/icon_awesome_share_alt.png" className={styles.icon_awesome_share_alt}/>

			</div>
			<div className={styles.greenote} >
				<span >Green</span>
                <span>o</span>
                <span>te</span>
			</div>

			<div className={styles.groupe_30}  >

				<div className={styles.icon_ionic_ios_trash}  >
					<img alt="ek_image" src="/images/trac__22.png" className={styles.trac__22} />
					<img alt="ek_image" src="/images/trac__23.png" className={styles.trac__23} />

				</div>
				<div className={styles.trash} >
					TRASH
				</div>

			</div>

			<div className={styles.groupe_29}  >
				<img alt="ek_image" src="/images/icon_metro_download.png" className={styles.icon_metro_download} />
				<div className={styles.import} >
					IMPORT
				</div>

			</div>

	 </div> );
}

export default Dashboard;