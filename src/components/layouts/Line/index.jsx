import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { getLine, updateLine } from "../Line/lineHelpers";
import { v4 as uuidv4 } from "uuid";
import { createLine } from "../Line/lineHelpers";
import Editor from "../../Editor";

const Index = ({ lineId, note, setNote, index }) => {
  const [line, setLine] = useState(null);

  const [newLineId, setNewLineId] = useState(null);

  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setLine(getLine(lineId));
  }, []);

  // make width depend on content width
  // uuid for line
  // create line
  const addLine = () => {
    setNewLineId(uuidv4());
    createLine(newLineId);
    setNote({ ...note, lines: [...note?.lines, newLineId] });
  };
  const manageElement = (e) => {
    setHasFocus(false);

    if (e.code === "Space") {
      //create new element
      addLine();
      // set focus on created element 
      setTimeout(() => {
        const form = e.target.form;
        const index = [...form].indexOf(e.target);
        console.log(index);
        form[index + 1].focus();
        e.preventDefault();
      }, 100);
    }

    if (e.key === "/") {
      setHasFocus(true);
    }
  };

  const onChangeElement = (e) => {
    setLine({ ...line, text: e.target.value });
  };
  return (
    <div className={styles.new}>
      <input
        value={line?.text}
        type="text"
        size="1"
        id={index}
        className={styles.text3}
        placeholder="Type..."
        role="textbox"
        onChange={(e) => onChangeElement(e)}
        onKeyPress={(e) => manageElement(e)}
      />
      {/* if focus render icon */}
      {hasFocus && <Editor />}
    </div>
  );
};

export default Index;
