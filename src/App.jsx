import React, { useState } from "react";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState({
    list: [],
    total: 0,
  });

  const addTransaction = (transaction) => {
    const updatedTransactions = {
      list: [...transactions.list, transaction],
      total: transactions.total + transaction.amount,
    };

    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (id) => {
    const deletedTransaction = transactions.list.find(
      (transaction) => transaction.id === id
    );

    const updatedTransactions = {
      list: transactions.list.filter((transaction) => transaction.id !== id),
      total: transactions.total - deletedTransaction.amount,
    };

    setTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <TransactionForm onAdd={addTransaction} />
    </div>
  );
}

export default App;
