import React, { useState } from 'react';

function AddTransaction({ categories, category, onAddTransaction }) {
  const [transaction, setTransaction] = useState({ month: '', value: '', category: '' });

  const handleAdd = () => {
    if (transaction.month && transaction.value && transaction.category) {
      onAddTransaction(transaction);
      setTransaction({ month: '', value: '', category: '' });
    }
  }

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Add Transaction</h5>
        <div className="form-group">
          <label>Month</label>
          <input
            type="text"
            className="form-control"
            value={transaction.month}
            onChange={(e) => setTransaction({ ...transaction, month: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Value</label>
          <input
            type="number"
            className="form-control"
            value={transaction.value}
            onChange={(e) => setTransaction({ ...transaction, value: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            value={transaction.category}
            onChange={(e) => setTransaction({ ...transaction, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
