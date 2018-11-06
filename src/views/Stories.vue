<template lang="pug">
    div#stories
        div.container
            h1.is-size-1 All Stories
            a(
                v-for="story in stories",
                :href="getStoryLink(story._id)"
            )
                figure.image
                    img(
                        :src="story.imageUrl",
                        @error="imageURLAlt"
                    )
</template>

<script>
import { getPublicStories } from "../utils/api/stories";

export default {
  name: "Stories",
  data: function() {
    return {
      stories: []
    };
  },
  methods: {
    /**
     * Handle image 404
     * @param event
     */
    imageURLAlt(event) {
      event.target.src = require("../assets/shoes-placeholder.png");
    },
    /**
     * Get a link to a story
     * @param id
     * @returns {string}
     */
    getStoryLink(id) {
      return `/story/${id}`;
    }
  },
  async mounted() {
    let stories = [];
    try {
      stories = await getPublicStories();
      console.log(this.stories[0]);
    } catch (e) {
      console.error(e);
    }

    for (let i = 0; i < stories.length; i++) {
      stories[i].imageUrl = `${URL}/media/story/${stories[i]._id}`;
    }

    this.stories = stories;
  }
};
</script>

<style scoped lang="scss">
div {
  font-size: 0;
}

figure:hover {
  cursor: pointer;
}

a {
  font-size: 16px;
  display: inline-block;
  margin-bottom: 8px;
  /*width: calc(50% - 4px);*/
  width: 100%;
  margin-right: 8px;
}

a:nth-of-type(2n) {
  margin-right: 0;
}

@media screen and (min-width: 50em) {
  a {
    width: calc(25% - 6px);
  }

  a:nth-of-type(2n) {
    margin-right: 6px;
  }

  a:nth-of-type(4n) {
    margin-right: 0;
  }
}
</style>
