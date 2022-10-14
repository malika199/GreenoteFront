import React, { useState } from "react";
import ElementsContainer from "./ElementsContainer";
import { BsArrowDownCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { addFolder, addNote } from "./menuHelpers";

export default function Element(element) {
  const name = element?.element?.title;
  const [isElementOpened, setIsElementOpened] = useState(false);
  return (
    <div onClick={() => setIsElementOpened(!isElementOpened)}>
      <h1>
        {isElementOpened ? <BsArrowDownCircleFill /> : <BsArrowRightCircle />}
        {name}
      </h1>

      {name !== "Bin" && name !== "Archives" && name !== "Draft" && (
        <>
          <h1 onClick={() => addNote(name)}> + note </h1>
          <h1 onClick={() => addFolder(name)}> + folder </h1>
        </>
      )}

      {isElementOpened && <ElementsContainer path={name} />}
    </div>
  );
}
