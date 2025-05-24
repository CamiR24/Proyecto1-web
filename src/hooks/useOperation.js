import calculate from './calculate'

const performOperation = (
  display, setDisplay,
  previousValue, setPreviousValue,
  operation, setOperation,
  waitingForOperand, setWaitingForOperand
) => (nextOperation) => {
  const input = parseFloat(display)

  if (previousValue == null) {
    setPreviousValue(input)
  } else if (operation) {
    const result = calculate(previousValue, input, operation)
    if (isNaN(result) || result < 0 || result > 999999999) {
      setDisplay('ERROR')
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
      return
    }

    let output = String(result)
    if (output.length > 9) {
      const parts = output.split('.')
      if (parts[0].length > 9) {
        setDisplay('ERROR')
        setPreviousValue(null)
        setOperation(null)
        setWaitingForOperand(true)
        return
      }
      const allowed = 9 - parts[0].length - 1
      output = result.toFixed(Math.max(0, allowed))
      if (output.length > 9) output = parseFloat(output).toPrecision(9)
    }

    setDisplay(output)
    setPreviousValue(result)
  }

  setWaitingForOperand(true)
  setOperation(nextOperation)
}

export default performOperation