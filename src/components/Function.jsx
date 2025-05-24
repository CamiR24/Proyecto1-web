import React from 'react'
import Button from './Button'

const FunctionButton = ({ onPress, children, icon: Icon, className = '' }) => (
    <Button
      onClick={onPress}
      className={`function-key ${className}`}
    >
      <div className="key-content">
        {Icon && <Icon size={18} />}
        {children}
      </div>
    </Button>
)

export default FunctionButton