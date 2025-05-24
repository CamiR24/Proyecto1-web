const inputDecimal = (display, setDisplay, waitingForOperand, setWaitingForOperand) => () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.') && display.length < 9) {
      setDisplay(display + '.')
    }
  }
  
  export default inputDecimal