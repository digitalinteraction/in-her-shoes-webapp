<template lang="pug">
    div#story-gallery
        div.container-fluid
            div.columns.has-text-centered.is-centered.image-container

                div.column.is-one-third(
                    v-for="story in stories"
                )
                    figure.image
                        img(
                            :src="story.imageUrl",
                            @error="imageURLAlt"
                        )
</template>

<script>
import { URL } from "../utils/api/commons";

export default {
  name: "StoryGallery",
  computed: {
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

      console.log(s.length);

      return s;
    }
  },
  methods: {
    imageURLAlt(event) {
      event.target.src =
        "https://images.unsplash.com/photo-1518685546285-85c2b201402b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=931f9b6519973a4fb773e1e55c208e16&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb";
    }
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  overflow-x: scroll;
}
</style>
