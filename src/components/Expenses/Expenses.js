import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChar";

const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState("2021");

  const yearChangeHandler = (selectedValues) => {
    setFilterdYear(selectedValues);
  };

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          selectedValues={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
