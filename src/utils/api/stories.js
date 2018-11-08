import { URL } from "./commons";
import Axios from "axios";
import store from "./../../store";

/**
 * Get all public stories from the API
 * @return {object[]}
 */
export async function getPublicStories() {
  const response = await Axios.get(`${URL}/story/public`);

  // Attach expenses to story
  const stories = [];
  const rawInfo = response.data.payload;

  for (let i = 0; i < rawInfo.length; i++) {
    let story = rawInfo[i].story;
    story.expenses = rawInfo[i].expense;
    story.positions = rawInfo[i].positions;
    stories.push(story);
  }
  return stories;
}

/**
 * Store a story
 * @param storyData
 * @returns {Promise<string>}
 */
export async function storeStory(storyData) {
  if (!store.getters.getToken) {
    throw new Error("Must be authenticated to store a story");
  }

  const response = await Axios.post(`${URL}/story/store`, storyData, {
    headers: { "x-access-token": store.getters.getToken }
  });

  if (response.status !== 200) {
    throw new Error("Network Error");
  }

  return response.data.payload;
}

/**
 * Store an expense
 * @param expenseData
 * @returns {Promise<*|default.computed.expenses|expenses>}
 */
export async function storeExpense(expenseData) {
  if (!store.getters.getToken) {
    throw new Error("Must be authenticated to store a story");
  }

  const response = await Axios.post(`${URL}/story/expense/store`, expenseData, {
    headers: { "x-access-token": store.getters.getToken }
  });

  if (response.status !== 200) {
    throw new Error("Network Error");
  }

  return response.data.payload;
}

/**
 * Get unpublished stories
 * @returns {Promise<Array>}
 */
export async function getUnpublished() {
  if (!store.getters.getToken) throw new Error("Must be authenticated");

  const response = await Axios.get(`${URL}/admin/unpublished`, {
    headers: { "x-access-token": store.getters.getToken }
  });

  if (response.status !== 200) throw new Error("Network Error");

  const stories = [];
  const rawInfo = response.data.payload;

  for (let i = 0; i < rawInfo.length; i++) {
    let story = rawInfo[i].story;
    story.expenses = rawInfo[i].expense;
    stories.push(story);
  }
  return stories;
}

/**
 * Get the user's stories
 * @return {story[]} User's stories
 */
export async function getUserStories() {
  if (!store.getters.getToken) throw new Error("Must be authenticated");

  const response = await Axios.get(`${URL}/story/get`, {
    headers: { "x-access-token": store.getters.getToken }
  });

  if (response.status !== 200) throw new Error("Network error");

  // Attach expenses to story
  const stories = [];
  const rawInfo = response.data.payload;

  for (let i = 0; i < rawInfo.length; i++) {
    let story = rawInfo[i].story;
    story.expenses = rawInfo[i].expense;
    story.positions = rawInfo[i].positions;
    stories.push(story);
  }

  return stories;
}

/**
 * Get a remote story by id
 * @param id
 * @returns {Promise<string>}
 */
export async function getRemoteStory(id) {
  const response = await Axios.get(`${URL}/story/get/${id}`);

  if (response.status !== 200) throw new Error("Network error");

  let item = response.data.payload.story;
  item.positions = response.data.payload.positions;
  item.expenses = response.data.payload.expenses;

  return item;
}

/**
 * Delete a story
 * @param id
 * @returns {Promise<void>}
 */
export async function deleteStory(id) {
  return await Axios.delete(`${URL}/story/destroy/${id}`, {
    headers: { "x-access-token": store.getters.getToken }
  });
}
