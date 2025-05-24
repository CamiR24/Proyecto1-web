import React from 'react'
import Button from './Button'

const OperationButton = ({ operation, onPress, children, icon: Icon }) => (
    <Button
      onClick={() => onPress(operation)}
      className="operation-key"
    >
      <div className='key-content'>
        {Icon && <Icon size={18} />}
        {children}
      </div>
    </Button>
)

export default OperationButton