import './SignUp.css'
import { NavLink } from 'react-router-dom';

const SignUp = () =>{
  return (
    <div className='signup'>

      <div className="container-fluid" id="SignUpScreen">
        <div className="row">
          <div className="col-md-6 signUpBackground">
            <div className="LargeScreenLogo">
              <img src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo'/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="splash-img">
              <img src={process.env.PUBLIC_URL+"/img/logos/happy.png"}  alt='logo'/>
            </div>
            <div className="loginTitle">
              <h3 className='text-dark text-center mt-4'>Welcome to mSwali</h3>
              <p className='text-dark text-center mt-4'>Enter your Username and Email to continue</p>
              <form method='POST'>
                <div className="form-group">
                  <input type="text"
                         className='form-control form-control-lg inputCustom mt-3'
                         placeholder='UserName'
                  />
                </div>
                <div className="form-group">
                  <input type="email"
                         className='form-control form-control-lg inputCustom mt-5'
                         placeholder='example@kq.co.ke'
                  />
                </div>
                <button type='submit' className='btn-custom-general'>Continue</button>
              </form>
              <NavLink to='/login'> Login </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SignUp