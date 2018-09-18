/**
 Created:  18/09/2018
 Author:   Daniel
 Description:
 -
 */

/**
 * Get the total of an expense
 * @param expense
 * @returns {*}
 */
export function getExpenseTotal(expense) {
  return (
    expense.procedure +
    expense.travel +
    expense.food +
    expense.childcare +
    expense.accommodation +
    expense.other
  );
}
