const clear = (setDisplay, setPreviousValue, setOperation, setWaitingForOperand) => () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }
  
  export default clear