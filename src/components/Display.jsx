import React, { useState, useEffect } from 'react';
import useTypewriterDisplay from '../hooks/useTypewriterDisplay';

const Display = ({ value }) => {
  const { displayText, showCursor } = useTypewriterDisplay(value);
  
    return (
      <div className="typewriter-display">
        <div className="paper">
          <div className="paper-content">
            <div className="calculation-text">
              {displayText}
              <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Display