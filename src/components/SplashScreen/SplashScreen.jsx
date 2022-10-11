import './SplashScreen.css';

const SplashScreen = () => {
  setTimeout(function(){
    window.location.href = '/home';
  }, 3000);
  console.log(new Date().getFullYear());
    return (
        <div className="Splash">
            {/* Big Screen */}
            <div className='loader'/>
            <div className="big-screen">
                <div className="splash-img">
                    <img src={process.env.PUBLIC_URL+"/img/logos/happy.png"}  alt='happy' />
                </div>
                <div className="logo-big-screen">
                    <img src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo' />
                    <p>&copy; Copyright mSwali { new Date().getFullYear() }</p>
                    <span>V 0.0.1</span>
                </div>
            </div>

            {/* Small Screen */}
             <div className="small-screen">
                <div className="upper-part">
                    <div className="dots">
                        <div className="dots-1"/>
                        <div className="dots-2"/>
                    </div>
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL+"/img/logos/mSwali-cyan.png"}  alt='mswali logo'/>
                    </div>
                </div>
                <section className="blue1">
                    <p className="copyright">&copy; Copyright mSwali { new Date().getFullYear() } </p>
                    <div className="curve"/>
                </section>   
             </div>
        </div>
    );

}

export default SplashScreen