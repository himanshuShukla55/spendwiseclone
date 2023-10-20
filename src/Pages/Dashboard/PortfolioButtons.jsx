import React from 'react';

function PortfolioButtons({ portfolio, onPortfolioChange }) {
  const portfolioData = [
    { key: 'spending', label: 'Spending' },
    { key: 'savings', label: 'Savings' },
    { key: 'investing', label: 'Investing' },
    { key: 'assets', label: 'Assets' },
    { key: 'liabilities', label: 'Liabilities' },
  ];

  return (
    <div className="btn-group btn-group-toggle d-flex" data-toggle="buttons">
      {portfolioData.map((item) => (
        <label
          key={item.key}
          className={`btn ${portfolio === item.key ? 'btn-primary active' : 'btn-secondary'}`}
        >
          <input
            type="radio"
            name="portfolioOptions"
            id={item.key}
            autoComplete="off"
            onChange={() => onPortfolioChange(item.key)}
          /> {item.label}
        </label>
      ))}
    </div>
  );
}

export default PortfolioButtons;
