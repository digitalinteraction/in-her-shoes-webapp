<template lang="pug">
  div.home
    Title
    NewStory
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import NewStory from "@/components/story/NewStory.vue";

export default {
  name: "home",
  components: {
    Title,
    NewStory
  }
};
</script>
