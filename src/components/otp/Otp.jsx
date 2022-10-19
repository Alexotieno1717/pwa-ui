import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ErrorAlert, SuccessAlert } from '../../utils/alerts';
import './Otp.css'


function Otp() {

  const navigate = useNavigate()
  const [signUpOTP, setSignUpOTP] = useState(null)

  const user = JSON.parse(localStorage.getItem('user'))

  // Timer
  const [ counter, setCounter] = useState(59)

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);



  const otpAuth = (e) => {
    e.preventDefault()
    axios
      .get(`corporate-tunnel/verify-otp&email=${user.emailAddress}&code=${parseInt(signUpOTP)}`)
      .then(res => {
        if (res.data.is_valid === true){
          SuccessAlert(res.data.message)
          navigate('/home')
          // console.log("Verifying opt was successful")
          // console.log(res.data)
        }else {
          ErrorAlert(res.data.message)
          // console.log("Verification failed.... Check where the errors occurred")
          // console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <div className='container-fluid otp'>
        {/* Otp Big Screen */}
        <div className="otpBigScreen">
            <div className="row">
                    <div className="col-md-6 loginBackground">
                        <div className="LargeScreenLogo">
                            <img src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="splash-img">
                            <img src={process.env.PUBLIC_URL+"/img/logos/happy.png"}  alt='happy'/>
                        </div>
                        <div className="loginTitle">
                            <h3 className='text-dark text-center mt-4'>Waiting for verification sent to</h3>
                            <h5 className='text-dark text-center mt-4'>{user.emailAddress}</h5>
                            <p className="text-center pt-2">We've sent the code to you Email Address</p>


                            <form method="GET" onSubmit={otpAuth}>
                                <div className="form-group">
                                    <input type="number"
                                           className='form-control form-control-lg inputCustom mt-3 text-center'
                                           placeholder='_ _ _ _'
                                           onChange={e => setSignUpOTP(e.target.value)}
                                    />
                                    <p className="otpTimer mt-3">
                                      Resend otp in
                                      <span className="otpColor"> 0:{counter}</span>
                                      <br/>
                                    </p>
                                  <span className="otpResend">Didn’t receive code? <a href='/otp'>Resend Email</a></span>

                                </div>
                                <button className='btn-custom-otp'>Verify</button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>

        {/* Otp Small Screen */}
        <div className="container-fluid otpSmallScreen">
            <p className='pt-4'> Go Back</p>
            <div className="email-icon pt-5 mt-5">
                <img src={process.env.PUBLIC_URL+"/img/logos/email.png"}  alt='email'/>
            </div>
            <div className="content text-center mt-5">
                <h3>Waiting for verification of</h3>
                <h3>example@kq.co.ke</h3>
                <p className='pt-3'>We’ve sent the code  your <br /> Email Address</p>
                <input type="text" className='otp-form' placeholder='_ _ _ _' />
                <p className='pt-3'>Code expires in : 00 : 56 </p>
                <p>Did’t receive code? Resend Email</p>
                <button className='button-small'>Verify OTP</button>
            </div>
        </div>
    </div>
  )
}

export default Otp