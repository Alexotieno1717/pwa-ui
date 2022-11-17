import React, { useContext, useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Link } from 'react-router-dom';
import { GameplayContext } from '../../context/gameplayContext';
import { CorrectAnswer, TimeOutAnswer, WrongAnswer } from '../../utils/alerts';
import './Questions.css';

function Questions() {

  const TIME_LIMIT = 12;

  const {sessionId} = useContext(GameplayContext)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false)
  const [choiceId, setChoiceId] = useState('')
  const [clicked, setClicked] = useState(false)
  const [wrong, setWrong] = useState(0)
  // const [time, setTime] = useState(TIME_LIMIT)
  const [counter, setCounter] = React.useState(TIME_LIMIT);
  const [isActive, setIsActive] = React.useState(true);



  


  console.log(sessionId)  

  const handleAnswerClick = (correct, choiceId) =>{
      setChoiceId(choiceId)
      setShow(true)
    if (correct === 1) {
      setScore(score + 1);
      setClicked(true);
      CorrectAnswer();
      // setIsActive(true)

    }else if(correct === 0){
      setClicked(true)
      // setScore(score);
      setWrong( )

      WrongAnswer()  // Alert when user click wrong Answer
    }else{  
      TimeOutAnswer() // Alert when Time out
    }

    

  }

  const goNextQuestion = () =>{
    setClicked(false)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < sessionId.length) {
      setCurrentQuestion(nextQuestion)
      setClicked(false)
      setCounter(TIME_LIMIT)
    }else{
      setShowScore(true)
    }
  }

  // const startOver = () => {
  //   setCurrentQuestion(0);
  //   setFinish(false);
  //   setMyAnswer("");
  //   setScore(0);
  // };

  

  const renderTime = ({ remainingTime }) => {
    if ({ remainingTime } === 0) {
      alert("Time's Up!...");
      alert("Time's Up!...");
    }
    return (
      <div className="timer">
        <div className="text">Time</div>
        <div className="value">{counter}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  

  useEffect(() => {
    if (isActive) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else if (!isActive && counter !== 0) {
      clearInterval(counter);
    }
  }, [counter, isActive]);

  return (
    <div className='container-fluid' id='questionsBackground'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-3" />
          <div className="col-md-6" id='questionSmallScreenBackground'>
            {showScore ? (
              <>
                <img className='questionsLogo pt-5 mt-5' src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo' />
                <h4 className='pt-5'>Awesome try on your quiz</h4>
                <p> <i className='fas fa-check-circle' /> Correct : {score} </p>
                <p> <i className='fas fa-times-circle' /> Failed : {wrong}</p>
                <p> <i className='fas fa-clock' /> Timeout : 0</p>
                <div className="score">Points Earned : {score * 10}  </div>
                <button className='btn btn-lg btn-warning'>Play Again</button>
                <br />
                <Link to='/home' className='btn btn-link'>Go to Homepage </Link>
              </>
            ) : (
              <>
              <div className="row">
              {/* Logo and Sound Icon */}
              <div className="col- col-md-8">
                <img className='questionsLogo' src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo' />
              </div>
              <div className="col- col-md-4">
                <i className='fas fa-music pt-4'>Sound Icon</i>
              </div>

              {/* Questions progress bar */}
              <h5 className='text-center pt-3'>Question {currentQuestion + 1} / {sessionId.length}</h5>

              {/* Questions Timer */}
              <div className="progress timer bg-success p-3 mt-2">
                <div className="progress-bar text-white"></div>
                <i className='fas fa-clock'> Timer Icon</i>
                <span className="text-white"> 0:</span>

              </div>
              <div id="pomodoro-timer">
                {" "}
                <CountdownCircleTimer
                  onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                  isPlaying
                  duration={counter}
                  colors={[
                    ['#0BFFED', 0.33],
                    ['#0BFFED', 0.33],
                    ['#0BFFED', 0.33],
                  ]}
                  strokeWidth={6}
                  size={220}
                  trailColor="#D9D9D9"
                >
                  {renderTime}
                </CountdownCircleTimer>
              </div>

              {/* Question image */}
              <div className="questionImg">
                <img className='mt-3' src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Serengeti_sunset-1001.jpg" alt="Serengeti" />
              </div>
            </div>

            {/* Question Text */}
            <h5 className='text-center pt-3'>{sessionId[currentQuestion].question}</h5>

            {/* Questions Choices */}
            {sessionId[currentQuestion].choices.map((answerOption, index) => (
                <div 
                  className={`questionChoices ${choiceId === answerOption.id && clicked === true && answerOption.correct === 1 && "green"}  
                  ${choiceId === answerOption.id && clicked === true && answerOption.correct === 0 && "wrong"}
                  ${choiceId !== answerOption.id && clicked === true && answerOption.correct === 1 && "green"}`}
                  key={index.id}
                  onClick={() => handleAnswerClick(answerOption.correct, answerOption.id)}>
                <h5 className='pt-2 pl-4 '>
                  {answerOption.choice}. {answerOption.answer_text} 
                </h5>
              </div>
              
            ))}

            {show ? 
            <div
                onClick={() => goNextQuestion()}
                className="next-button"
            >
              Next question
            </div>
            : null
            }
            

            </>
            )}

          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  )
}

export default Questions