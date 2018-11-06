<template lang="pug">
    div#admin
        div.container
            h1.is-size-1.page-title Admin Panel
            div.columns
                div.column.is-one-fifths
                    h3.is-size-3 Stories
                    ul
                        li.story-item(
                            v-for="(story, idx) in stories",
                            @click="updateSelected(idx)"
                        ) {{story.title || 'This is a story title'}}
                div.column.is-four-fifths
                    div#story-header
                        h1#story-title.title {{selectedStory.title || 'This is a story'}}

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Story
                        div.field-body
                            div.field
                                div.control
                                    textarea.textarea(
                                    placeholder="Textarea",
                                    :value="selectedStory.story"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Start
                        div.field-body
                            div.field
                                div.control
                                    input.input(
                                    type="text",
                                    placeholder="Start",
                                    v-model="selectedStory.start"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label End
                        div.field-body
                            div.field
                                div.control
                                    input.input(
                                    type="text",
                                    placeholder="End",
                                    v-model="selectedStory.end"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Message to a Stranger
                        div.field-body
                            div.field
                                div.control
                                    textarea.textarea(
                                    placeholder="Textarea",
                                    v-model="selectedStory.messageStranger"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Thank You Note
                        div.field-body
                            div.field
                                div.control
                                    textarea.textarea(
                                    placeholder="Textarea",
                                    v-model="selectedStory.thankYouNote"
                                    )


                    h1.is-size-3.has-text-left Expenses
                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Procedure
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.procedure"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Travel
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.travel"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Food
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.food"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Childcare
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.childcare"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Accommodation
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.accommodation"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Other Expenses
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.other"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Paid Days Missed
                        div.field-body
                            div.field
                                div.control
                                    input.input.has-text-right(
                                    type="number"
                                    placeholder="1000",
                                    v-model="expenses.paidDaysMissed"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Currency
                        div.field-body
                            div.field.is-narrow
                                div.control
                                    div.select.is-fullwidth
                                        select(
                                        v-model="expenses.currency"
                                        )
                                            option £
                                            option €

                    h1.is-size-3 Options
                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Leave a message
                        div.field-body
                            div.field
                                div.control
                                    textarea.textarea(
                                    placeholder="Textarea",
                                    v-model="message"
                                    )

                    div.field.is-horizontal
                        div.field-label.is-normal
                            label.label Publish
                        div.field-body
                            div.control
                                label.checkbox
                                    input(
                                        type="checkbox",
                                        v-model="publish"
                                    )

                    div.field.is-horizontal
                        div.field-label
                        div.field-body
                            div.field
                                div.control
                                    button.button.is-warning(
                                    @click="submitStory"
                                    ) Update

</template>

<script>
import { getUnpublished } from "../utils/api/stories";

export default {
  name: "Admin",
  data: function() {
    return {
      stories: [],
      index: 0,
      message: "",
      publish: false
    };
  },
  methods: {
    updateSelected: function(idx) {
      console.log(this.stories[this.index]._id);
      this.index = idx;
    },
    submitStory: function() {
      console.log("story");
    }
  },
  computed: {
    selectedStory: function() {
      if (this.stories.length < 1) return {};
      return this.stories[this.index];
    },
    expenses: function() {
      if (!this.selectedStory.expenses) {
        return {
          procedure: 0,
          travel: 0,
          food: 0,
          childcare: 0,
          accommodation: 0,
          other: 0,
          paidDaysMissed: 0,
          currency: "€"
        };
      }
    }
  },
  mounted: async function() {
    try {
      this.stories = await getUnpublished();
    } catch (e) {
      alert(e.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.story-item {
  padding: 10px;
  transition: all ease 0.2s;
  border-radius: 5px;
}
.story-item:hover {
  background-color: tomato;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

#story-header {
  background: url("../assets/shoes-placeholder.png"),
    linear-gradient(to bottom, #666666, #000000) no-repeat right top;
  background-size: cover;
  min-height: 50vh;
  position: relative;
  padding: 10px;
  margin-bottom: 5%;
  border-radius: 15px;

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
    border-radius: 15px;
  }
}

#story-title {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #ffffff;
  /*font-size: 3em;*/
  transition: all ease 0.5s;
}

#story-header:hover {
  #story-title {
    font-size: 2.5em;
  }
}

#admin {
  margin-bottom: 5vh;
}

.page-title {
  margin-bottom: 2.5%;
  margin-top: 2.5%;
}
</style>
