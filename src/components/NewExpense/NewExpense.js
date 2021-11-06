import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formDisplayFlag, setFormDisplayFlag] = useState(false);
  const saveExpenseHeader = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
    setFormDisplayFlag(false);
  };
  const formDisplayHandler = () => {
    setFormDisplayFlag(true);
  }
  const formCancelHandler = () => {
    setFormDisplayFlag(false);
  }

  return (
    <div className="new-expense">
      {!formDisplayFlag && <button onClick={formDisplayHandler}>Add Expense</button> }
      { formDisplayFlag && <ExpenseForm onSaveExpenseData={saveExpenseHeader} onCancle={formCancelHandler}/> }
    </div>
  );
};

export default NewExpense;
