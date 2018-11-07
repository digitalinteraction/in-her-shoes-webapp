<template lang="pug">
    div#new-story
        div.form
            h1.title.has-text-right Your Story
            div.field.is-horizontal
                div.field-label.is-normal
                    label.label Story
                div.field-body
                    div.field
                        div.control
                            textarea.textarea(
                                placeholder="Textarea",
                                v-model="story"
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
                                v-model="start"
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
                                v-model="end"
                            )

            div.field.is-horizontal
                div.field-label.is-normal
                    label.label Message to a Stranger
                div.field-body
                    div.field
                        div.control
                            textarea.textarea(
                                placeholder="Textarea",
                                v-model="messageStranger"
                            )

            div.field.is-horizontal
                div.field-label.is-normal
                    label.label Thank You Note
                div.field-body
                    div.field
                        div.control
                            textarea.textarea(
                                placeholder="Textarea",
                                v-model="thankYouNote"
                            )

            div.field.is-horizontal
                div.field-label.is-normal
                    label.label Upload a Picture
                div.field-body
                    div.field
                        div.control
                            div.file.has-name.is-boxed
                                label.file-label
                                    input.file-input(
                                        type="file",
                                        name="header",
                                        @change="assignFile($event)"
                                    )
                                    span.file-cta
                                        span.file-icon
                                            i.fas.fa-upload
                                        span.file-label Choose a file
                                    span.file-name.has-text-centered(
                                        v-if="hasFile"
                                    ) {{file.name}}

        div#expenses
            h1.title.has-text-right Expenses
            div.field.is-horizontal
                div.field-label.is-normal
                    label.label Procedure
                div.field-body
                    div.field
                        div.control
                            input.input.has-text-right(
                                type="number"
                                placeholder="1000",
                                v-model="procedure"
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
                                v-model="travel"
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
                                v-model="food"
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
                                v-model="childcare"
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
                                v-model="accommodation"
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
                                v-model="other"
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
                                v-model="paidDaysMissed"
                            )

            div.field.is-horizontal
                div.field-label.is-normal
                    label.label Currency
                div.field-body
                    div.field.is-narrow
                        div.control
                            div.select.is-fullwidth
                                select(
                                    v-model="currency"
                                )
                                    option £
                                    option €

            div.field.is-horizontal
                div.field-label
                div.field-body
                    div.field
                        div.control
                            button.button.is-primary(
                                @click="submitStory"
                            ) Submit Story
</template>

<script>
import { storeStory, storeExpense } from "../../utils/api/stories";
import { uploadPicture } from "../../utils/api/media";

export default {
  name: "NewStory",
  data: function() {
    return {
      story: "",
      start: "",
      end: "",
      messageStranger: "",
      thankYouNote: "",
      procedure: 0,
      travel: 0,
      food: 0,
      childcare: 0,
      accommodation: 0,
      other: 0,
      paidDaysMissed: 0,
      currency: "",
      file: null,
      hasFile: false
    };
  },
  methods: {
    submitStory: async function() {
      const storyData = {
        story: this.story,
        start: this.start,
        end: this.end,
        messageStranger: this.messageStranger,
        thankYouNote: this.thankYouNote
      };

      const expenseData = {
        procedure: this.procedure,
        travel: this.travel,
        food: this.food,
        childcare: this.childcare,
        accommodation: this.accommodation,
        other: this.other,
        paidDaysMissed: this.paidDaysMissed
      };

      let story;
      let response;

      try {
        story = await storeStory(storyData);
        expenseData.storyId = story._id;
        response = await storeExpense(expenseData);
      } catch (e) {
        alert("Story could not be added");
      }

      if (response) {
        try {
          await uploadPicture(this.file, response.story._id);
        } catch (e) {
          console.error(e);
          alert("Image could not be uploaded");
        }

        let story = response.story;

        story.positions = response.positions;
        story.expenses = response.expenses;

        this.$store.commit("addUserStory", story);
      }
    },
    assignFile: function() {
      const file = event.target.files[0];
      if (/image/.test(file.type)) {
        this.file = file;
        this.hasFile = true;
      } else {
        alert("File must be an image");
      }
    }
  }
};
</script>

<style lang="scss">
#expenses {
  margin-top: 5%;
}
.form {
  margin-top: 5%;
}
</style>
