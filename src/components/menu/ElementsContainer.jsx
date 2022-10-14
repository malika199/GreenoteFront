import React from "react";
import Element from "./Element";

export default function ElementsContainer() {
  const elements = [];
  return elements.map((el, i) => <Element element={el} key={i} />);
}
