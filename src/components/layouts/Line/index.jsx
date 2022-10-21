import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { getLine, updateLine } from "../Line/lineHelpers";
import useInterval from "./useInterval";

const Index = ({ lineId }) => {
  const loadedLine = getLine(lineId);
  const [line, setLine] = useState(loadedLine || null);

  const [hasFocus, setHasFocus] = useState(false);
  // setInterval(checkPageFocus, 300);
  useInterval(() => {
    // Your custom logic here
    checkPageFocus();
  }, 300);
  const checkPageFocus = () => {
    const input = document.getElementById("input");
    // eslint-disable-next-line
    console.log('## input:', input)
    // setHasFocus(input.hasFocus());
  };
  // eslint-disable-next-line
  console.log("## document:", document);

  // make width depend on content width
  // uuid for line
  // create line
  const addLine = () => {
    const id = uuidv4();
    createLine(id);
    setNote({ ...note, lines: [...note?.lines, id] });
  };
  const manageElement = (e) => {
    if (e.code === "Space") {
      //create new element
      addLine();
      //set focus on new element
    }
    // eslint-disable-next-line
    // console.log("## :", document.hasFocus());
    // edit element
    // setLine({ ...line, text: e.target.value });
    // updateLine(line);
  };
  return (
    <div className={styles.new}>
      <input
        value={line.text}
        id="input"
        type="text"
        size="1"
        className={styles.text3}
        placeholder="Type..."
        role="textbox"
        onKeyPress={(e) => manageElement(e)}
      />
      {/* if focus render icon */}
      {hasFocus && <BsGrid3X3GapFill color="white" />}
    </div>
  );
};

export default Index;
