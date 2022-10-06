// import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("checked");
  //   //Changing the state using the changeState function!
  // };
  // {} in jsx can execute JS expressions
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="exepense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title!</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
