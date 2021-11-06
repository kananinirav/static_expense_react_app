import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'

const ExpenseList = (props) => {

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Data Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        ( props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        )))
      }
    </ul>
  );
};

export default ExpenseList;
