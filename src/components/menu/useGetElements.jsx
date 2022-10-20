import React, { useCallback, useEffect, useState } from "react";
const API = require("../../../next.config");

const APIURL = API.env.NEXT_PUBLIC_API_URL;

export default function useGetElements({ path, search }) {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);

  const getFolders = useCallback(async () => {
    try {
      const response = await fetch(`${APIURL}/folders`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const res = await response.json();
      setFolders(res?.filter((el) => el.path === path));
    } catch (err) {
      console.log(err);
    }
  }, [path]);

  const getNotes = useCallback(async () => {
    try {
      const response = await fetch(`${APIURL}/notes`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const res = await response.json();
      setNotes(res?.filter((el) => el.path === path));
    } catch (err) {
      console.log(err);
    }
  }, [path]);

  useEffect(() => {
    getFolders();
    getNotes();
  }, [getFolders, getNotes]);

  let elements = [...folders, ...notes];

  if (search?.length > 0) {
    elements = elements.filter((el) => el?.title?.includes(search));
  }

  return elements;
}
