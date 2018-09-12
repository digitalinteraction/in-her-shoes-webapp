<template lang="pug">
    div.total-expenses
        h2.is-size-2.has-text-centered {{strings.title}}
        p(
            v-html="strings.info"
        )
        Expenses(
            :expense="totalExpenses"
        )
        p.total-info This works out at an average cost of: &euro;{{averageCost}} per trip.
            br
            br
            | Last year, approximately {{totalWomen}} Irish women travelled to the UK to obtain safe abortion. Therefore, we estimate your outstanding balance to be &euro;{{totalCost}}.
            br
            | This repayment is well overdue, please act now.
            br
            br
            | Yours sincerely,
            br
            | The women of Ireland
</template>

<script>
import Expenses from "./Expenses";
import strings from "./../../strings.json";

export default {
  name: "TotalExpenses",
  components: { Expenses },
  computed: {
    totalExpenses: function() {
      // init total expenses
      let totalExpense = {
        procedure: 0,
        travel: 0,
        food: 0,
        childcare: 0,
        accommodation: 0,
        other: 0,
        paidDaysMissed: 0
      };

      for (let i = 0; i < this.$store.getters.getStories.length; i++) {
        const expenses = this.$store.getters.getStories[i].expenses;
        if (expenses) {
          totalExpense.procedure += expenses.procedure || 0;
          totalExpense.travel += expenses.travel || 0;
          totalExpense.food += expenses.food || 0;
          totalExpense.childcare += expenses.childcare || 0;
          totalExpense.accommodation += expenses.accommodation || 0;
          totalExpense.other += expenses.other || 0;
          totalExpense.paidDaysMissed += expenses.paidDaysMissed || 0;
        }
      }
      return totalExpense;
    },
    strings: function() {
      return strings.expenses;
    },
    totalCost: function() {
      return Object.values(this.totalExpenses).reduce((a, b) => a + b);
    },
    totalWomen: function() {
      return this.$store.getters.getStories.length;
    },
    averageCost: function() {
      return this.totalCost / this.totalWomen;
    }
  }
};
</script>

<style lang="scss" scoped>
.total-info {
  margin-top: 2.5%;
}
.total-expenses {
  background-color: #f8eff4;
  padding: 2.5%;
  border-radius: 15px;
}
.is-size-2 {
  margin-bottom: 2.5%;
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
</style>
