/**
 Created:  07/11/2018
 Author:   Daniel
 Description:
 -
 */

import { URL } from "./commons";
import Axios from "axios";
import store from "./../../store";

export async function uploadPicture(file, storyId) {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "x-access-token": store.getters.getToken,
      storyId: storyId
    }
  };

  return await Axios.post(`${URL}/media/upload`, formData, config);
}
