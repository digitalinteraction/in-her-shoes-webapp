<template lang="pug">
    div.view-story
        div.container
            Story(
                :story="story"
             )
</template>

<script>
import {getRemoteStory} from "../utils/api/stories";
import Story from "../components/story/Story";

export default {
  name: "ViewStory",
  components: {Story},
  data: function() {
    return {
      story: null
    };
  },
  async mounted() {
    try {
      this.story = await getRemoteStory(this.$route.params.id);
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
