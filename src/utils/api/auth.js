/**
 Created:  31/07/2018
 Author:   Daniel
 Description:
 -
 */

import Axios from "axios";
import { URL } from "./commons";

/**
 * Authenticate the user and return a token
 * @param username
 * @param password
 * @returns {Promise<string>}
 */
export async function authenticateUser(username, password) {
  let token;
  const authData = {
    username,
    password
  };

  console.log(username, password);
  console.log(`${URL}/auth/authenticate`);
  try {
    token = await Axios.post(`${URL}/auth/authenticate`, authData);
  } catch (e) {
    console.error(e);
  }
  return token;
}
