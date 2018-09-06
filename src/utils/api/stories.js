import { URL } from "./commons";
import Axios from "axios";

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
    stories.push(story);
  }
  return stories;
}
