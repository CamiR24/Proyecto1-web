import React from 'react';
import Row from './Row';
import OperationButton from './Operation';
import { useCalculatorContext } from '../context/CalculatorContext'
import { Plus, Minus, X, Divide, Percent } from 'lucide-react'

const SecondRow = () => {
    const { performOperation } = useCalculatorContext()
    return (
        <Row>
            <OperationButton operation="/" onPress={performOperation} icon={Divide}> </OperationButton>
            <OperationButton operation="%" onPress={performOperation} icon={Percent}> </OperationButton>
            <OperationButton operation="/" onPress={performOperation} icon={Divide}> </OperationButton>
            <OperationButton operation="*" onPress={performOperation} icon={X}> </OperationButton>
            <OperationButton operation="-" onPress={performOperation} icon={Minus}> </OperationButton>
            <OperationButton operation="+" onPress={performOperation} icon={Plus}> </OperationButton>
        </Row>
    );
  };
export default SecondRow;