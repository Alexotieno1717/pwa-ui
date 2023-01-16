import React, { useState } from 'react';
import { useEffect } from 'react';
import './Timer.css';

const Timer = () =>{

  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 7;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };
  const TIME_LIMIT = 12;
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);

  function circleDasharray() {

    return `${((timeRemaining / TIME_LIMIT) * FULL_DASH_ARRAY).toFixed(0)} 283`;
    

  }

  function remainingPathColor() {
    const { alert, warning, info } = COLOR_CODES;
    
      if (timeRemaining <= alert.threshold) {
        return alert.color;
      } else if (timeRemaining <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining => {
          if (timeRemaining > 0) {
              return timeRemaining - 1;
          } else {
              clearInterval(interval);
              return 0;
          }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
            strokeDasharray={circleDasharray()} 
            className={`${remainingPathColor()} base-timer__path-remaining`}     
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