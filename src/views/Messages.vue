<template lang="pug">
   div#messages
       div.container
           section.section
               h1.title All Messages
           section.section
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
import { getPublicStories } from "../utils/api/stories";

export default {
  name: "Messages",
  data: function() {
    return {
      stories: []
    };
  },
  async mounted() {
    let stories = [];
    try {
      stories = await getPublicStories();
      console.log(this.stories[0]);
    } catch (e) {
      console.error(e);
    }

    for (let i = 0; i < stories.length; i++) {
      stories[i].imageUrl = `${URL}/media/story/${stories[i]._id}`;
    }

    this.stories = stories;
  },
  methods: {
    getLink: function(id) {
      return `/story/${id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
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
