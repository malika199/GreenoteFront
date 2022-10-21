import React, { useState } from "react";
import styles from "./Accueil.module.scss";
import CreateNote from "../CreateNote";

const Index = () => {
  const [isNoteDisplayed, setIsNoteDisplayed] = useState(false);

  return (
    <div className={styles.form__group}>
      <h1 className={styles.text}>Bonjour</h1>
      <div className={styles.wrapper}>
        <h1>NOTES</h1>
        <input
          className={styles.btnnote}
          type={"button"}
          onClick={() => setIsNoteDisplayed(true)}
          value={"Creer une note"}
        />
      </div>
      {isNoteDisplayed && (
        <CreateNote setIsNoteDisplayed={setIsNoteDisplayed} />
      )}
    </div>
  );
};

export default Index;
