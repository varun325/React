import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>match 28th 2022</div>
      <div className="exepense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.59</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
