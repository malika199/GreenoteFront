import React, { useState } from "react";
import { useGetNotes } from "../../menu/useGetElements";
import styles from "./createNote.module.scss";
import { v4 as uuidv4 } from "uuid";

const createLine = async (id) => {
  try {
    const response = await fetch(`${APIURL}/lines`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: { _id: id },
    });
    response.json();
  } catch (err) {
    console.log(err);
  }
};
const updateLine = async (line) => {
  try {
    const response = await fetch(`${APIURL}/lines`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: line,
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

const Index = ({ setIsNoteDisplayed }) => {
  const [note, setNote] = useState(null);

  // uuid for line
  // create line
  const addLine = () => {
    const id = uuidv4();
    createLine(id);
    setNote({ ...note, lines: [...note?.lines, id] });
  };

  // edit note with line in it

  return (
    <div className={styles.wrapper}>
      <form className={styles.paper} method="get" action="">
        <div className={styles.margin}>
          Title:{" "}
          <input
            className={styles.title}
            type="text"
            name="title"
            onChange={(e) => {
              setNote({ ...note, title: e.target.value });
            }}
          />
        </div>
        <textarea
          placeholder="Ecrire une note."
          className={styles.text}
          name="text"
          rows="4"
          // onChange={(e) => {
          //   setNote({ ...note, email: e.target.value });
          // }}
          styles="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; "
        ></textarea>
        <br />
        <input className={styles.button} type="submit" value="Create" />
        <input
          className={styles.button}
          onClick={() => setIsNoteDisplayed(false)}
          type="submit"
          value="Cancel"
        />
      </form>
    </div>
  );
};

export default Index;
