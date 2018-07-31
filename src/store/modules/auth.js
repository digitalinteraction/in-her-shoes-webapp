/**
 Created:  31/07/2018
 Author:   Daniel
 Description:
 -
 */

const state = {
  isLoggedIn: !!localStorage.getItem("token")
};

const mutations = {
  updateToken(state, token) {
    if (token !== "") localStorage.setItem("token", token);
  }
};

const actions = {};

const getters = {
  getToken: () => {
    return localStorage.getItem("token");
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
