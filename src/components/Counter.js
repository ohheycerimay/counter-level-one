import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 32px auto;
  width: 300px;
  padding: 24px;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const CounterTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const CounterValue = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #555;
`;

const CounterButton = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #0077ff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #005ae6;
  }
`;

const Counter = () => {
  const [count, setCount] = useState(() => Number(localStorage.getItem('count') || 0));
  
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return (
    <CounterContainer>
      <CounterTitle>Counter:</CounterTitle>
      <CounterValue>{count}</CounterValue>
      <CounterButton onClick={increment}>+</CounterButton>
      <CounterButton onClick={decrement}>-</CounterButton>
    </CounterContainer>
  );
};

export default Counter;