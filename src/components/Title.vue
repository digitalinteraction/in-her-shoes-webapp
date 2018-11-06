<template lang="pug">
    div.title
        section.hero.is-medium
            div.hero-body
                div.container
                    h1.title.has-text-centered {{strings.title}}
                    h2.subtitle.has-text-centered(
                    v-html="strings.subtitle"
                    )
            div.hero-foot
                div.columns.is-mobile
                    div.column.is-half.has-text-right
                        button.button.is-outlined.is-inverted.is-rounded Read Stories
                    div.column.is-half.has-text-left
                        button.button.is-outlined.is-inverted.is-rounded(
                            @click="shareStory"
                        ) Share Your Story
</template>

<script>
import strings from "./../strings";

export default {
  name: "Title",
  props: {
    msg: String
  },
  computed: {
    strings: function() {
      return strings.title;
    }
  },
  methods: {
    shareStory: function() {
      this.$router.push("/stories");
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background: url("./../assets/header.png"),
    linear-gradient(to bottom, #222222, #000000) no-repeat center bottom;
  background-size: cover;
  min-height: 50vh;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), #222222);
    opacity: 0.6;
  }
}
.subtitle {
  color: white;
}
.title {
  color: white;
}
.hero-foot {
  padding-bottom: 5%;
}
.button {
  color: white;
  background: transparent;
  transition: all 0.5s ease;
}
.button:hover {
  background: white;
  color: #ed9913;
}
</style>
