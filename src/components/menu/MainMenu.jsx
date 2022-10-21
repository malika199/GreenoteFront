import React, { useState } from "react";
import Logo from "../header/logo/Logo";
import Element from "./Element";
import ElementsContainer from "./ElementsContainer";
import { addFolder } from "./menuHelpers";
import { useRouter } from "next/router";
import styles from "./menu.module.scss";
import { BsPlusCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
export default function MainMenu() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.menu}>
      <div className={styles.Rectangle}>
        <div className={styles.rectangle_header}>
          <div className={styles.greennote_team}>
            <img
              alt="ek_image"
              src="/images/ellipse_7.png"
              className={styles.ellipse_7}
            />
            <span className={styles.span_G}> GREENNOTE TEAM </span>
          </div>

          <div className={styles.icon_setting}>
            <IoMdSettings />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.search_input}>
            <div className={styles.icon}>
              <BiSearch />
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="Recherche ..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className={styles.autocom_box}></div>
          </div>
        </div>
        {/* <BsSearch/> */}

        <div className={styles.add} onClick={() => addFolder("root")}>
          <div className={styles.icon_add}>
            <BsPlusCircle />
          </div>
          <div className={styles.new}> New</div>
        </div>
        <ElementsContainer path="root" search={search} />
        <Element
          element={{
            title: "Draft",
          }}
        />
        <Element
          element={{
            title: "Archives",
          }}
        />
        <Element
          element={{
            title: "Bin",
          }}
        />
        <div className={styles.logout} onClick={() => logout()}>
          <i>
            <CgLogOut />{" "}
          </i>{" "}
          <span> Logout</span>
        </div>
        <Logo />
      </div>
    </div>
  );
}
