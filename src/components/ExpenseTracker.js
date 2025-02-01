import React, { useState, useEffect } from 'react';
import { db } from './firebase';

const ExpenseTracker = () => {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState([]);
  
  // Fetch expenses from Firestore
  useEffect(() => {
    const unsubscribe = db.collection('expenses')
      .onSnapshot(snapshot => {
        setExpenses(snapshot.docs.map(doc => doc.data()));
      });
    return () => unsubscribe();
  }, []);

  const addExpense = () => {
    db.collection('expenses').add({
      income: parseFloat(income),
      expense: parseFloat(expense),
      category: category
    });
    setIncome('');
    setExpense('');
    setCategory('');
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={addExpense}>Add Expense</button>

      <h3>Expenses List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: {expense.expense}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
