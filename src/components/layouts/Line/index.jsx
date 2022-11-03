import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { getLine, updateLine } from "../Line/lineHelpers";
import { v4 as uuidv4 } from "uuid";
import { createLine } from "../Line/lineHelpers";
import Editor from "../../Editor";

const Index = ({ lineId, note, setNote, index }) => {
  const [line, setLine] = useState(null);
  const [size, setSize] = useState(2);

  const [newLineId, setNewLineId] = useState(null);

  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setLine(getLine(lineId));
  }, []);

  // make width depend on content width
  // uuid for line
  // create line
  function addLine() {
    setNewLineId(uuidv4());
    createLine(newLineId);
    setNote({ ...note, lines: [...note?.lines, newLineId] });
  }

  function manageElement(e) {
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
  }

  function onChangeElement(e) {
    setLine({ ...line, text: e.target.value });
    setSize(e.target.value.length * 0.99999999999);
  }

  // concat all styles of each line
  const stylesOfLine = line?.styles || [];
  let className = "";
  for (const style of stylesOfLine) {
    className += styles?.[style] + "\n";
  }

  return (
    <div className={className}>
      <div className={styles.new}>
        <input
          value={line?.text}
          type="text"
          size={size}
          id={index}
          className={styles.text3}
          placeholder=""
          role="textarea"
          onChange={(e) => onChangeElement(e)}
          onKeyPress={(e) => manageElement(e)}
        />
        {/* if focus render icon */}
        {hasFocus && <Editor line={line} setLine={setLine} />}
      </div>
    </div>
  );
};

export default Index;
