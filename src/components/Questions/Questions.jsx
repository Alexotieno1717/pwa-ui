import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GameplayContext } from '../../context/gameplayContext';
import './Questions.css';

function Questions() {

  const {sessionId} = useContext(GameplayContext)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false)
  const [color, setColor] = useState('')
  const [clicked, setClicked] = useState(false)

  const TIME_LIMIT = 12;


  console.log(sessionId)

  

  const handleAnswerClick = (correct) =>{
    if (correct === 1) {
      setScore(score + 1);
      setClicked(true);
    }else if(correct === 0){
      setClicked(true)
      setScore(score);
    }
    setShow(true)

  }

  const goNextQuestion = () =>{
    setClicked(false)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < sessionId.length) {
      setCurrentQuestion(nextQuestion)
      setClicked(false)
    }else{
      setShowScore(true)
    }
  }



  

  return (
    <div className='container-fluid' id='questionsBackground'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-3" />
          <div className="col-md-6" id='questionSmallScreenBackground'>
            {showScore ? (
              <>
                <div className="score">Your Score is {score} out of 10</div>
                <Link to='/home' className='btn btn-info'>Home</Link>
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
                  // className={clicked && answerOption.correct === 1 ? "green" : "questionChoices" }
                  className={`questionChoices ${
                    clicked 
                    ? answerOption.correct === 1? "green" : "wrong"
                    : ""
                  }`}
                  key={index.id}
                  onClick={() => handleAnswerClick(answerOption.correct)}>
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