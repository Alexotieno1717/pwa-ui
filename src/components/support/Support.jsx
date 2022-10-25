import SideBar from '../Navigation/sidebar/SideBar';
import Navbar from '../Navigation/Navbar/Navbar';
import React from 'react';
import './Support.css';


function Support() {


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
                  <h4>Support</h4>
                  <div className='supportBackground'>
                    <h3>Need Help?</h3>
                    <div>Give us a call at :
                      <div className='phoneIcon'>
                        <br/>
                        <i className='fa fa-phone-square'> +254 794 583 651 </i>
                        <br/>
                        <i className='fa fa-phone-square'> +254 783 397 397 </i>
                      </div>
                    </div>

                    <p>or reach out to us via our socials</p>
                    <div>
                      <a href='https://wa.me/254794583651' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-whatsapp-square socialIcons'/>
                      </a>
                      <a href='https://www.instagram.com/mswali_ke/' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-instagram-square socialIcons'/>
                      </a>
                      <a href='https://www.twitter.com/mswali_ke/' target='_blank' rel="noopener noreferrer">
                        <i className='fab fa-twitter-square socialIcons'/>
                      </a>
                    </div>
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

export default Support