import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onSave(expenseData);
        setIsEditing(false);
        // console.log(expenseData);

    };

    const [isEditing,setIsEditing]  = useState(false);

    const setStartEditing = () =>{
        setIsEditing(true);
    };


    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={setStartEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setEditing={setIsEditing}></ExpenseForm>}
        </div>

    );
}

export default NewExpense;