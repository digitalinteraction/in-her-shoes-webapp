<template lang="pug">
    div#story-gallery
        h2.is-size-2.has-text-centered Stories
        div.container-fluid
            div.columns.has-text-centered.is-centered.image-container
                div.column.is-one-third(
                    v-for="story in stories"
                )
                    figure.image(
                    @click="linkToStory(story)"
                    )
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
      if (this.$store.getters.getStories.length < 9) {
        s = this.$store.getters.getStories;
      } else {
        s = this.$store.getters.getStories.slice(0, 9 + 1);
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
      event.target.src =
        "https://images.unsplash.com/photo-1518685546285-85c2b201402b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=931f9b6519973a4fb773e1e55c208e16&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb";
    },
    /**
     * Link to a specific story
     * @param story
     */
    linkToStory(story) {
      this.$router.push({ path: `/story/${story._id}` });
    },
    /**
     * Link to all stories
     */
    allStories() {
      this.$router.push("stories");
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
</style>
