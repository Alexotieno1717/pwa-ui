import React from 'react'

function Login() {
  return (
    <div className='login'>

        {/* Big Screen */}
        <div className="container-fluid" id="LoginBigScreen">
            <div className="row">
                <div className="col-md-6 loginBackground">
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
                        <p className='text-dark text-center mt-4'>Enter your number to continue</p>
                        <form action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="email" className='mt-3'>Enter Email Address </label>
                                <input type="text" className='form-control form-control-lg inputCustom mt-3' placeholder='example@kq.co.ke' />
                            </div>
                            <button className='btn-custom-general'>Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Small Screen */}
        <div className="container" id='LoginSmallScreen'>
            <div className="MuiBox-root css-1f79yyv">
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
            </div>
            <div className="MuiBox-root css-1gd7obz">
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
                <div className="MuiBox-root css-k008qs">
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                    <div className="MuiBox-root css-u3hdku"/>
                </div>
            </div>

            <div className="LoginLogo">
                <img src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali-cyan'/>
            </div>
            <div className="login-image">
                <img src={process.env.PUBLIC_URL+"/img/logos/loginImage.png "}  alt='logo'/>
            </div>
            <div className="content text-center mt-2">
                <p>Log In to mSwali</p>
                <form action="#" method="post">
                    <div className="form-group">
                        <label htmlFor="email" className='mt-3'>Enter Email Address </label>
                        <input type="text" className='form-control form-control-lg inputCustom mt-3' placeholder='example@kq.co.ke' />
                    </div>
                    <button className="btn btn-custom">Continue</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login