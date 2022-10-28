import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { getLine, updateLine } from "../Line/lineHelpers";
import { v4 as uuidv4 } from "uuid";
import { createLine } from "../Line/lineHelpers";
import Editor from "../../Editor";

const Index = ({ lineId, note, setNote }) => {
  const [line, setLine] = useState(null);

  const [newLineId, setNewLineId] = useState(null);

  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setLine(getLine(lineId));
    if (document) {
      document?.getElementById(lineId)?.focus();
      // eslint-disable-next-line
      // console.log("## :", el);
    }
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
      // eslint-disable-next-line
      // console.log("## :", e);
      // if (document) {
      //   const el = document.getElementById(newLineId);
      //   // eslint-disable-next-line
      //   console.log("## :", el);
      // }
      // document.getElementById(newLineId).focus();
    }

    // e.keycode = 9;
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

    if (e.key === "/") {
      setHasFocus(true);
    }
    // eslint-disable-next-line
    // console.log("## :", document.hasFocus());
    // edit element
    // setLine({ ...line, text: e.target.value });
    // updateLine(line);
  };

  const onChangeElement = (e) => {
    // setLine({ ...line, text: e.target.value });
  };
  return (
    <div className={styles.new}>
      <input
        value={line?.text}
        type="text"
        size="65"
        // id={lineId}
        id={line}
        className={styles.text3}
        placeholder="Type..." 
        role="textarea"
        onChange={(e) => onChangeElement(e)}
        onKeyPress={(e) => manageElement(e)}
      />
      {/* if focus render icon */}
      {hasFocus && <Editor />}
    </div>
  );
};

export default Index;
