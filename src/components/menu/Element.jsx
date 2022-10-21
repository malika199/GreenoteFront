import React, { useState } from "react";
import ElementsContainer from "./ElementsContainer";
import { BsArrowDownCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { addFolder, addNote } from "./menuHelpers";
import styles from "./menu.module.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

// import {  fa-folders } from '@fortawesome/free-solid-svg-icons'
export default function Element(element) {
  const name = element?.element?.title;
  const [isElementOpened, setIsElementOpened] = useState(false);
  return (
    <div onClick={() => setIsElementOpened(!isElementOpened)}>
       {/* { element.element.path === "root" ?  <div  className={styles.rectangle_principale} > : <div  className={styles.rectangle_secondaire} > }  */}

      <div className={ element.element.path === "root" ?  styles.rectangle_principale : styles.rectangle_secondaire }>
        <span>
          {isElementOpened ? (
            <i>
              {" "}
              <BsChevronDown />{" "}
            </i>
          ) : (
            <i>
              {" "}
              <BsChevronRight />{" "}
            </i>
          )}
          {name}
        </span>

        <div>
          {name !== "Bin" && name !== "Archives" && name !== "Draft" && (
            <>
              <i onClick={() => addNote(name)}>
                {" "}
                <AiFillPlusCircle />{" "}
              </i>
              <i onClick={() => addFolder(name)}>
                {" "}
                <FiMoreHorizontal />{" "}
              </i>
            </>
          )}
        </div>
      </div>

      {isElementOpened && <ElementsContainer path={name} />}
    </div>
  );
}
