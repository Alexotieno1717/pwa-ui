import React, { useEffect, useState } from 'react';

import './Home.css';
import SideBar from '../Navigation/sidebar/SideBar';
import Navbar from '../Navigation/Navbar/Navbar';
import axios from 'axios';
import { useContext } from 'react';
import { GameplayContext } from '../../context/gameplayContext';
import  imageData  from '../../assets/data.png';

function Home() {
  const user = JSON.parse(localStorage.getItem('userSaved'))
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  //const [sessionId, handleGamePlay] = useGameplay({})

  const {sessionId, handleGamePlay} = useContext(GameplayContext)


  const getTopPlayers = () => {
    axios.get('tournament-play/get-top-performers')
      .then(res => {
        setPlayers(res.data.data) 

      }).catch((err) => {
      console.log(err)
    })
  }

  const getTopTeams = () => {
    axios.get('tournament-play/get-top-teams')
      .then(res => {
        console.log(res.data)
        setTeams(res.data)
        

      }).catch((err) => {
      console.log(err)
    })
  }

  // const gamePlay = (sessionGameId) =>{
  //   axios
  //   .get(`solo-play/get-solo-session&user_id=${user.data.id}`)
  //   .then(res => {
  //     // console.log(res.data.session.id)
  //     setSessionId(res.data.session)

  //     axios.get(`solo-play/fetch-questions&session_id=${sessionGameId}`).then(response => {
  //       // console.log(`solo-play/fetch-questions&session_id=${sessionGameId}`)
  //       console.log(response.data)
  //       if (response.data.status === 200) {
  //         navigate('/questions');
  //       }
  //     }).catch((error) => console.log(error) )
  //   })
  // } 

   // Run fetchData when page loads
   useEffect(() => {
    getTopPlayers();
    getTopTeams();
    // gamePlay();
  }, [])


  return (
      <div className='container-fluid'>

      {/* Bigger Screen */}


      <div className='container-fluid bigHomepageScreen'>
        <div className='row'>
          <div className='col-md-12'>
            {/*Main Navigation*/}
            <header>
              {/*Sidebar*/}
              <SideBar />

              {/*Navbar*/}
              <Navbar className='pb-2' />
            </header>
            {/*Main layout*/}
            <main>
              <div className="container pt-5">
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'/>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-4'/>
                  </div>
                </div>
                {/*<h1 className='pt-5'> HomePage content goes in here ....</h1>*/}

                <div className='container'>
                  <div className='row'>
                    <div className="col-md-12">
                    <button className='btn btnPlayBigScreen mt-5' onClick={() => handleGamePlay()}>
                      {/* Wait for Admin to Start the Session */}
                      Session is Live: PLAY & WIN 
                    </button>
                    </div>
                    <div className='col-md-2'/>
                    <div className='col-md-8'>
                      <div className='homeName pt-5 mt-5'>
                        <h4>Morning {user.data.name}!</h4>
                      </div>
                      <div className='roundBackground'>
                        <h2>Rounds : 3 </h2>
                      </div>
                    </div>
                    <div className='col-md-2'/>
                  </div>
                </div>

                {/* Tabs Navigation */}
                <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                            aria-selected="true"><i className='fa fa-user pr-2'/> Top Players
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                            aria-selected="false"> <i className='fa fa-users pr-2'/> Top Teams
                    </button>
                  </li>
                </ul>

                {/* Tabs content */}
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                       aria-labelledby="home-tab" tabIndex="0">
                    <div className='container-fluid'>
                      <table className="table">
                        <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Score</th>
                        </tr>
                        </thead>
                        <tbody>
                          {players ?
                            players.map(player => (
                              <tr key={player.name}>
                                <th scope="row">1</th>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                              </tr>
                            ))
                            :
                            <>
                              <tbody>
                                <tr>                                  
                                  <img src={imageData} className="no-data mt-4" alt="No data" />
                                 
                                </tr>
                              </tbody>
                            </>
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                       tabIndex="0">
                    <div className='container-fluid'>
                      <table className="table">
                        <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Team Name</th>
                          <th scope="col">Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* {teams ?
                          teams.map(team => (
                            <tr key={team.team_name}>
                              <th scope="row">1</th>
                              <td>{team.team_name}</td>
                              <td>{team.score}</td>
                            </tr>
                          ))
                        :
                          <>
                            <div>No Teams</div>
                          </>
                        } */}

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Small Screen Phone Size */}
      <div className='container-fluid smallHomepageScreen'>
        <div className='smallBackground'>
          <div className='row'>
            <div className='col-10 col-sm-8 pt-4'>
              <div className='headerContentHome d-flex'>
                <img className='homeImage' src={process.env.PUBLIC_URL+"/img/logos/Ellipse.png"}  alt='home-profile'/>
                <h3 className='homeSalutation pt-4'>Good morning JohnDoe
                  <p className='pt-3'>
                    <i className='fa fa-calendar'/> 28 July, 2022
                  </p>
                </h3>
              </div>

            </div>
            <div className='col-2 col-sm-4'>
              <div className='bell'>
                <i className='fa fa-3x fa-bell text-white icon-bell'/>
              </div>
            </div>
          </div>

          {/* Play Quiz Button */}
          <button className='btn playQuiz'  onClick={() => handleGamePlay(sessionId.id)}>
            Session is Live: PLAY & WIN 
            <i className='fa fa-arrow-right '/>
          </button>
        </div>
      </div>

      </div>
  )
}

export default Home