import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import {useState} from "react";


const Expenses = (props) => {
    const expenses = props.expenses;

    const [selectedYear,setSelectedYear] = useState('2022')

    const filterHandler = (data) =>{
        // console.log(data);
        setSelectedYear(data);
    };


    let expensesData = <p>No Expenses This Year</p>;
    const filteredExpenses = expenses.filter((el)=>(el.date.getFullYear().toString()===selectedYear));
    if(filteredExpenses.length > 0)
        expensesData = filteredExpenses.map((expense)=>(
        <ExpenseItem
            key = {expense.id}
            title = {expense.title}
            date={expense.date}
            amount={expense.amount}
        />));
    return (
            <Card className="expenses">
                <ExpensesFilter
                    selected = {selectedYear}
                    onChange ={filterHandler}
                />
                <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
                {expensesData}
            </Card>

    );
}


export default Expenses;