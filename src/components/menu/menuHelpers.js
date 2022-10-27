const API = require("../../../next.config");
import { APIURL } from "../../pages/api/apiConstants";

const addFolder = async (folder) => {
  try {
    const response = await fetch(`${APIURL}/folders`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: folder
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



const deleteFolder = async (id) => {
  try {
    const response = await fetch(`${APIURL}/folders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    response.json();
  } catch (err) {
    console.log(err);
  }
};

export { addFolder, addNote, deleteFolder };
