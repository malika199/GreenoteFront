import React, { useState } from "react";
import Logo from "../header/logo/Logo";
import Element from "./Element";
import ElementsContainer from "./ElementsContainer";
import { addFolder } from "./menuHelpers";

export default function MainMenu() {
  const [search, setSearch] = useState("");

  const logout = () => {
    localStorage.deleteItem("token");
    router.push("/login");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 onClick={() => addFolder("root")}> + Add </h1>
      <ElementsContainer path="root" search={search} />
      <Element
        element={{
          title: "Draft",
        }}
      />
      <Element
        element={{
          title: "Archives",
        }}
      />
      <Element
        element={{
          title: "Bin",
        }}
      />
      <h1 onClick={() => logout()}>Logout</h1>
      <Logo />
    </div>
  );
}
