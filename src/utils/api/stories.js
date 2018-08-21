import { URL } from "./commons";
import Axios from "axios";

/**
 * Get all public stories from the API
 * @return {object[]}
 */
export async function getPublicStories() {
  const response = await Axios.get(`${URL}/story/public`);
  const stories = response.data.payload;
  return stories;
}
