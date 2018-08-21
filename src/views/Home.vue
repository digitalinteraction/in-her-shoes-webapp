<template lang="pug">
  div.home
    Title
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

import { getPublicStories } from "./../utils/api/stories";

export default {
  name: "home",
  components: {
    Title
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
