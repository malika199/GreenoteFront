const API = require("../../next.config");
const APIURL = API.env.NEXT_PUBLIC_API_URL;
export default {
    createNote(note) {
        return fetch(`${APIURL}/notes`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(note),
          }).then((res) => res.json())
    },
   
   
    getNote(token, id) {
      return fetch(`${APIURL}/notes/find/${id}`, {
          headers: {
              "authorization":token
          }
      })
      .then(res => res.json())
  },
 
 
  updateNote(token, user) {
    console.log(user)
      return fetch(`${APIURL}/notes/${user._id}`, {
          method: "PUT",
          headers: {
              "authorization": token,
              "content-type":"application/json",
              "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(user),
        
      })
      .then(res => res.json())
  },
  
  verifyToken(token) {
      return fetch(`${APIURL}/notes/verify`, {
          headers: {
              "authorization":token
          }
      })
      .then(res => res.json())
  },
}