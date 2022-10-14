import React from "react";
import Logo from "../header/logo/Logo";
import ElementsContainer from "./ElementsContainer";

export default function MainMenu() {
  return (
    <div>
      <h1>menu</h1>
      <h1>search</h1>
      <h1>Add </h1>
      <ElementsContainer />
      <h1>logout</h1>
      <Logo />
    </div>
  );
}
