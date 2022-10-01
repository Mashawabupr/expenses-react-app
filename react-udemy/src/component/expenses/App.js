import AllExpenses from "./component/expenses/AllExpenses.js";
import NewExpense from "./component/NewExpense/NewExpense.js";
import { useState } from "react";
const expenses = [
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
let [expense, setExpense] = useState(expenses);
function App() {
  let addExpenses = (ex) => {
    setExpense((prevExpense) => [ex, ...prevExpense]);
    console.log(ex);
  };
  return (
    <div className="App">
      <AllExpenses expenses={expenses} />
      <NewExpense onAddExpenses={addExpenses} />
    </div>
  );
}

export default App;
