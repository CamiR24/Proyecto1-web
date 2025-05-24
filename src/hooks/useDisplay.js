const inputNumber = (display, setDisplay, waitingForOperand, setWaitingForOperand) => (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      if (display.length >= 9) return
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }
  
  export default inputNumber