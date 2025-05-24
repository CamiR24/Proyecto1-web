const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return b !== 0 ? a / b : NaN
      case '%': return a % b
      default: return b
    }
  }
  
  export default calculate