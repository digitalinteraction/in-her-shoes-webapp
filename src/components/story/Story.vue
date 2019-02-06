<template lang="pug">
    div#story
        div#story-header
            p(
                v-if="isOwner"
            )#story-title.title
                span.icon.story-icon(
                    @click="$emit('edit-story', story._id)"
                )
                    i.fas.fa-edit
                span.icon.story-icon(
                    @click="deleteStory"
                )
                    i.fas.fa-trash-alt

        div.notification.is-warning(
        v-if="story.isBeingModerated"
        )
            p {{ strings.story.under_review }}

        section.section
            h2.is-size-2.has-text-centered Story
            p.content {{story.story}}

        h2.is-size-2.has-text-centered Route
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

        section.section
            h2.is-size-2.has-text-centered Message to a Stranger
                div.message-container
                    p.message {{story.messageStranger}}

        section.section
            h2.is-size-2.has-text-centered Thank You To
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

        h3.is-size-2.has-text-centered(
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
import { deleteStory } from "../../utils/api/stories";

export default {
  name: "Story",
  props: ["story", "isOwner"],
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
  },
  methods: {
    editStory: function() {},
    deleteStory: async function() {
      const confirmed = confirm(
        "Are you sure you wish to delete your story? Your story cannot be recovered once deleted."
      );

      if (!confirmed) return;

      try {
        await deleteStory(this.story._id);
      } catch (e) {
        console.error(e);
        alert("Story could not be deleted");
        return;
      }

      this.$emit("story-deleted");
      this.$store.commit("removeUserStory", this.story._id);
    }
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
  /*margin-bottom: 5%;*/

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
  margin-left: 40px;
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
  margin-bottom: 5%;
}

.map {
  width: 100%;
  height: 50vh;
}

.message {
  $margin: 5px;
  padding: 10px 20px;
  border-radius: 30px;
  margin-top: $margin;
  margin-bottom: $margin;
  position: relative;
  display: inline-block;
  color: white;
  background-color: #186de0;
}

.message-stranger {
  margin-top: 5%;
}
.fa-edit {
  margin-right: 30px;
}

.story-icon {
  transition: all 0.5s ease;
}

.story-icon:hover {
  cursor: pointer;
  color: #ed9913;
}
</style>
