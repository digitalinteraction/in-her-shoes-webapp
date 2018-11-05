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
   * Add a story to the store
   * @param {object} state Current state of the store
   * @param {object} story Story to add
   */
  addStory(state, story) {
    state.stories.push(story);
  },
  /**
   * Remove a story from the store
   * @param  {object[]} state Current state of the store
   * @param  {[type]} story Story to remove
   * @return {void}
   */
  removeStory(state, story) {
    let index = -1;
    state.stories.forEach((userStory, idx) => {
      if (userStory._id === story._id) {
        index = idx;
      }
    });

    if (index >= 0) {
      state.stories.splice(index, 1);
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
  /**
   * Get story by id
   * @param  {string} id Id of story
   * @return {object?}    A single story
   */
  getStory: id => {
    let found = false;
    state.stories.forEach(story => {
      if (id === story._id) {
        return story;
      }
    });

    if (!found) return null;
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
