/**
 Created:  31/07/2018
 Author:   Daniel
 Description:
 -
 */

const state = {
  stories: [],
  userStories: []
};

const mutations = {
  /**
   * Overwrite all stories
   * @param  {object} state   Current state of the store
   * @param  {object[]} stories Array of stories
   * @return {void}
   */
  updateStories(state, stories) {
    if (stories) {
      state.stories = stories;
    }
  },
  updateUserStories(state, stories) {
    if (stories) {
      state.userStories = stories;
    }
  },
  /**
   * Add to the users stories
   * @param state
   * @param story
   */
  addUserStory(state, story) {
    state.userStories.push(story);
  },
  /**
   * Remove a story from the store
   * @param  {object[]} state Current state of the store
   * @param id
   * @return {void}
   */
  removeUserStory(state, id) {
    let index = -1;
    state.userStories.forEach((userStory, idx) => {
      if (userStory._id === id) {
        index = idx;
      }
    });

    if (index >= 0) {
      state.userStories.splice(index, 1);
    }
  }
};

const actions = {};

const getters = {
  /**
   * Get all stories
   * @return {object[]} An array of stories
   */
  getStories: () => {
    return state.stories;
  },
  getUserStories: () => {
    return state.userStories;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
