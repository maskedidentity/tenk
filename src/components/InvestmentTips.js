import React from 'react';

const tips = [
  {
    title: 'Start Small, Think Big',
    description: 'Investing small amounts consistently can lead to great wealth over time.'
  },
  {
    title: 'Diversify Your Portfolio',
    description: 'Don’t put all your eggs in one basket. Spread your investments across different assets.'
  },
  {
    title: 'Invest for the Long-Term',
    description: 'The longer you invest, the more your investments have time to grow.'
  },
];

const InvestmentTips = () => {
  return (
    <div>
      <h2>Investment Tips for Women</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentTips;
