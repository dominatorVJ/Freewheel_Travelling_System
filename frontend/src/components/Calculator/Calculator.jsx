import React, { useState } from 'react';

const BudgetCalculator = () => {
  const [ticketPrice, setTicketPrice] = useState(0);
  const [cabPrice, setCabPrice] = useState(0);
  const [hotelCost, setHotelCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [additionalCosts, setAdditionalCosts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTotalCost = () => {
    const additionalCostsTotal = additionalCosts.reduce((total, cost) => total + cost, 0);
    const total = ticketPrice + cabPrice + hotelCost + foodCost + additionalCostsTotal;
    setTotalCost(total);
  };

  const handleAddCost = () => {
    setAdditionalCosts([...additionalCosts, 0]);
  };

  const handleCostChange = (index, value) => {
    const updatedCosts = [...additionalCosts];
    updatedCosts[index] = Number(value);
    setAdditionalCosts(updatedCosts);
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    margin: '0 auto',
    backgroundColor: '#ffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const inputStyles = {
    marginBottom: '1rem',
    padding: '0.5rem',
    width: '100%',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#eaf6ff',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const buttonStyles = {
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={containerStyles}>
        <h2 style={{ marginBottom: '1rem' }}>Budget Calculator</h2>
        <label>Ticket Price: </label>
        <input
          style={inputStyles}
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(Number(e.target.value))}
        />
        <label>Cab Price: </label>
        <input
          style={inputStyles}
          type="number"
          value={cabPrice}
          onChange={(e) => setCabPrice(Number(e.target.value))}
        />
        <label>Hotel Cost: </label>
        <input
          style={inputStyles}
          type="number"
          value={hotelCost}
          onChange={(e) => setHotelCost(Number(e.target.value))}
        />
        <label>Food Cost: </label>
        <input
          style={inputStyles}
          type="number"
          value={foodCost}
          onChange={(e) => setFoodCost(Number(e.target.value))}
        />
        <label>Additional Costs: </label>
        {additionalCosts.map((cost, index) => (
          <div key={index}>
            <input
              style={inputStyles}
              type="number"
              value={cost}
              onChange={(e) => handleCostChange(index, e.target.value)}
            />
          </div>
        ))}
        <button style={buttonStyles} onClick={handleAddCost}>
          Add Cost
        </button>
        <button style={buttonStyles} onClick={calculateTotalCost}>
          Calculate Total Cost
        </button>
        <p>Total Cost: {totalCost}</p>
      </div>
    </div>
  );
};

export default BudgetCalculator;
