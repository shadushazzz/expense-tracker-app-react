import React, { useState } from "react";
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
  const [ enteredTitle , setEnteredTitle ] = useState('');
  const [ enteredAmount , setEnteredAmount ] = useState('');
  const [ enteredDate , setEnteredDate ] = useState('');
  const [ closeButton , setClosedButton ] = useState()

  const onTitleChange = (e) => {
    setEnteredTitle(e.target.value)
  }
  const onAmountChange = (e) => {
    setEnteredAmount(e.target.value)
  }
  const onDateChange = (e) => {
    setEnteredDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const inputExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
   props.formData(inputExpense);
   setEnteredAmount('');
   setEnteredDate('');
   setEnteredTitle('');
  }

  const closeExpense = () => {
    setClosedButton(false)
    props.closedButton(closeButton);
  }

  return (    
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type='text' value={enteredTitle} onChange={onTitleChange}></input>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type='number' min='0.01' step='0.01'value={enteredAmount} onChange={onAmountChange}></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type='date' min='2017-09-01' max='2023-09-01' value={enteredDate} onChange={onDateChange}></input>
            </div>
            <button onClick={closeExpense}>Close</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>

      
  )
}

export default NewExpenseForm;