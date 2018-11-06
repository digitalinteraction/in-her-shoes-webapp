<template lang="pug">
    div#story-gallery
        h2.is-size-2.has-text-centered Stories
        div.container-fluid
            div
                a(
                    v-for="story in stories",
                    :href="getStoryLink(story._id)"
                )
                    figure.image
                        img(
                            :src="story.imageUrl",
                            @error="imageURLAlt"
                        )
            div
                p.has-text-right(
                    @click="allStories"
                )
                    span.see-all See all
</template>

<script>
import { URL } from "../utils/api/commons";

export default {
  name: "StoryGallery",
  computed: {
    /**
     * Return stories for the story gallery.
     * Takes the first 9 stories, or the total if there less than 9 stories.
     * Constructs an image url and appends it to the story object.
     */
    stories: function() {
      let s = [];
      let maxImages = 12;
      if (this.$store.getters.getStories.length < maxImages) {
        s = this.$store.getters.getStories;
      } else {
        s = this.$store.getters.getStories.slice(0, maxImages + 1);
      }

      for (let i = 0; i < s.length; i++) {
        s[i].imageUrl = `${URL}/media/story/${s[i]._id}`;
      }

      return s;
    }
  },
  methods: {
    /**
     * Handle image links returning a 404 by showing a stock image
     * TODO: update this to a static image rather than a third party.
     * @param event
     */
    imageURLAlt(event) {
      event.target.src = require("../assets/shoes-placeholder.png");
    },
    /**
     * Link to all stories
     */
    allStories() {
      this.$router.push("stories");
    },
    getStoryLink(id) {
      return `/story/${id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  overflow-x: scroll;
}

.is-size-2 {
  margin-bottom: 2.5%;
  margin-top: 2.5%;
  position: relative;
  line-height: 1.2em;
}
.is-size-2:after {
  height: 0;
  width: 50px;
  top: 1.2em;
  left: 48%;
  border-top: 2px solid #ed9913;
  content: "";
  position: absolute;
  margin-top: 1.1%;
}
figure {
  cursor: pointer;
}
.see-all {
  margin-right: 5%;
}

.see-all:hover {
  color: #ed9913;
  cursor: pointer;
  text-decoration: underline;
}

a {
  font-size: 16px;
  display: inline-block;
  margin-bottom: 8px;
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
