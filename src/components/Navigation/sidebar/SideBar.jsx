import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBar.css'
import { useNavigate } from 'react-router';
import { LogOutSuccessAlert } from '../../../utils/alerts';

function SideBar() {

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault()

    // CLEAR DATA FROM STORAGE
    // localStorage.clear();
    sessionStorage.clear();

    navigate("/login");

    // Alert message for login out
    LogOutSuccessAlert( )
  }

  return(
    <div className='container-fluid'>
    {/* side bar menu */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <NavLink to='/home'
                     aria-current="true"
                     className={({ isActive, isPending }) =>
                       isActive
                         ? "active01"
                         :isPending
                         ? "pending"
                         : "list-group-item list-group-item-action py-2 ripple"
                     }
            >
              <i className='fas fa-tachometer-alt fa-fw me-3'/><span>Main dashboard</span>
            </NavLink>

            <NavLink to='/leaderboard'
                     aria-current="true"
                     className={({ isActive, isPending }) =>
                       isActive
                         ? "active01"
                         :isPending
                         ? "pending"
                         : "list-group-item list-group-item-action py-2 ripple"
                     }

            >
              <i className='fas fa-users fa-fw me-3'/><span>Leaderboard</span>
            </NavLink>

            <NavLink to='/my-team'
                     aria-current="true"
                     className={({ isActive, isPending }) =>
                       isActive
                         ? "active01"
                         :isPending
                         ? "pending"
                         : "list-group-item list-group-item-action py-2 ripple"
                     }

            >
              <i className='fas fa-user-plus fa-fw me-3'/><span>My Team</span>
            </NavLink>

            <NavLink to='/support'
                     aria-current="true"
                     className={({ isActive, isPending }) =>
                       isActive
                         ? "active01"
                         :isPending
                         ? "pending"
                         : "list-group-item list-group-item-action py-2 ripple"
                     }

            >
              <i className='fas fa-headset fa-fw me-3'/><span>Support</span>
            </NavLink>

            <NavLink to='/share'
                     aria-current="true"
                     className={({ isActive, isPending }) =>
                       isActive
                         ? "active01"
                         :isPending
                         ? "pending"
                         : "list-group-item list-group-item-action py-2 ripple"
                     }

            >
              <i className='fas fa-share fa-fw me-3'/><span>Share</span>
            </NavLink>

            <NavLink to='/feedback'
                     aria-current="true"
                     className={({ isActive, isPending }) =>
                       isActive
                         ? "active01"
                         :isPending
                         ? "pending"
                         : "list-group-item list-group-item-action py-2 ripple"
                     }

            >
              <i className='fas fa-comments fa-fw me-3'/><span>Feedback</span>
            </NavLink>

            <NavLink to='#'
                     aria-current="true"
                     className="pending"
                     onClick={logout}

            >
              <i className='fas fa-arrow-circle-right fa-fw me-3'/><span>Log Out</span>
            </NavLink>
          </div>
        </div>
      </nav>

    {/*  end Side bar*/}
    </div>
  );

}

export default SideBar