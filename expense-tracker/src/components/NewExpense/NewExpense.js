import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {

  const receivedFormData = (receivedExpenseData) => {
    const expenseData = {
      ...receivedExpenseData, 
      id: Math.random().toString(),
    }
    props.onFormData(expenseData);
  }

  const [ addExpense, setAddExpense ] = useState(false);

  const addExpenseButton = () => {
    setAddExpense(true);
  }

  const closeExpense = (receivedCloseValue ) => {
   setAddExpense(receivedCloseValue);
  }
  
  return (
    <div className="new-expense">
     <button hidden={addExpense} onClick={addExpenseButton}>New Expense</button>
     {
     addExpense ?
      <NewExpenseForm closedButton={closeExpense} formData={receivedFormData}/> : ''
     }
    </div>
  )
}

export default NewExpense;