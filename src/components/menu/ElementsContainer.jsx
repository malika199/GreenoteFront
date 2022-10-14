import React from "react";
import Element from "./Element";
import useGetElements from "./useGetElements";

export default function ElementsContainer(props) {
  const elements = useGetElements(props);
  return elements.map((el, i) => <Element element={el} key={i} />);
}
