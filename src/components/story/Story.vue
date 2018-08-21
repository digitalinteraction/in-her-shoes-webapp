<template lang="pug">
  div#story
    div#story-header
      h1#story-title.title {{story.title}}
    p.content {{story.story}}

    div.columns
      div.column.is-half
        div.rotate-left
          div.postit
            h1 Thank You
            p {{story.thankYouNote}}

      div.column.is-half
        div.rotate-right
          div.postit
            h1 Message to Stranger
            p {{story.messageStranger}}

    h3.is-size-3 Expenses

    table.table.is-bordered.is-striped.is-fullwidth.is-hoverable
      thead
        tr
          th Expense
          th.has-text-right Cost
      tbody
        tr
          td Procedure
          td.has-text-right {{story.expenses.procedure}}
        tr
          td Travel
          td.has-text-right {{story.expenses.travel}}
        tr
          td Food
          td.has-text-right {{story.expenses.food}}
        tr
          td Childcare
          td.has-text-right {{story.expenses.childcare}}
        tr
          td Accommodation
          td.has-text-right {{story.expenses.accommodation}}
        tr
          td Other
          td.has-text-right {{story.expenses.other}}
        tr
          td Paid Days Missed
          td.has-text-right {{story.expenses.paidDaysMissed}}
</template>

<script>
export default {
  name: "Story",
  props: ["story"]
};
</script>

<style lang="scss" scoped>
#story-header {
  background-image: url("https://images.unsplash.com/photo-1518685546285-85c2b201402b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=931f9b6519973a4fb773e1e55c208e16&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"),
    linear-gradient(to bottom, #666666, #000000);
  background-repeat: no-repeat;
  background-position: right top;
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

/**
 * Post it styles from: https://mentormate.com/blog/css-postit-note/
 */
.postit {
  line-height: 1;
  text-align: center;
  width: 275px;
  margin: 25px;
  min-height: 250px;
  max-height: 250px;
  padding-top: 35px;
  position: relative;
  border: 1px solid #e8e8e8;
  border-top: 60px solid #fdfd86;
  font-size: 22px;
  border-bottom-right-radius: 60px 5px;
  display: inline-block;
  background: #ffff88;

  /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  );
  /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(81%, #ffff88),
    color-stop(82%, #ffff88),
    color-stop(82%, #ffff88),
    color-stop(100%, #ffffc6)
  );
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  );
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  );
  /* Opera 11.10+ */
  background: -ms-linear-gradient(
    -45deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  );
  /* IE10+ */
  background: linear-gradient(
    135deg,
    #ffff88 81%,
    #ffff88 82%,
    #ffff88 82%,
    #ffffc6 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.postit:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: -0px;
  bottom: 20px;
  width: 200px;
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.4);
  -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  transform: matrix(-1, -0.1, 0, 1, 0, 0);
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
</style>
