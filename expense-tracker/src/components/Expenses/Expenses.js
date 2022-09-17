import React , { useState } from 'react';
import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import ExpensesFilter from './ExpensesFilter';
import Card from './Card';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const receivedFilterYear = ( receivedYear ) => {
    setFilterYear(receivedYear);
  }

  const filteredList = props.items.filter(item => item.date.getFullYear() === Number(filterYear));
 
  return (
  <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onExpenseFilterChange={receivedFilterYear} />
      {
        filteredList.length === 0 ? (
          <h2 className='expenses-list__fallback'>No expenses found!</h2>
        ) :
          (
            filteredList.map(item =>
              <ExpenseItems
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date} />
            )
          )
      }
    </Card>
  )
}

export default Expenses;