import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { getLine, updateLine } from "../Line/lineHelpers";
import { v4 as uuidv4 } from "uuid";
import { createLine } from "../Line/lineHelpers";

const Index = ({ lineId, note, setNote }) => {
  const loadedLine = getLine(lineId);
  const [line, setLine] = useState(loadedLine || null);

  const [hasFocus, setHasFocus] = useState(false);

  // make width depend on content width
  // uuid for line
  // create line
  const addLine = () => {
    const id = uuidv4();
    createLine(id);
    setNote({ ...note, lines: [...note?.lines, id] });
  };
  const manageElement = (e) => {
    setHasFocus(false);

    if (e.code === "Space") {
      //create new element
      addLine();
      // eslint-disable-next-line
      console.log("## :", e);
      e.keycode = 9;
      // var keyboardEvent = document.createEvent("KeyboardEvent");
      // var initMethod =
      //   typeof keyboardEvent.initKeyboardEvent !== "undefined"
      //     ? "initKeyboardEvent"
      //     : "initKeyEvent";

      // keyboardEvent[initMethod](
      //   "keypress", // event type: keydown, keyup, keypress
      //   true, // bubbles
      //   true, // cancelable
      //   window, // view: should be window
      //   false, // ctrlKey
      //   false, // altKey
      //   false, // shiftKey
      //   false, // metaKey
      //   9, // keyCode: unsigned long - the virtual key code, else 0
      //   0 // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
      // );
      // document.dispatchEvent(keyboardEvent);

      //set focus on new element
      // new KeyboardEvent("keydown", { key: "Tab" });
      // new KeyboardEvent("keyup", { key: "Tab" });
    }
    if (e.key === "/") {
      setHasFocus(true);
    }
    // eslint-disable-next-line
    // console.log("## :", document.hasFocus());
    // edit element
    // setLine({ ...line, text: e.target.value });
    // updateLine(line);
  };

  const onChangeElement = () => {};
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
        onChange={(e) => onChangeElement(e)}
        onKeyPress={(e) => manageElement(e)}
      />
      {/* if focus render icon */}
      {hasFocus && <BsGrid3X3GapFill color="white" />}
    </div>
  );
};

export default Index;
