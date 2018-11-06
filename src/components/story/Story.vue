<template lang="pug">
  div#story
    div#story-header
      h1#story-title.title {{story.title}}

    div.notification.is-warning(
      v-if="story.isBeingModerated"
    )
      p {{ strings.story.under_review }}

    p.content {{story.story}}

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

    div.columns
      div.column.is-half
        div.rotate-left
            PostIt(
                colour="blue"
            )
                h1(
                    slot="header"
                ) Thank you for:
                p(
                    slot="body"
                ) {{ story.thankYouNote }}

      div.column.is-half
        div.rotate-right
            PostIt(
            colour="yellow"
            )
                h1(
                slot="header"
                ) To a Stranger:
                p(
                slot="body"
                ) {{ story.messageStranger }}

    h3.is-size-3(
        v-if="story.expenses"
    ) Expenses
    div.expenses.container-fluid(
        v-if="story.expenses"
    )
      Expenses(
          :expense="story.expenses"
          )
</template>

<script>
import strings from "./../../strings.json";
import PostIt from "@/components/PostIt.vue";
import Expenses from "@/components/story/Expenses.vue";

export default {
  name: "Story",
  props: ["story"],
  components: {
    Expenses,
    PostIt
  },
  computed: {
    strings: function() {
      return strings;
    },
    paths: function() {
      if (this.story.positions) {
        return [
          [
            {
              lat: this.story.positions[0].lat,
              lng: this.story.positions[0].lng
            },
            {
              lat: this.story.positions[1].lat,
              lng: this.story.positions[1].lng
            }
          ]
        ];
      }
      return [[]];
    }
  },
  data: function() {
    return {
      center: {
        lat: 53.322601,
        lng: -4.680631
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#story-header {
  background: url("../../assets/shoes-placeholder.png"),
    linear-gradient(to bottom, #666666, #000000) no-repeat right top;
  background-size: cover;
  min-height: 50vh;
  position: relative;
  padding: 10px;
  margin-bottom: 5%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.1),
      #666666
    );
    opacity: 0.6;
  }
}

#story-title {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #ffffff;
}

.rotate-left {
  -ms-transform: rotate(-2deg); /* IE 9 */
  -webkit-transform: rotate(-2deg); /* Safari 3-8 */
  transform: rotate(-2deg);
}

.rotate-right {
  -ms-transform: rotate(3deg); /* IE 9 */
  -webkit-transform: rotate(3deg); /* Safari 3-8 */
  transform: rotate(3deg);
}

h3 {
  margin-bottom: 1%;
}

.expenses {
  background-color: #f8eff4;
  border-radius: 15px;
  padding: 1.25%;
}

.map {
  width: 100%;
  height: 50vh;
}
</style>
