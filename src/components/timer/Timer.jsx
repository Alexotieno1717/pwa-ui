import React from 'react';
import './Timer.css';

const Timer = ({circleDasharray, remainingPathColor, timeRemaining}) =>{
  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle
            className='base-timer__path-elapsed'
            cx='50'
            cy='50'
            r='45'
          />
          <path
            strokeDasharray={circleDasharray} 
            className={`${remainingPathColor} base-timer__path-remaining`}     
            d='
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            '
          />
      </g>
      </svg>
      <div className="base-timer__label">{timeRemaining}</div>
    </div>
  )
}

export default Timer