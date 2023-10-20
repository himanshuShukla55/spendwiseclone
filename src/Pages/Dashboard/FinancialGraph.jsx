import React, { useState, useEffect } from 'react';

function FinancialGraph({ data }) {
  // Initialize the state with a default empty array if data is initially undefined
  const [transactions, setTransactions] = useState(data || []);
  const [editingId, setEditingId] = useState(null);

  // Use useEffect to update transactions when data prop changes
  useEffect(() => {
    if (data) {
      setTransactions(data);
    }
  }, [data]);

  const handleEdit = (id, value) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        return { ...transaction, value };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Financial Data</h5>
        <ul className="list-group">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="mr-4">{transaction.month}:</span>
              {editingId === transaction.id ? (
                <input
                  type="number"
                  className="form-control"
                  value={transaction.value}
                  onChange={(e) => handleEdit(transaction.id, e.target.value)}
                />
              ) : (
                <span>${transaction.value}</span>
              )}
              {editingId === transaction.id ? (
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(transaction.id, transaction.value)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => setEditingId(transaction.id)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(transaction.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FinancialGraph;
