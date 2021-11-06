import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Expense",
    date: new Date(2020, 10, 1),
    amount: "1000",
  },
  {
    id: 2,
    title: "Car Expense1",
    date: new Date(2021, 10, 2),
    amount: "2000",
  },
  {
    id: 3,
    title: "Car Expense2",
    date: new Date(2021, 9, 2),
    amount: "500",
  },
  {
    id: 4,
    title: "Car Expense3",
    date: new Date(2021, 9, 2),
    amount: "2000",
  },
];
const App = () => {
  const [expense, setExpense] = useState(DUMMY_DATA);
  const AddExpenseHendle = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHendle} />
      <Expenses item={expense} />
    </div>
  );
};

export default App;
