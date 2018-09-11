<template lang="pug">
   div#learn-more-bar
        div.columns
            div.column.is-two-thirds.has-text-centered
                p {{strings.main}}
                p.underlined {{strings.bold}}
            div.column.is-one-third.has-text-centered
                button.button.is-rounded.is-outlined {{strings.button}}
</template>

<script>
import strings from "./../strings";

export default {
  name: "LearnMoreBar",
  computed: {
    strings: function() {
      return strings.learn;
    }
  }
};
</script>

<style lang="scss" scoped>
#learn-more-bar {
  background-color: #2c2c2c;
  color: white;
  padding-top: 5%;
  padding-bottom: 5%;
  text-transform: uppercase;
}
.button {
  background-color: transparent;
  color: white;
}
.button:hover {
  background-color: white;
  color: #2c2c2c;
}
.underlined {
  text-decoration: underline;
  text-decoration-color: #ed9913;
}
</style>
