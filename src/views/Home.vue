<template lang="pug">
  div.home
    Title
    ThankYouNotes
    MessageToStranger
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import ThankYouNotes from "@/components/story/ThankYouNotes.vue";
import MessageToStranger from "@/components/story/MessageToStranger.vue";

import { getPublicStories } from "./../utils/api/stories";

export default {
  name: "home",
  components: {
    Title,
    ThankYouNotes,
    MessageToStranger
  },
  mounted: async function() {
    let stories = [];
    try {
      stories = await getPublicStories();
    } catch (e) {
      alert(e);
    }

    this.$store.commit("updateStories", stories);
  }
};
</script>
