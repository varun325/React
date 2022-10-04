import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  // {} in jsx can execute JS expressions
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="exepense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
