import React from 'react';
import Row from './Row';
import NumberButton from './Number';
import { useCalculatorContext } from '../context/CalculatorContext'

const FirstRow = () => {
    const { inputNumber } = useCalculatorContext()
    return (
        <Row>
            <NumberButton number={0} onPress={inputNumber} />
            <NumberButton number={1} onPress={inputNumber} />
            <NumberButton number={2} onPress={inputNumber} />
            <NumberButton number={3} onPress={inputNumber} />
            <NumberButton number={4} onPress={inputNumber} />
            <NumberButton number={5} onPress={inputNumber} />
            <NumberButton number={6} onPress={inputNumber} />
            <NumberButton number={7} onPress={inputNumber} />
            <NumberButton number={8} onPress={inputNumber} />
            <NumberButton number={9} onPress={inputNumber} />
        </Row>
    );
  };
export default FirstRow;