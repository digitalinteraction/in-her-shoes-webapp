<template lang="pug">
    div#expenses
        table.table.is-fullwidth
            thead
                tr
                    th Expense
                    th.has-text-right Cost
            tbody
                tr
                    td Procedure
                    td.has-text-right {{expense.procedure}}
                tr
                    td Travel
                    td.has-text-right {{expense.travel}}
                tr
                    td Food
                    td.has-text-right {{expense.food}}
                tr
                    td Childcare
                    td.has-text-right {{expense.childcare}}
                tr
                    td Accommodation
                    td.has-text-right {{expense.accommodation}}
                tr
                    td Other
                    td.has-text-right {{expense.other}}
                tr
                    td Paid Days Missed
                    td.has-text-right {{expense.paidDaysMissed}}
                tr
                    td Total
                    td.has-text-right {{total}}
</template>

<script>
export default {
  name: "Expenses",
  props: ["expense"],
  computed: {
    total: function() {
      return (
        this.expense.procedure +
        this.expense.travel +
        this.expense.food +
        this.expense.childcare +
        this.expense.accommodation +
        this.expense.other
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#expenses {
  margin-top: 1.25%;
}
.table {
  background-color: transparent;
}
</style>
