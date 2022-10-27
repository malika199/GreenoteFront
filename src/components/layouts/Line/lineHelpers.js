import { APIURL } from "../../../pages/api/apiConstants";

const getLine = async ({ lineId }) => {
  try {
    const response = await fetch(`${APIURL}/lines/find/${lineId}`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

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
    const response = await fetch(`${APIURL}/lines/${line._id}`, {
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

export { getLine, createLine, updateLine, deleteLine };
