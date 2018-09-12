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
      paths: [
        [
          {
            lat: 51.8981,
            lng: -8.476285
          },
          {
            lat: 51.507373,
            lng: -0.128482
          }
        ],
        [
          {
            lat: 53.348285,
            lng: -6.273325
          },
          {
            lat: 53.480667,
            lng: -2.242793
          }
        ]
      ],
      google: gmapApi
    };
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
