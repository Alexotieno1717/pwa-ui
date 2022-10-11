import React from 'react'

function Otp() {
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
                            <h5 className='text-dark text-center mt-4'>0748815593</h5>
                            <p className="text-center pt-2">We've sent the code to you mobile phone</p>


                            <form action="#" method="post">
                                <div className="form-group">
                                    <input type="text" className='form-control form-control-lg inputCustom mt-3' placeholder='....' />
                                </div>
                                <button className='btn-custom-general'>Verify</button>
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