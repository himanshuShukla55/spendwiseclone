import React from 'react';

function UserCard({ username, email, walletNumber, budget, accountBalance }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">Wallet Number: {walletNumber}</p>
        <p className="card-text">Budget: ${budget}</p>
        <p className="card-text">Account Balance: ${accountBalance}</p>
      </div>
    </div>
  );
}

export default UserCard;
////