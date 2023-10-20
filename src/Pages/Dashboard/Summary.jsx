import React from 'react';

function Summary({ data }) {
  const categories = Object.keys(data);

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Summary</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category}>
                <td>{category}</td>
                <td>${data[category].reduce((total, transaction) => total + transaction.value, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
