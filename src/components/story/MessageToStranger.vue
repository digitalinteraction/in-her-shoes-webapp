<template lang="pug">
    div#message-to-stanger.container
        h2.is-size-2.has-text-centered Messages to Strangers
        div.message-box.columns.is-mobile(
            v-for="(story, idx) in stories"
        )
            div.column.is-12(
                v-if="idx % 2 === 0"
            )
                a(
                    :href="getLink(story._id)"
                )
                    p.message.left {{story.messageStranger}}
            div.column.is-12(
                v-else
            )
                a(
                    :href="getLink(story._id)"
                )
                    p.message.right.has-text-right.right {{story.messageStranger}}
</template>

<script>
export default {
  name: "MessageToStranger",
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
    },
    /**
     * Get a link to the story
     * @param id
     * @returns {string}
     */
    getLink: function(id) {
      return `/story/${id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
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
.message-container {
  margin-bottom: 25px;
}
.message {
  $margin: 5px;
  padding: 10px 20px;
  border-radius: 30px;
  margin-top: $margin;
  margin-bottom: $margin;
  position: relative;
  display: inline-block;
}
.left {
  color: white;
  background-color: #186de0;
  margin-left: 5%;
}
.right {
  float: right;
  margin-right: 5%;
  color: black;
}
</style>
