import './SignUp.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ExistingUser, SignUpSuccessAlert } from '../../../utils/alerts';

const SignUp = () =>{

  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('');


  const signUpUser = (e) =>{
    e.preventDefault()
    axios
      .post(`corporate-tunnel/create-user&username=${userName}&email=${emailAddress}`)
      .then((response) => {
        if (response.data.status_message === 'saved successfully'){
          axios.get(`corporate-tunnel/generate-otp&email=${emailAddress}`).then(r => {
            SignUpSuccessAlert(response.data.message)
            console.log("Otp send successful to your email")
            navigate('/otp');
          })
        }else {
          ExistingUser(response.data.message)
          console.log("User with this email exits... Login in to access your account")
          navigate('/login');

        }
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
              <form method='POST' onSubmit={signUpUser}>
                <div className="form-group">
                  <input type="text"
                         className='form-control form-control-lg inputCustom mt-3'
                         placeholder='UserName'
                         onChange={e => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input type="email"
                         className='form-control form-control-lg inputCustom mt-5'
                         placeholder='example@kq.co.ke'
                         onChange={e => setEmailAddress(e.target.value)}
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