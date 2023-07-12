import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, onDelete }) => {
  const { list, total } = transactions;

  return (
    <div>
      <h2>Transaction List</h2>
      <ul className="transaction-list">
        {list.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total:</span>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default TransactionList;
