/**
 Created:  31/07/2018
 Author:   Daniel
 Description:
 -
 */

import Axios from "axios";
import { URL } from "./commons";
import store from "./../../store";

/**
 * Authenticate the user and return a token
 * @param username
 * @param password
 * @returns {Promise<string>}
 */
export async function authenticateUser(username, password) {
  let token = "";
  const authData = {
    username,
    password
  };

  try {
    const response = await Axios.post(`${URL}/auth/authenticate`, authData);
    const token = await response.data.payload.token;
    store.commit("updateToken", token);
  } catch (e) {
    console.error(e);
  }

  return token;
}

/**
 * Register a user and update the token
 * @param username
 * @param password
 * @returns {Promise<void>}
 */
export async function registerUser(username, password) {
  const userData = {
    username: username,
    password: password
  };

  console.log(userData);

  const response = await Axios.post(`${URL}/auth/register`, userData);
  const token = response.data.payload.token;

  if (token) {
    store.state.auth.commit("auth/updateToken", token);
  }
}
