import { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const bill = parseFloat(billAmount);
  const validBill = isNaN(bill) ? 0 : bill;
  const validPeople = numberOfPeople > 0 ? numberOfPeople : 1;

  const calculateTip = () => {
    return (validBill * tipPercentage) / 100;
  };

  const calculateTotal = () => {
    return validBill + calculateTip();
  };

  const calculatePerPerson = () => {
    return calculateTotal() / validPeople;
  };

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>

      <div className="input-group">
        <label>Bill Amount ($)</label>
        <input
          type="number"
          step="0.01"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Tip Percentage (%)</label>
        <select
          value={tipPercentage}
          onChange={(e) => setTipPercentage(parseInt(e.target.value))}
        >
          <option value={15}>15% (Standard)</option>
          <option value={18}>18% (Good)</option>
          <option value={20}>20% (Excellent)</option>
        </select>
      </div>

      <div className="input-group">
        <label>Number of People</label>
        <input
          type="number"
          min="1"
          value={numberOfPeople}
          onChange={(e) =>
            setNumberOfPeople(Math.max(1, parseInt(e.target.value) || 1))
          }
        />
      </div>

      <div className="results">
        <h3>Results</h3>
        <p>Tip Amount: <strong>${calculateTip().toFixed(2)}</strong></p>
        <p>Total Bill: <strong>${calculateTotal().toFixed(2)}</strong></p>
        <p>Per Person: <strong>${calculatePerPerson().toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default TipCalculator;
