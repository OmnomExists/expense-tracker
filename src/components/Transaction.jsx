import React from "react";

const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const transactionClass = transaction.amount < 0 ? "expense" : "income";

  const handleDelete = () => {
    onDelete(transaction.id);
  };

  return (
    <li className={transactionClass}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Transaction;
