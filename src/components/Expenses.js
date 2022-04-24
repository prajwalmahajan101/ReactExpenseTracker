import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

import Card from "./Card";


function Expenses(props){
    const expenses = props.expenses;
    const component =[];

    expenses.forEach((item,index)=>{
        component.push(<ExpenseItem expense = {expenses[index]}/>);
    });

    return (
       <Card className="expenses">{component}</Card>
    );
}


export default Expenses;