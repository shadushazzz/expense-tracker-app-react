import React , { useState } from 'react';
import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import ExpensesFilter from './ExpensesFilter';
import Card from './Card';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const receivedFilterYear = ( receivedYear ) => {
    setFilterYear(receivedYear);
  }
  return (
  <Card className='expenses'>
    <ExpensesFilter selected={filterYear} onExpenseFilterChange={receivedFilterYear} />
    <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItems>
  </Card>
  )
}

export default Expenses;