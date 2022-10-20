import React from "react";
// import styles from "./style.module.scss";
// import Home from "@material-ui/icons/Home";

const Index = () => {
  return (
    <div>
      <p>Greenote</p>
      <input type={"text"} placeholder={"Search"} />
      <input type={"button"} value={"New"} />
      <input type={"button"} value={"Home"} />
      <input type={"button"} value={"Shared with me"} />
      <input type={"button"} value={"Log out"} />
    </div>
  );
};

export default Index;
