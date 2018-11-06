<template lang="pug">
  div#user-stories
    div.container.is-fluid
      div.columns
        div.column.is-one-quarter(
          v-if="stories.length > 0"
          )
          button#new-story-button.button.is-fullwidth.is-rounded.is-medium.is-outlined(
            @click="toggleNewStoryView",
            :class="{'is-primary': !addingStory}"
          ) {{ buttonText }}
          h4.is-size-4 Your Stories
          ul
            li.story-item(
              v-for="(story, idx) in stories",
              @click="updateSelected(idx)"
            )
              p {{getDate(story.createdAt)}}
                span.tag.is-success.is-rounded(
                  v-if="story.isPublished"
                  ) Published
                span.tag.is-warning.is-rounded(
                  v-else
                  ) Under Review

        div.column
          div.container.is-fluid(
            v-if="stories.length > 0"
            )
            Story(
              v-bind:story="stories[selectedStory]",
              v-if="!addingStory"
            )
            NewStory(
              v-else
            )
          div.container.is-fluid(
            v-else
            )
            h1.title Add a Story
            p You haven't shared your story. Fill out the form below to post yours.
            NewStory
</template>

<script>
import Story from "@/components/story/Story.vue";
import NewStory from "@/components/story/NewStory.vue";
import { getUserStories } from "../utils/api/stories";
import * as moment from "moment";
export default {
  name: "UserStories",
  components: {
    Story,
    NewStory
  },
  data: function() {
    return {
      /**
       * Index of the selected story, default at 0
       * @type {number}
       */
      selectedStory: 0,
      addingStory: false,
      buttonText: "New Story"
    };
  },
  computed: {
    stories: function() {
      return this.$store.getters.getUserStories;
    }
  },
  methods: {
    /**
     * Update view to the selected story.
     * @param  {number} idx Index of story
     * @return {void}     void
     */
    updateSelected: function(idx) {
      this.selectedStory = idx;
    },
    toggleNewStoryView: function() {
      this.addingStory = !this.addingStory;
      this.buttonText = this.addingStory ? "Cancel" : "New Story";
    },
    /**
     * Return a formatted date string.
     * @param date
     * @returns {string}
     */
    getDate: function(date) {
      console.log(date);
      return moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("MMMM Do, YYYY");
    }
  },
  mounted: async function() {
    let stories;

    try {
      stories = await getUserStories();
      this.$store.commit("updateUserStories", stories);
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style lang="scss" scoped>
#stories {
  margin-bottom: 2.5%;
}

.story-item {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5%;
  transition: all 0.1s ease;
}

.story-item:hover {
  background: hsl(171, 100%, 41%);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

#new-story-button {
  margin-top: 2.5%;
  margin-bottom: 5%;
}

h4 {
  margin-bottom: 2.5%;
}

.tag {
  float: right;
}
</style>
