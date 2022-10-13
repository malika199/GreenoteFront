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
   
   
    
}