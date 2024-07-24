import React from 'react';
import CartCounter from 'react-cart-counter';
import './App.css';

const App: React.FC = () => {
  const handleCountChange = (count: number) => {
    console.log('Cart count:', count);
  };

  return (
    <CartCounter
      initialCount={1}
      minCount={0}
      maxCount={10}
      step={1}
      onCountChange={handleCountChange}
      incrementLabel="+"
      decrementLabel="-"
      className="cart-counter"
      style={{ display: 'flex', alignItems: 'center' }}
      buttonStyle={{ margin: '0 5px' }}
      inputStyle={{ textAlign: 'center', width: '50px' }}
    />
  );
};

export default App;
