import React from 'react'

import './Home.css';

function Home() {
  return (
      <div className='container-fluid'>

      {/* Bigger Screen */}

      <div className='container-fluid bigHomepageScreen'>
        <div className='row'>
          <div className='col-md-3'>
            <h1> Navigation Goes in here..... (Side bar) </h1>
          </div>
          <div className='col-md-9'>
            <h1> HomePage content goes in here ....</h1>
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
          <button className='btn playQuiz'>
            Wait for Admin to Start the Session
            <i className='fa fa-arrow-right '/>
          </button>
        </div>
      </div>

      </div>
  )
}

export default Home