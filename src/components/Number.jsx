import React from 'react'
import Button from './Button'

const NumberButton = ({ number, onPress }) => (
    <Button
      onClick={() => onPress(number)}
      className="number-key"
    >
      {number}
    </Button>
)

export default NumberButton