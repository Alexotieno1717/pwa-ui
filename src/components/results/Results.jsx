// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { GameplayContext } from '../../context/gameplayContext'

// function Results() {
//     const {sessionId, handleGamePlay} = useContext(GameplayContext)

//   return (
//     <div>
//         <img className='questionsLogo pt-5 mt-5' src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo' />
//         <h4 className='pt-5'>Awesome try on your quiz</h4>
//         {/* <p> <i className='fas fa-check-circle' /> Correct : {score} </p> */}
//         {/* <p> <i className='fas fa-times-circle' /> Failed : {sessionId.length - score}</p> */}
//         <p> <i className='fas fa-clock' /> Timeout : 0</p>
//         {/* <div className="score">Points Earned : {score * 10}  </div> */}
//         <button className='btn btn-lg btn-warning' onClick={() => handleGamePlay(sessionId.id)} >Play Again</button>
//         <br />
//         <Link to='/home' className='btn btn-link'>Go to Homepage </Link>
//     </div>
//   )
// }

// export default Results