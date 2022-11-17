import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "Quels changements verrai-je après avoir rejoint le compte Greenote Teams ?",
      answer: "L'application Greennote reste la même, à quelques différences près Vous pourrez créer des espaces - Vous pourrez accéder au Répertoire du compte - Les limites de votre compte seront mises à jour",
    },
    {
      id: 2,
      question: "Quels changements verrai-je après avoir rejoint le compte Greenote Teams ?",
      answer:
        "L'application Greennote reste la même, à quelques différences près Vous pourrez créer des espaces - Vous pourrez accéder au Répertoire du compte - Les limites de votre compte seront mises à jour",
    },
    {
      id: 3,
      question: "Quels changements verrai-je après avoir rejoint le compte Greenote Teams ?",
      answer:
        " L'application Greennote reste la même, à quelques différences près Vous pourrez créer des espaces - Vous pourrez accéder au Répertoire du compte - Les limites de votre compte seront mises à jour",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      {data.map((data) => {
        return (
          <AccordionUI
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;
