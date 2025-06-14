const toggleSign = (display, setDisplay) => () => {
    if (display === '0') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else if (display.length < 9) {
      setDisplay('-' + display)
    }
  }
  
  export default toggleSign