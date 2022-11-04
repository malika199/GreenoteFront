const API = require("../../next.config");
const APIURL = API.env.NEXT_PUBLIC_API_URL;
export default {
    register(user) {
        return fetch(`${APIURL}/auth/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
     return fetch(`${APIURL}/auth/login`, {

            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
   
   
    getUser(token, id) {
      return fetch(`${APIURL}/users/find/${id}`, {
          headers: {
              "authorization":token
          }
      })
      .then(res => res.json())
  },
 
 
  updateUser(token, user) {
    console.log(user)
      return fetch(`${APIURL}/users/${user._id}`, {
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
      return fetch(`${APIURL}/auth/verify`, {
          headers: {
              "authorization":token
          }
      })
      .then(res => res.json())
  },
}