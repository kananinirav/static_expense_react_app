import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Expense",
    date: new Date(2020, 7, 1),
    amount: "500",
  },
  {
    id: 2,
    title: "Car Expense1",
    date: new Date(2021, 8, 2),
    amount: "500",
  },
  {
    id: 3,
    title: "Car Expense2",
    date: new Date(2021, 9, 2),
    amount: "600",
  },
  {
    id: 4,
    title: "Car Expense3",
    date: new Date(2021, 10, 2),
    amount: "700",
  },
  {
    id: 6,
    title: "Car Expense4",
    date: new Date(2021, 11, 2),
    amount: "800",
  },
  {
    id: 7,
    title: "Car Expense5",
    date: new Date(2021, 7, 2),
    amount: "900",
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
