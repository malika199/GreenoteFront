import React, { useEffect, useState } from "react";
import styles from "./Accueil.module.scss";
import CreateNote from "../CreateNote";
import jwt from "jwt-decode";
import authService from "../../../services/auth.service";

const Index = () => {
  const [isNoteDisplayed, setIsNoteDisplayed] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt(token);
    const userId = decodedToken.id;

    authService
      .getUser(token, userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.form__group}>
      <h1 className={styles.text}>Bonjour @{user.username}</h1>
      <div className={styles.wrapper}>
        <h1>NOTES</h1>
        <input
          className={styles.btnnote}
          type={"button"}
          onClick={() => setIsNoteDisplayed(true)}
        />
      </div>
      {isNoteDisplayed && (
        <CreateNote setIsNoteDisplayed={setIsNoteDisplayed} />
      )}
    </div>
  );
};

export default Index;
