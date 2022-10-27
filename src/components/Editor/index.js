import React from 'react'
import style from "./editor.module.scss";
import {FaBold} from "react-icons/fa";
import {FaItalic} from "react-icons/fa";
import {FaUnderline,FaListUl,FaListOl} from "react-icons/fa";

import {FiAlignCenter,FiAlignRight,FiAlignLeft} from "react-icons/fi";

export default function Editor() {
  return (

<div className={style.newPost}>
  
  
  <div className={style.toolbar}>
    <button className={style.button} type="button" ><FaBold /> </button>
    <button className={style.button}type="button" ><FaItalic /> </button>
    <button className={style.button} type="button" ><FaUnderline/> </button>
    <button className={style.button} type="button" > <FiAlignLeft/> </button>
    <button className={style.button} type="button" > <FiAlignCenter/></button>
    <button className={style.button} type="button" ><FiAlignRight/></button>
    <button className={style.button} type="button" ><FaListUl/></button>
    <button className={style.button} type="button" ><FaListOl/></button>
    <div class={style.customSelect}>
      <select className={style.select} >
        <optgroup label="Serif Fonts">
          <option value="Bree Serif">Bree Serif</option>
          <option value="Georgia">Georgia</option>
           <option value="Palatino Linotype">Palatino Linotype</option>
          <option value="Times New Roman">Times New Roman</option>
        </optgroup>
        <optgroup label="Sans Serif Fonts">
          <option value="Arial">Arial</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Asap" selected>Asap</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Impact">Impact</option>
          <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Verdana">Verdana</option>
        </optgroup>
        <optgroup label="Monospace Fonts">
          <option value="Courier New">Courier New</option>
          <option value="Lucida Console">Lucida Console</option>
        </optgroup>
      </select>
    </div>
    <div className={style.customSelect}>
      <select className={style.select} >
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h4">Subtitle</option>
        <option value="p" selected>Paragraph</option>
      </select>
    </div>
  </div>
  
  
</div>
  )
}
 