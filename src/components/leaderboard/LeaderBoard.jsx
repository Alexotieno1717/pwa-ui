import React, { useEffect, useState } from 'react';
import SideBar from '../Navigation/sidebar/SideBar';
import Navbar from '../Navigation/Navbar/Navbar';
import  imageData  from '../../assets/data.png';
import axios from 'axios';


function LeaderBoard() {

    const [players, setPlayers] = useState([])
    const [teams, setTeams] = useState([])

    // Run fetchData when page loads
    useEffect(() => {
      getTopPlayers();
      getTopTeams();
    }, [])

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
        setTeams(res.data)

      }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='container-fluid'>
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
                      {/* {teams.map(team => (
                        <tr key={team.team_name}>
                          <th scope="row">1</th>
                          <td>{team.team_name}</td>
                          <td>{team.score}</td>
                        </tr>
                      ))} */}
                      </tbody>
                    </table>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard