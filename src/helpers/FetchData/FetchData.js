// import React from 'react';


// export const useFetch = (url, options) => {
//   const [response, setResponse] = React.useState({});
//   const [error, setError] = React.useState({});
//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url, options);
//         const json = await res.json();
//         setResponse(json);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     fetchData();
//   }, [options, url]);
//   return { response, error };
// };

import React, { useState, useEffect } from "react";
import CircleTimer from "react-circle-timer";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [timeoutAnswers, setTimeoutAnswers] = useState(0);
  const [isTimedOut, setIsTimedOut] = useState(false);

  useEffect(() => {
    if (isTimedOut) {
      setTimeoutAnswers(timeoutAnswers + 1);
      setCurrentQuestion(currentQuestion + 1);
      setIsTimedOut(false);
    }
  }, [isTimedOut, currentQuestion, timeoutAnswers]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setRightAnswers(rightAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion === questions.length) {
    return (
      <div>
        <p>Right answers: {rightAnswers}</p>
        <p>Wrong answers: {wrongAnswers}</p>
        <p>Timeout answers: {timeoutAnswers}</p>
      </div>
    );
  }

  return (
    <div>
      <CircleTimer
        key={currentQuestion}
        isPlaying
        duration={30}
        onTimeOut={() => setIsTimedOut(true)}
      />
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].answers.map((answer) => (
        <button key={answer} onClick={() => handleAnswer(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
