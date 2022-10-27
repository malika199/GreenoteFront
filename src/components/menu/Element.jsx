import React, { useState } from "react";
import ElementsContainer from "./ElementsContainer";
import { BsArrowDownCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { addFolder, deleteFolder } from "./menuHelpers";
import styles from "./menu.module.scss";
import { TiDelete } from "react-icons/ti";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

// import {  fa-folders } from '@fortawesome/free-solid-svg-icons'
export default function Element(element) {
  const name = element?.element?.title;
  const [isElementOpened, setIsElementOpened] = useState(false);  
  const [opened, setOpened] = useState(false);
  const [folder, setFolder] = useState("");

  const generateFolder = (e) => {
    if (e.code === "Enter") {
      addFolder(folder);
      setOpened(false)
      setIsElementOpened(true)
    }
  };

  return (
    <div>
      {/* { element.element.path === "root" ?  <div  className={styles.rectangle_principale} > : <div  className={styles.rectangle_secondaire} > }  */}

      <div
        className={
          element.element.path === "root"
            ? styles.rectangle_principale
            : styles.rectangle_secondaire
        }
      >
        <span onClick={() => setIsElementOpened(!isElementOpened)}>
          {isElementOpened ? (
            <i>
              <BsChevronDown />{" "}
            </i>
          ) : (
            <i>
              {" "}
              <BsChevronRight />
            </i>
          )}
          {name}
        </span>

        <div>
          {name !== "Bin" && name !== "Archives" && name !== "Draft" && (
            <>
              <i onClick={() => setOpened(true)}>
                <AiFillPlusCircle />
                {opened ? (
                  <input
                    onChange={(e) =>
                      setFolder({ title: e.target.value, path: name })
                    }
                    onKeyPress={(e) => {
                      generateFolder(e);
                    }}
                  />
                ) : (
                  <></>
                )}
              </i>
              <i onClick={() => deleteFolder(element?.element?._id)}>
                {"  "}
                <TiDelete />
              </i>
            </>
          )}
        </div>
      </div>

      {isElementOpened && <ElementsContainer path={name} />}
    </div>
  );
}
