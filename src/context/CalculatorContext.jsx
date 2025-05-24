import React, { createContext, useContext } from 'react';
import useCalculator from '../hooks/useCalculator';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const calculator = useCalculator();
  return (
    <CalculatorContext.Provider value={calculator}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => useContext(CalculatorContext);