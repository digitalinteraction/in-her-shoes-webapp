<template lang="pug">
    div.total-expenses
        h2.is-size-2 {{strings.title}}
        p(
            v-html="strings.info"
        )
        Expenses(
            :expense="totalExpenses"
        )
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
