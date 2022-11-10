import { APIURL } from "../../../pages/api/apiConstants";

const getNotes = async () => {
  try {
    const response = await fetch(`${APIURL}/notes`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    const res = await response.json();
    return res
  } catch (err) {
    console.log(err);
  }
};

const createNote = async (id) => {
  try {
    const response = await fetch(`${APIURL}/notes`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: { _id: id },
    });
    await response.json();
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
    await response.json();
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

export { createNote, updateNote, deleteNote, getNotes };
