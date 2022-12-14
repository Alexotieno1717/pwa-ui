import SideBar from '../Navigation/sidebar/SideBar';
import Navbar from '../Navigation/Navbar/Navbar';
import React from 'react';


function Share() {

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
        Share
      </main>

    </div>
  )

}

export default Share