import React, { useCallback, useEffect, useState } from "react";
import { APIURL } from "../../pages/api/apiConstants";

  const getNotes = async () => {
    try {
      const response = await fetch(`${APIURL}/notes`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const res = await response.json();
      return res?.filter((el) => el.path === path);
    } catch (err) {
      console.log(err);
    }
  }



  const getFolders = async ({path}) => {
    try {
      const response = await fetch(`${APIURL}/folders`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const res = await response.json();
      return res
     // return res?.filter((el) => el.path === path);
    } catch (err) {
      console.log(err);
    }
  };


function useGetElements({ path, search }) {
  const folders = getFolders(path) || [];
  const notes = getNotes(path) || [];

  useEffect(() => {
    const notes = getNotes(path);
    const folders = getFolders(path);

  }, []);

  
  const elements = []

  return elements;
}

export default useGetElements;
export { getFolders, getNotes };
