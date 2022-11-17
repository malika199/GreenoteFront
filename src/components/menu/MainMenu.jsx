import React, { useEffect, useState } from "react";

import Element from "./Element";
import ElementsContainer from "./ElementsContainer";
import { addFolder } from "./menuHelpers";
import { useRouter } from "next/router";
import styles from "./menu.module.scss";
import { BsPlusCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import Logoblanc from "../header/Logoblanc/Logoblanc";
import authService from "../../services/auth.service";
import jwt from "jwt-decode";

export default function MainMenu() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt(token);
    const userId = decodedToken.id;
    // const notesFromServ = getNotes();
    // if (notesFromServ) {
    //   // setNotes(notesFromServ);
    // }

    authService
      .getUser(token, userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.Rectangle}>
        <div className={styles.rectangle_header}>
          <div className={styles.greennote_team}>
            <div className={styles.c_avatar}>
              <img
                alt="ek_image"
                className={styles.img}
                src={(user && user.profilPecture) || ""}
              />
              <span className={styles.c_avatar_status}></span>
            </div>
            <span className={styles.span_G}> {user.username} </span>
          </div>

          <div className={styles.icon_setting}>
            <a href={"/profil"}>
              {" "}
              <IoMdSettings />{" "}
            </a>
          </div>
        </div>

        <div className={styles.wrapper}>
          <a href={"/acceuil"}>
            <button value={"Acceuil"} className={styles.acceuilbtn}>
              <IoIosHome />
              Acceuil
            </button>
          </a>
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

        <div className={styles.elll}>
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
       
       </div>

        <div className={styles.logout} onClick={() => logout()}>
          <i>
            <CgLogOut />{" "}
          </i>{" "}
          <span> Logout</span>
        </div>
        <Logoblanc />
      </div>
    </div>
  );
}
