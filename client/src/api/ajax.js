// Encapsulating the axios that can be used to the whole project

import axios from "axios";
import storageUtils from "../utils/storageUtils";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    const token = storageUtils.getToken();
    let promise;
    // execute the ajax requests
    if (type === "GET") {
      // for get request
      promise = axios.get(url, 
      {
        params: data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      promise = axios.post(url, data, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // invoke resolve(value) if successes
    promise
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error.response);
      });
  });
}
