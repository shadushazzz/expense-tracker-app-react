import React, { useState } from 'react';


import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItems(props) {

const [title,setTitle] = useState(props.title);

const onButtonClick = () => {
  setTitle('Updated!')
} 
  return(
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={onButtonClick}>Click</button>
      </div>
    </Card>
  )
}
export default ExpenseItems;