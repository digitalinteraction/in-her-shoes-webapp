<template lang="pug">
    div#message-to-stanger.container
        div
            span(
            v-for="story in stories"
            )
                div.rotate-right
                    PostIt(

                    colour="yellow",
                    :class=""
                    )
                        h1(
                        slot="header"
                        ) To a Stranger:
                        p(
                        slot="body"
                        ) {{ story.messageStranger }}
</template>

<script>
import PostIt from "@/components/PostIt.vue";
export default {
  name: "MessageToStranger",
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
  display: inline-block;
}
</style>
