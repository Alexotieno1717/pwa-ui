import React from 'react';


function Navbar() {

  return (
    <div>
      <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/*Container wrapper*/}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className='fas fa-bars'/>
          </button>
          {/*Brand*/}
          <div className='row'>
            <div className='col-md-5'>
              <a className="navbar-brand" href="http://localhost:3000/">
                <img src={process.env.PUBLIC_URL+"/img/logos/mSwali-purple.png"}  alt='mswali logo'/>
              </a>
            </div>
            <div className='col-md-5'>
              <button className='btn btnPlayBigScreen'>Wait for Admin to Start the Session
              </button>
            </div>
            <div className='col-md-2'>
              {/*Right links*/}
              <ul className="navbar-nav avatar-nav ms-auto d-flex flex-row">
                {/*Avatar*/}
                <li className="nav-item">
                  <a
                    className="nav-link hidden-arrow d-flex align-items-center"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    @JohnDoe
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                      className="rounded-circle pl-2 pr-2"
                      height="22"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>




        </div>
        {/*End Container wrappe*/}
      </nav>
    </div>
  );
}

export default Navbar