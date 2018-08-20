<template lang="pug">
  div#new-story
    div.container
      h1.title.has-text-right Your Story
      div.field.is-horizontal
        div.field-label.is-normal
          label.label Story
        div.field-body
          div.field
            div.control
              textarea.textarea(
                placeholder="Textarea"
                )

      div.field.is-horizontal
        div.field-label.is-normal
          label.label Start
        div.field-body
          div.field
            div.control
              input.input(
                type="text",
                placeholder="Start"
                )

      div.field.is-horizontal
        div.field-label.is-normal
          label.label End
        div.field-body
          div.field
            div.control
              input.input(
                type="text",
                placeholder="End"
                )

      div.field.is-horizontal
        div.field-label.is-normal
          label.label Message to a Stranger
        div.field-body
          div.field
            div.control
              textarea.textarea(
                placeholder="Textarea"
                )

      div.field.is-horizontal
        div.field-label.is-normal
          label.label Thank You Note
        div.field-body
          div.field
            div.control
              textarea.textarea(
                placeholder="Textarea"
                )

    div#expenses.container
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
                )

      div.field.is-horizontal
        div.field-label.is-normal
          label.label Currency
        div.field-body
          div.field.is-narrow
            div.control
              div.select.is-fullwidth
                select
                  option £
                  option €

      div.field.is-horizontal
        div.field-label
        div.field-body
          div.field
            div.control
              button.button.is-primary Submit Story
</template>

<script>
export default {
  name: "NewStory"
}
</script>

<style lang="scss">
#expenses {
  margin-top: 5%;
}
</style>
