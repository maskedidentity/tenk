import React, { useState } from 'react';

const SavingsCalculator = () => {
  const [monthlySaving, setMonthlySaving] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [time, setTime] = useState('');
  const [totalSavings, setTotalSavings] = useState(null);

  const calculateSavings = () => {
    const result = (monthlySaving * time) + (monthlySaving * interestRate * time / 100);
    setTotalSavings(result);
  };

  return (
    <div>
      <h2>Savings Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Saving"
        value={monthlySaving}
        onChange={(e) => setMonthlySaving(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Time (months)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={calculateSavings}>Calculate</button>

      {totalSavings !== null && <h3>Total Savings: ${totalSavings}</h3>}
    </div>
  );
};

export default SavingsCalculator;
