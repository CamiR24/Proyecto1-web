import React from 'react'

const Button = ({ onClick, className = '', children, ...props }) => (
    <button
      className={`typewriter-key ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="key-top">
      <div className="key-face">
        {children}
      </div>
    </div>
    </button>
)

  export default Button