const API = require("../../../next.config");
import { APIURL } from "../../pages/api/apiConstants";

const addFolder = async (path) => {
  try {
    const response = await fetch(`${APIURL}/folders`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New folder",
        path: path,
      }),
    });
    const res = await response.json();
  } catch (err) {
    console.log(err);
  }
};

const addNote = async (path) => {
  try {
    const response = await fetch(`${APIURL}/notes`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New note",
        path: path,
      }),
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { addFolder, addNote };
