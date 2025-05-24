import React from 'react'
import Display from './components/Display'
import { useCalculatorContext } from './context/CalculatorContext'
import FirstRow from './components/FirstRow'
import SecondRow from './components/SecondRow'
import ThirdRow from './components/ThridRow'
import './styles/calculator.css'

export default function App() {
    const { display } = useCalculatorContext()
    return (
        <div className="typewriter-calculator">
            <div className="typewriter-body">
                <div className="brand-plate">
                    <div className="brand-text">CALCULADORA</div>
                    <div className="model-text">Model CR-2005</div>
                </div>
                <div className="calculator-header">
                    <Display value={display} />
                </div>
                <div className="keyboard-section">
                    <FirstRow />
                    <SecondRow />
                    <ThirdRow />
                    <div className="typewriter-feet">
                        <div className="foot left-foot"></div>
                        <div className="foot right-foot"></div>
                    </div>
                </div>
            </div>    
        </div>
    )
}