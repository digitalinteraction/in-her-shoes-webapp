<template lang="pug">
    div#message-to-stanger.container
        div
            span(
            v-for="story in stories"
            )
                div.postits(:style="{transform: getTilt()}")
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
  },
  methods: {
    /**
     * Return a css rotate command
     * @returns {string}
     */
    getTilt: function() {
      const max = 5;
      const min = -5;
      const tilt = Math.floor(Math.random() * (max - min + 1)) + min;
      return `rotate(${tilt}deg)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.postits {
  display: inline-block;
}
</style>
