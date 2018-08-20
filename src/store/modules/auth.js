/**
 Created:  31/07/2018
 Author:   Daniel
 Description:
 -
 */

const state = {
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || ""
};

const mutations = {
  updateToken(state, token) {
    if (token !== "") {
      localStorage.setItem("token", token);
      state.token = token;
    }
  },
  removeToken(state) {
    state.token = "";
    localStorage.removeItem("token");
  }
};

const actions = {};

const getters = {
  getToken: () => {
    return state.token;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
