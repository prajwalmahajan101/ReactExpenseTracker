import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
    const expenses=[
        { id:"e1", date:new Date(2021,2,28), title:"Car Insurance", amount:269.74},
        { id:"e2", date:new Date(2021,4,18), title:"Stationary", amount:80},
        { id:"e3", date:new Date(2021,3,2), title:"Book", amount:100},
        { id:"e4", date:new Date(2022,1,25), title:"T-shirt", amount:20},
        { id:"e5", date:new Date(2020,1,25), title:"Desk", amount:80},
        { id:"e6", date:new Date(2020,3,25), title:"Desk 1", amount:80.36},
        { id:"e7", date:new Date(2019,7,25), title:"Book 2", amount:280},
        { id:"e8", date:new Date(2019,1,25), title:"Desk 4", amount:28.36},

    ]
    const [expensesData,setExpensesData] = useState(expenses);


    const onSaveExpenseData = (expenseData) => {
        setExpensesData ((prevData) => {
            return ([expenseData,...prevData ]);
        })};
  return (
    <div >
        <NewExpense  onSave={onSaveExpenseData}  />
        <Expenses expenses = {expensesData} />
    </div>
  );
}

export default App;
