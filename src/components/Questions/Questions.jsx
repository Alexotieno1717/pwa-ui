import React, { useContext } from 'react';
import { GameplayContext } from '../../context/gameplayContext';
import useGameplay from '../../hooks/useGameplay';
import './Questions.css';

function Questions() {

  const {sessionId} = useContext(GameplayContext)

  console.log(sessionId)

  

  return (
    <div className='container-fluid' id='questionsBackground'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-3" />
          <div className="col-md-6" id='questionSmallScreenBackground'>
            <div className="row">
              {/* Logo and Sound Icon */}
              <div className="col- col-md-8">
                <img className='questionsLogo' src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo' />
              </div>
              <div className="col- col-md-4">
                <i className='fas fa-music pt-4'>Sound Icon</i>
              </div>

              {/* Questions Timer */}
              <div className="progress timer bg-success p-3 mt-2">
                <div className="progress-bar text-white"></div>
                <i className='fas fa-clock'> Timer Icon</i>
              </div>

              {/* Question image */}
              <div className="questionImg">
                <img className='mt-3' src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Serengeti_sunset-1001.jpg" alt="Serengeti" />
              </div>
            </div>

            {/* Question Text */}
            <h5 className='text-center pt-3'>Serengeti National Park is in which country?</h5>

            {/* Questions Choices */}
            <div className="questionChoices">
              <h5 className='pt-2 pl-4 '>A. Uganda</h5>
            </div>
            <div className="questionChoices">
              <h5 className='pt-2 pl-4 '>B. Kenya</h5>
            </div>
            <div className="questionChoices">
              <h5 className='pt-2 pl-4 '>C. Tanzania</h5>
            </div>
            <div className="questionChoices">
              <h5 className='pt-2 pl-4 '>D. Rwanda</h5>
            </div>

          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  )
}

export default Questions