import React from "react";
import styles from "./textArea.module.scss";
import Line from "../Line";
import { v4 as uuidv4 } from "uuid";

function Index({ note, setNote }) {

  const lines = note?.lines;

  //edit lines
  return (
    <div className={styles.container}>
      {lines.map((lineId, i) => (
          <Line lineId={lineId} setNote={setNote} key={i} />
        ))}
    </div>
  );
}

export default Index;
