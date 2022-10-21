import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./createNote.module.scss";

import { useGetNotes } from "../../menu/useGetElements";
import { createLine } from "../Line/lineHelpers";
import { createNote } from "../Note/noteHelpers";

import Line from "../Line";

const Index = ({ setIsNoteDisplayed }) => {
  const [note, setNote] = useState({ lines: ["azeaze"] });

  // uuid for line
  // create line
  const addLine = () => {
    const id = uuidv4();
    createLine(id);
    setNote({ ...note, lines: [...note?.lines, id] });
  };

  const lines = note?.lines;

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
        {lines.map((lineId, i) => (
          <Line lineId={lineId} key={i} />
        ))}
        {/* <textarea
          placeholder="Ecrire une note."
          className={styles.text}
          name="text"
          rows="4"
          // onChange={(e) => {
          //   setNote({ ...note, email: e.target.value });
          // }}
          styles="overflow: hidden; word-wrap: break-word; resize: none; height: 160px; "
        ></textarea> */}
        {/* <br /> */}
        <input
          className={styles.button}
          onClick={() => createNote(note)}
          type="submit"
          value="Create"
        />
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
