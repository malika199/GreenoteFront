import { APIURL } from "../../../pages/api/apiConstants";

const createLine = async (id) => {
  try {
    const response = await fetch(`${APIURL}/lines`, {
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

const deleteLine = async (id) => {
  try {
    const response = await fetch(`${APIURL}/lines`, {
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

const updateLine = async (line) => {
  try {
    const response = await fetch(`${APIURL}/lines`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: line,
    });
    await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createLine, updateLine, deleteLine };
