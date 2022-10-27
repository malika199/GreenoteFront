import { APIURL } from "../../../pages/api/apiConstants";

const createNote = async (id) => {
  try {
    const response = await fetch(`${APIURL}/notes`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: { _id: id },
    });
    response.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteNote = async (id) => {
  try {
    const response = await fetch(`${APIURL}/notes`, {
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

const updateNote = async (Note) => {
  try {
    const response = await fetch(`${APIURL}/notes`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: Note,
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createNote, updateNote, deleteNote };
