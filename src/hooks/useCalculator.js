import React from 'react'
import inputNumber from './useDisplay'
import inputDecimal from './useDecimal'
import clear from './useClear'
import toggleSign from './useToggleSign'
import performOperation from './useOperation'

const useCalculator = () => {
  const [display, setDisplay] = React.useState('0')
  const [previousValue, setPreviousValue] = React.useState(null)
  const [operation, setOperation] = React.useState(null)
  const [waitingForOperand, setWaitingForOperand] = React.useState(false)
  return {
    display,
    inputNumber: inputNumber(display, setDisplay, waitingForOperand, setWaitingForOperand),
    inputDecimal: inputDecimal(display, setDisplay, waitingForOperand, setWaitingForOperand),
    clear: clear(setDisplay, setPreviousValue, setOperation, setWaitingForOperand),
    toggleSign: toggleSign(display, setDisplay),
    performOperation: performOperation(
      display, setDisplay,
      previousValue, setPreviousValue,
      operation, setOperation,
      waitingForOperand, setWaitingForOperand
    )
  }
}
export default useCalculator
