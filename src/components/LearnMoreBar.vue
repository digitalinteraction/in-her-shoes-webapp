<template lang="pug">
   div#learn-more-bar
        div.has-text-centered
            p {{strings.main}}
            p.underlined {{strings.bold}}
        div.has-text-centered
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
  transition: all 0.5s ease;
}
.button:hover {
  background-color: white;
  color: #ed9913;
  font-weight: bold;
}
.underlined {
  text-decoration: underline;
  text-decoration-color: #ed9913;
}
.button {
  margin-top: 2.5%;
}
</style>
