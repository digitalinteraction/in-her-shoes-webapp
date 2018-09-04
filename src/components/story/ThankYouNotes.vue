<template lang="pug">
    div#thank-you-notes.container
        div
            span(
                v-for="story in stories"
            )
                div.rotate-left
                    PostIt(

                        colour="blue",
                        :class=""
                    )
                        h1(
                            slot="header"
                        ) Thank you for:
                        p(
                            slot="body"
                        ) {{ story.thankYouNote }}
</template>

<script>
import PostIt from "@/components/PostIt.vue";
export default {
  name: "ThankYouNotes",
  components: {
    PostIt
  },
  computed: {
    stories: function() {
      return this.$store.getters.getStories;
    }
  }
};
</script>

<style lang="scss" scoped>
.rotate-left {
  -ms-transform: rotate(-2deg); /* IE 9 */
  -webkit-transform: rotate(-2deg); /* Safari 3-8 */
  transform: rotate(-2deg);
  display: inline-block;
}

.rotate-right {
  -ms-transform: rotate(3deg); /* IE 9 */
  -webkit-transform: rotate(3deg); /* Safari 3-8 */
  transform: rotate(3deg);
}
</style>
