import SideBar from '../Navigation/sidebar/SideBar';
import Navbar from '../Navigation/Navbar/Navbar';
import React from 'react';
import './MyTeam.css';


function MyTeam() {

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
                  <p>Below are the registered teams under this tournament</p>
                </div>

                <div className="myTeamBackground">
                  <div className='row'>
                    <div className='col-md-8'>
                      <h5>OTM OLIVE</h5>
                      <p>Status : Active</p>
                    </div>
                    <div className='col-md-4'>
                      <button className='btn btn-Join'>Join Team</button>
                    </div>

                    <hr className='myTeamHr'/>

                    {/*Row Two*/}
                    <div className='col-md-8'>
                      <h5>Monkey Kingdom</h5>
                      <p>Status : Active</p>
                    </div>
                    <div className='col-md-4'>
                      <button className='btn btn-Join'>Join Team</button>
                    </div>

                    <hr className='myTeamHr'/>

                    {/*Row Three*/}
                    <div className='col-md-8'>
                      <h5>Travellers Sacco</h5>
                      <p>Status : Not Live</p>
                    </div>
                    <div className='col-md-4'>
                      <button className='btn btn-Join'>Join Team</button>
                    </div>

                    <hr className='myTeamHr'/>

                  </div>
                </div>
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