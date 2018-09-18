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
 * Post a story
 * @param storyData
 * @returns {Promise<void>}
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
}
