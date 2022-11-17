import React, { useEffect, useState } from "react";
import styles from "./Accueil.module.scss";
import CreateNote from "../CreateNote";
import jwt from "jwt-decode";
import authService from "../../../services/auth.service";
import { getNotes } from "../Note/noteHelpers";
import axios from "axios";
import { APIURL } from "../../../pages/api/apiConstants";

const Index = () => {
  const [isNoteDisplayed, setIsNoteDisplayed] = useState(false);
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt(token);
    const userId = decodedToken.id;
    const notesFromServ = getNotes();
    if (notesFromServ) {
      // setNotes(notesFromServ);
    }
    authService
      .getUser(token, userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axios.get(`${APIURL}/notes`, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNotes();
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
        <div className={styles.notesnontainer}>
          {notes.map((note, i) => (
                  <div key={i}>
                    <input
                        className={styles.textnote}
                        type="button"
                        value={
                                note?.title +
                                "\n\n" +
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not o"
                        }
                    />
                  </div>
          ))}
        </div>
      </div>
      {isNoteDisplayed && (
              <CreateNote setIsNoteDisplayed={setIsNoteDisplayed} />
      )}
    </div>
  );
};

export default Index;