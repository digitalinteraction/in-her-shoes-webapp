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
            p.column.is-12 {{ totalDistance }}
</template>

<script>
import strings from "./../strings";

export default {
  name: "InfoBar",
  computed: {
    strings: function() {
      return strings.infobar;
    },
    stories: function() {
      console.log("stories", this.$store.getters.getStories);
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

        paths.push(path);
      }

      return paths;
    },
    /**
     * Get total distance people have travelled in miles.
     */
    totalDistance: function() {
      const metersToMilesFactor = 0.000621;
      if (this.paths.length === 0) return 0;

      const reduced = this.paths.reduce((acc, a) => {
        return acc + this.distanceBetweenPoints(a[0], a[1]);
      }, 0);
      return Math.round(reduced * metersToMilesFactor * 2);
    }
  },
  methods: {
    /**
     * Calculate distance between two coordinates.
     * @param a coordinate a
     * @param b coordinate b
     */
    distanceBetweenPoints: function(a, b) {
      if (!a || !b) return;

      const R = 6371e3; // Radius of the earth

      // lats as radians
      const lat1 = this.toRadians(a.lat);
      const lat2 = this.toRadians(b.lat);

      // differences in radians
      const latDiff = this.toRadians(a.lat - b.lat);
      const lngDiff = this.toRadians(a.lng - b.lng);

      // Haversine formula
      const A =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(lat1) *
          Math.cos(lat2) *
          Math.sin(lngDiff / 2) *
          Math.sin(lngDiff / 2);

      const c = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A));

      // Multiply by radius of the earth
      return R * c;
    },
    /**
     * Convent degress to radians
     * @param x
     * @returns {number}
     */
    toRadians: function(x) {
      return (x * Math.PI) / 180;
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
