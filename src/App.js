import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './Pages/Dashboard/UserCard';
import PortfolioButtons from '/Pages/Dashboard/PortfolioButtons';
import FinancialGraph from './Pages/Dashboard/FinancialGraph';
import Summary from './Pages/Dashboard/Summary';
import AddTransaction from './Pages/Dashboard/AddTransaction';

function App() {
  const [userData, setUserData] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    walletNumber: '1234-5678-9012-3456',
    budget: 5000, // Initial budget
    accountBalance: 10000,
  });

  const [portfolio, setPortfolio] = useState('spending');
  const [financialData, setFinancialData] = useState({});
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Simulate fetching financial data from an API
    setTimeout(() => {
      const data = getInitialData();
      setFinancialData(data);
    }, 1000);
  }, []);

  // Update isMobileView state on window resize
  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const getInitialData = () => {
    return {
      spending: [
        { id: 1, month: 'Jan', value: 1000, category: 'Groceries' },
        { id: 2, month: 'Feb', value: 1200, category: 'Entertainment' },
        // Add more data...
      ],
      savings: [
        { id: 1, month: 'Jan', value: 1500, category: 'Savings' },
        { id: 2, month: 'Feb', value: 1600, category: 'Savings' },
        // Add more data...
      ],
      investing: [
        { id: 1, month: 'Jan', value: 800, category: 'Investing' },
        { id: 2, month: 'Feb', value: 950, category: 'Investing' },
        // Add more data...
      ],
      assets: [
        { id: 1, month: 'Jan', value: 20000, category: 'Assets' },
        { id: 2, month: 'Feb', value: 22000, category: 'Assets' },
        // Add more data...
      ],
      liabilities: [
        { id: 1, month: 'Jan', value: 5000, category: 'Liabilities' },
        { id: 2, month: 'Feb', value: 5500, category: 'Liabilities' },
        // Add more data...
      ],
      entertainment: [
        { id: 1, month: 'Jan', value: 300, category: 'Entertainment' },
        { id: 2, month: 'Feb', value: 500, category: 'Entertainment' },
        // Add more data...
      ],
      personalNeed: [
        { id: 1, month: 'Jan', value: 400, category: 'Personal Need' },
        { id: 2, month: 'Feb', value: 600, category: 'Personal Need' },
        // Add more data...
      ],
      desire: [
        { id: 1, month: 'Jan', value: 200, category: 'Desire' },
        { id: 2, month: 'Feb', value: 300, category: 'Desire' },
        // Add more data...
      ],
      loanToFriends: [
        { id: 1, month: 'Jan', value: 100, category: 'Loan to Friends' },
        { id: 2, month: 'Feb', value: 150, category: 'Loan to Friends' },
        // Add more data...
      ],
    };
  };

  const handlePortfolioChange = (newPortfolio) => {
    setPortfolio(newPortfolio);
  };

  const handleAddTransaction = (transaction) => {
    const { category, ...transactionData } = transaction;

    const updatedData = { ...financialData };
    updatedData[category] = [...updatedData[category], transactionData];
    setFinancialData(updatedData);

    // Update budget based on transactions
    const budgetChange = transactionData.value * (category === 'spending' ? -1 : 1);
    const newBudget = userData.budget + budgetChange;
    setUserData({ ...userData, budget: newBudget });
  };

  const handleRemoveTransaction = (category, id) => {
    const updatedData = { ...financialData };
    updatedData[category] = updatedData[category].filter((transaction) => transaction.id !== id);
    setFinancialData(updatedData);
  };

  const handleFundAccount = (amount) => {
    // Add funds to the account balance
    const newAccountBalance = userData.accountBalance + amount;
    setUserData({ ...userData, accountBalance: newAccountBalance });
  };

  const handleWithdraw = (amount) => {
    // Withdraw funds from the account balance
    const newAccountBalance = userData.accountBalance - amount;
    setUserData({ ...userData, accountBalance: newAccountBalance });
  };

  return (
    <div className="container mt-5">
      <UserCard
        username={userData.username}
        email={userData.email}
        walletNumber={userData.walletNumber}
        budget={userData.budget}
        accountBalance={userData.accountBalance}
      />
      <div className="row">
        <div className={isMobileView ? "col-12" : "col-md-4"}>
          <PortfolioButtons portfolio={portfolio} onPortfolioChange={handlePortfolioChange} />
          <AddTransaction
            categories={Object.keys(financialData)}
            category={portfolio}
            onAddTransaction={handleAddTransaction}
          />
          <div className="mt-4">
            <button
              className="btn btn-success"
              onClick={() => handleFundAccount(1000)}
            >
              Fund Account
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => handleWithdraw(500)}
            >
              Withdraw
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <FinancialGraph
            data={financialData[portfolio]}
            onRemoveTransaction={(id) => handleRemoveTransaction(portfolio, id)}
          />
        </div>
      </div>
      <Summary data={financialData} />
    </div>
  );
}

export default App;
