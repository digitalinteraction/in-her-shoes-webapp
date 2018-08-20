<template lang="pug">
  div#stories
    div.container
      div.columns
        div.column.is-one-quarter
          ol
            li story 1
            li story 2

        div#stories.column
          <Story v-bind:story="story"></Story>
</template>

<script>
import Story from "@/components/story/Story.vue";
export default {
  name: "Stories",
  components: {
    Story
  },
  data: function () {
    return {
      story: {
        title: "This is a test story",
        story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        start: "Dublin, Ireland",
        end: "London, United Kingdom",
        thankYouNote: "Thanks so much!",
        messageStranger: "This is a message to a stranger",
        expenses: {
          procedure: 1000,
          travel: 1000,
          food: 1000,
          childcare: 1000,
          accommodation: 1000,
          other: 1000,
          paidDaysMissed: 5
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #stories {
    margin-bottom: 2.5%;
  }
</style>
