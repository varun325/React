import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // {} in jsx can execute JS expressions
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="exepense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
