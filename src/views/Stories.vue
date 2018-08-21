<template lang="pug">
  div#stories
    div.container
      div.columns
        div.column.is-one-quarter
          button#new-story-button.button.is-fullwidth.is-rounded.is-medium.is-outlined(
            @click="toggleNewStoryView",
            :class="{'is-primary': !addingStory}"
          ) {{ buttonText }}
          ul
            li.story-item(
              v-for="(story, idx) in stories",
              @click="updateSelected(idx)"
            ) {{story.title}}

        div#stories.column
          div.container.is-fluid
            Story(
              v-bind:story="stories[selectedStory]",
              v-if="!addingStory"
            )
            NewStory(
              v-else
            )
</template>

<script>
import Story from "@/components/story/Story.vue";
import NewStory from "@/components/story/NewStory.vue";
import dummyApi from "../dummy_api.json";
export default {
  name: "Stories",
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
      return dummyApi.stories;
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
</style>
