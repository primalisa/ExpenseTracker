import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpenseChart from "./components/Expenses/ExpensesChart";
import ExpenseItem from "./components/Expenses/ExpenseItem";
const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];





 
const App = () => {


 
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  
  };
  
 


  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevexpenses) => {
      return [expense, ...prevexpenses];
    });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p className="p">No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((e) => (
      <ExpenseItem
      key={e.id}
      title={e.title}
      amount={e.amount}
      date={e.date}
    ></ExpenseItem>
    ))};


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Card>

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
        <ExpenseChart expenses={filteredExpenses}/>

        {expensesContent}
     
  

        
      </Card>
    </div>
  )
};

export default App 
