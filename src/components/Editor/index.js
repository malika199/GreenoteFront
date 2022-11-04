import React from "react";
import style from "./editor.module.scss";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline, FaListUl, FaListOl } from "react-icons/fa";

import { FiAlignCenter, FiAlignRight, FiAlignLeft } from "react-icons/fi";

export default function Editor({ line, setLine }) {
  const styles = line?.styles || [];

  function onEditStyle(style) {
    if (styles.includes(style)) {
      const otherStyles = styles.filter((s) => s !== style);
      setLine({ ...line, styles: otherStyles });
    } else {
      setLine({ ...line, styles: [...styles, style] });
    }
  }
  return (
    <div className={style.newPost}>
      <div className={style.toolbar}>
        <button
          className={
            styles.includes("bold") ? style.buttonClicked : style.button
          }
          type="button"
          value="bold"
          onClick={(e) => onEditStyle(e.target.value)}
        >
          <FaBold />{" "}
        </button>
        <button
          className={
            styles.includes("italic") ? style.buttonClicked : style.button
          }
          type="button"
          value="italic"
          onClick={(e) => onEditStyle(e.target.value)}
        >
          <FaItalic />{" "}
        </button>
        <button
          className={
            styles.includes("underline") ? style.buttonClicked : style.button
          }
          type="button"
          value="underline"
          onClick={(e) => onEditStyle(e.target.value)}
        >
          <FaUnderline />{" "}
        </button>
        <button
          className={
            styles.includes("left") ? style.buttonClicked : style.button
          }
          type="button"
          value="left"
          onClick={(e) => onEditStyle(e.target.value)}
        >
          {" "}
          <FiAlignLeft />{" "}
        </button>
        <button
          className={
            styles.includes("center") ? style.buttonClicked : style.button
          }
          type="button"
          value="center"
          onClick={(e) => onEditStyle(e.target.value)}
        >
          {" "}
          <FiAlignCenter />
        </button>
        <button
          className={
            styles.includes("right") ? style.buttonClicked : style.button
          }
          type="button"
          value="right"
          onClick={(e) => onEditStyle(e.target.value)}
        >
          <FiAlignRight />
        </button>

        <div class={style.customSelect}>
          <select
            className={style.select}
            onClick={(e) => onEditStyle(e.target.value)}
          >
            <optgroup label="Serif Fonts">
              <option value="breeSerif">Bree Serif</option>
              <option value="georgia">Georgia</option>
              <option value="palatinoLinotype">Palatino Linotype</option>
              <option value="timesNewRoman">Times New Roman</option>
            </optgroup>
            <optgroup label="Sans Serif Fonts">
              <option value="arial">Arial</option>
              <option value="arialBlack">Arial Black</option>
              <option value="asap" selected>
                Asap
              </option>
              <option value="comicSansMs">Comic Sans MS</option>
              <option value="impact">Impact</option>
              <option value="lucidaSansUnicode">Lucida Sans Unicode</option>
              <option value="tahoma">Tahoma</option>
              <option value="trebuchet">Trebuchet MS</option>
              <option value="verdana">Verdana</option>
            </optgroup>
            <optgroup label="Monospace Fonts">
              <option value="courierNew">Courier New</option>
              <option value="lucidaConsole">Lucida Console</option>
            </optgroup>
          </select>
        </div>
        <div className={style.customSelect}>
          <select
            className={style.select}
            onClick={(e) => onEditStyle(e.target.value)}
          >
            <option value="heading1">Heading 1</option>
            <option value="heading2">Heading 2</option>
            <option value="heading3">Subtitle</option>
            <option value="p" selected>
              Paragraph
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
