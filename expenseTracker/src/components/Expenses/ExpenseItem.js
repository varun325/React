import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  let title = props.title;
  const clickHandler = () => {
    title = "Clicked";
  };
  // {} in jsx can execute JS expressions
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="exepense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title!</button>
    </Card>
  );
};

export default ExpenseItem;
