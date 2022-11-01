import SideBar from '../Navigation/sidebar/SideBar';
import Navbar from '../Navigation/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import './MyTeam.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function MyTeam() {

  const user = JSON.parse(localStorage.getItem('userSaved'))

  const [getTeams, setGetTeams] = useState([])
  const [joinTeam, setJoinTeam] = useState([])
  const [teams, setTeams] = useState([])

  // Run fetchData when page loads
  useEffect(() => {
    getAllTeams();
    checkMemberShip();
    // addMemberToTeam();
  }, [])

  // function 1for getting the teams
  const getAllTeams = () =>{
    axios.get('tournament-play/get-tournament')
      .then(res => {
        setGetTeams(res.data.teams)
        // console.log(res.data.teams)
        // localStorage.setItem('teams', JSON.stringify(res.data.teams))
        setTeams(res.data.teams)

      }).catch((err) => {
        console.log(err)
    })
  }


  const checkMemberShip = () => {
    axios
      .get(`tournament-play/check-membership&user_id=${user.data.id}`)
      .then(res => {
        if (res.status === false){
          // console.log(getAllTeams())
          getAllTeams()
        }
        else {
          console.log("Not a member")
          getAllTeams()
        }
      })
  }

  const addMemberToTeam = (teamID) =>{
    axios.post(`tournament-play/add-member&user_id=${user.data.id}&team_id=${teamID}`)
      .then(response => {
        console.log(response.data)
        setJoinTeam(response.data)
      })
  }

  return(
    <div className="container-fluid">
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
              <div className='col-md-1'/>
              <div className='col-md-8'>
                <div className='myTeamContent pt-5'>
                  <h4>Tournament</h4>

                  {joinTeam?.message?.length < 1 ? (
                    <>
                    <p>Below are the registered teams under this tournament</p>
                    <div className="myTeamBackground">
                      <div className='row'>
                        {/*{joinTeam.message}*/}
                        {getTeams.map((team, index )=> (
                          <div className='row' key={index}>
                            <div className="col-md-8" >
                              <h5>{team.team_name}</h5>
                              <p>Status : {(team.game_on === 1) ? 'Live' : 'Not Live'} </p>
                            </div>
                            <div className='col-md-4'>
                              <button
                                className='btn btn-Join'
                                onClick={() => addMemberToTeam(team.id)}
                              >Join Team</button>
                            </div>
                            <hr className='myTeamHr'/>
                          </div>
                        ))}
                      </div>
                    </div>
                    </>
                  ) : (
                    <>
                      {joinTeam?.message}
                      <br/>
                      <Link to="/leaderboard">View Team Score</Link>
                    </>
                  )}
                </div>

                    {/*<p>Below are the registered teams under this tournament</p>*/}
                    {/*<div className="myTeamBackground">*/}
                    {/*  <div className='row'>*/}
                    {/*    {joinTeam.message}*/}
                    {/*    {getTeams.map((team, index )=> (*/}
                    {/*      <div className='row' key={index}>*/}
                    {/*        <div className="col-md-8" >*/}
                    {/*          <h5>{team.team_name}</h5>*/}
                    {/*          <p>Status : {(team.game_on === 1) ? 'Live' : 'Not Live'} </p>*/}
                    {/*        </div>*/}
                    {/*        <div className='col-md-4'>*/}
                    {/*          <button*/}
                    {/*            className='btn btn-Join'*/}
                    {/*            onClick={() => addMemberToTeam(team.id)}*/}
                    {/*          >Join Team</button>*/}
                    {/*        </div>*/}
                    {/*        <hr className='myTeamHr'/>*/}
                    {/*      </div>*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                    {/*</div>*/}


                {joinTeam ? (
                  <>
                    <p>Below are the registered teams under this tournament</p>
                    <div className="myTeamBackground">
                      <div className='row'>
                        {joinTeam.message}
                        {getTeams.map((team, index )=> (
                          <div className='row' key={index}>
                            <div className="col-md-8" >
                              <h5>{team.team_name}</h5>
                              <p>Status : {(team.game_on === 1) ? 'Live' : 'Not Live'} </p>
                            </div>
                            <div className='col-md-4'>
                              <button
                                className='btn btn-Join'
                                onClick={() => addMemberToTeam(team.id)}
                              >Join Team</button>
                            </div>
                            <hr className='myTeamHr'/>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {joinTeam.message}
                    <br/>
                    <Link to="/leaderboard">View Team Scores Leaderboard</Link>
                  </>
                )}



              </div>
              <div className='col-md-1'/>
            </div>
          </div>
        </div>
      </main>

    </div>
  )

}

export default MyTeam