<template lang="pug">
  div.home
    Title
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import NewStory from "@/components/story/NewStory.vue";

export default {
  name: "home",
  components: {
    Title
  }
};
</script>
