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

  const filteredList = props.items.filter(item => item.date.getFullYear() === Number(filterYear));
 
  return (
  <Card className='expenses'>
    <ExpensesFilter selected={filterYear} onExpenseFilterChange={receivedFilterYear} />
    {
      filteredList.map( item => 
        <ExpenseItems
        title={item.title}
        amount={item.amount}
        date={item.date} />
      )
    }    
  </Card>
  )
}

export default Expenses;