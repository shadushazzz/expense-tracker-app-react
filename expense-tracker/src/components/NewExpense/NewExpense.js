import React from "react";
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

  return (
    <div className="new-expense">
      <NewExpenseForm formData={receivedFormData}/>
    </div>
  )
}

export default NewExpense;