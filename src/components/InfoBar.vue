<template lang="pug">
  div#info-bar
    div.columns.has-text-centered.is-mobile
        div.column.is-one-third
            p {{strings.stories}}
            span.icon
                i.fas.fa-book-open
        div.column.is-one-third
            p {{strings.money}}
            span.icon
                i.fas.fa-euro-sign
        div.column.is-one-third
            p {{strings.miles}}
            span.icon
                i.fas.fa-globe-americas
</template>

<script>
import strings from "./../strings";
export default {
  name: "InfoBar",
  computed: {
    strings: function() {
      return strings.infobar;
    }
  }
};
</script>

<style lang="scss" scoped>
#info-bar {
  background: #ed9913;
  color: white;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
}
i {
  font-size: 2rem;
  margin-top: 25px;
}
</style>
