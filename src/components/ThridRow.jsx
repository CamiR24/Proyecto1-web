import React from 'react';
import Row from './Row';
import FunctionButton from './Function';
import Button from './Button';
import { useCalculatorContext } from '../context/CalculatorContext'
import { ArrowUpDown, Equal } from 'lucide-react'

const ThirdRow = () => {
    const { inputDecimal, clear, toggleSign, performOperation } = useCalculatorContext()
    return (
        <Row>
            <FunctionButton className="clear-key" onPress={clear}> Clear </FunctionButton>
            <FunctionButton className="sign-key" onPress={toggleSign}> +/- </FunctionButton>
            <Button onClick={inputDecimal} className="decimal-key"> . </Button>
            <Button onClick={() => performOperation('=')} className="decimal-key">
                <div className="text"> <Equal size={18} /> </div>
            </Button>
        </Row>
    );
  };
export default ThirdRow;