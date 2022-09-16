import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItems(props) {

  return(
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}
export default ExpenseItems;