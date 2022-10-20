const API = require("../../next.config");
const APIURL = API.env.NEXT_PUBLIC_API_URL;
export default {
    update(user) {
        return fetch(`${APIURL}/users/:id`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
        }
    }