import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses(props){
    const expenses = props.expenses;
    const component =[];

    expenses.forEach((item,index)=>{
        component.push(<ExpenseItem expense = {expenses[index]}/>);
    });

    return (
       <div className="expenses">{component}</div>
    );
}


export default Expenses;