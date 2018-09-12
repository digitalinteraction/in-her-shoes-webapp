<template lang="pug">
    div.home
        Title#title

        InfoBar

        LearnMoreBar

        StoryGallery

        div.container
            h2.is-size-2 Thank You Notes
            ThankYouNotes

        div.container
            h2.is-size-2 Messages to Strangers
            MessageToStranger

        div.container
            TotalExpenses
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import ThankYouNotes from "@/components/story/ThankYouNotes.vue";
import MessageToStranger from "@/components/story/MessageToStranger.vue";
import TotalExpenses from "@/components/story/TotalExpenses";
import InfoBar from "@/components/InfoBar";

import { getPublicStories } from "./../utils/api/stories";
import LearnMoreBar from "../components/LearnMoreBar";
import StoryGallery from "../components/StoryGallery";

export default {
  name: "home",
  components: {
    StoryGallery,
    LearnMoreBar,
    InfoBar,
    Title,
    ThankYouNotes,
    MessageToStranger,
    TotalExpenses
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

<style lang="scss" scoped>
.home {
  margin-bottom: 2.5%;
}

.is-size-2 {
  margin-top: 2.5%;
}

#title {
  margin-bottom: 0;
}
</style>
