<template lang="pug">
    div#message-to-stanger.container
        h2.is-size-2.has-text-centered Messages to Strangers
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
</style>
