import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import SavingsCalculator from './SavingsCalculator';
import InvestmentTips from './InvestmentTips';

const App = () => {
  return (
    <div>
      <h1>PinkWallet - Financial Education for Women</h1>
      <ExpenseTracker />
      <SavingsCalculator />
      <InvestmentTips />
    </div>
  );
};

export default App;
