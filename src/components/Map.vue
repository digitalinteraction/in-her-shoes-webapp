<template lang="pug">
    div#map
        h2.is-size-2.has-text-centered Route Map
        GmapMap.map(
            :center="center",
            :zoom="6",
            map-type-id="roadmap",
        )
            GmapPolyline(
                v-for="path in paths",
                :editable="false",
                strokeColor="#666666"
                :path="path",
            )
</template>

<script>
import { gmapApi } from "vue2-google-maps";
export default {
  name: "Map",
  data: function() {
    return {
      center: {
        lat: 53.322601,
        lng: -4.680631
      },
      google: gmapApi
    };
  },
  computed: {
    stories: function() {
      console.log(this.$store.getters.getStories);
      return this.$store.getters.getStories;
    },
    paths: function() {
      let paths = [];

      for (let story of this.$store.getters.getStories) {
        const path = [
          {
            lat: story.positions[0].lat,
            lng: story.positions[0].lng
          },
          {
            lat: story.positions[1].lat,
            lng: story.positions[1].lng
          }
        ];

        console.log(path);

        paths.push(path);
      }

      return paths;
    }
  }
};
</script>

<style lang="scss" scoped>
.is-size-2 {
  margin-bottom: 2.5%;
  margin-top: 2.5%;
  position: relative;
  line-height: 1.2em;
}
.is-size-2:after {
  height: 0;
  width: 50px;
  top: 1.2em;
  left: 48%;
  border-top: 2px solid #ed9913;
  content: "";
  position: absolute;
  margin-top: 1.1%;
}

.map {
  width: 100%;
  height: 50vh;
}
</style>
