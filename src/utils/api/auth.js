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
  const authData = {
    username,
    password
  };

  const response = await Axios.post(`${URL}/auth/authenticate`, authData);

  switch (response.status) {
    case 400:
      throw new Error("Username or password not provided");
    case 401:
      throw new Error("Incorrect username or password");
    case 500:
      throw new Error("Server error");
  }

  const token = await response.data.payload.token;
  store.commit("updateToken", token);
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

  const response = await Axios.post(`${URL}/auth/register`, userData);

  switch (response.status) {
    case 400:
      throw new Error("Username or password not provided");
    case 401:
      throw new Error("Incorrect username or password");
    case 500:
      throw new Error("Server error");
  }

  const token = response.data.payload.token;

  if (token) {
    store.state.auth.commit("auth/updateToken", token);
  }
}
