import React, { useState } from "react";
import styles from "./createNote.module.scss";

import { useGetNotes } from "../../menu/useGetElements";
import { createLine } from "../Line/lineHelpers";
import { createNote } from "../Note/noteHelpers";
import TextArea from "../TextArea";

const Index = ({ setIsNoteDisplayed }) => {
  const [note, setNote] = useState({ lines: ["azeaze"] });

  return (
    <div className={styles.wrapper}>
      <form className={styles.paper} method="get" action="">
        <div className={styles.margin}>
          Title:{"  "}
          <input
            className={styles.title}
            type="text"
            name="title"
            placeholder="type a page title… "
            onChange={(e) => {
              setNote({ ...note, title: e.target.value });
            }}
          />
        </div>
        <TextArea note={note} setNote={setNote} />
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
