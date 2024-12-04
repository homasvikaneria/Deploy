import './Sample.css';
import PitchLogo from './assets/images/logo.png'
import blurimg from './assets/images/blurimg.png'
import blurtri from './assets/images/blurtri.png'
import circle from './assets/images/circle.png'
import semicircle from './assets/images/semicircle.png'

function Sample() {
  return (
    <>
      <div className="navbar">
        <div className="upper_header">
            <p className="para">Introducing the complete pitching platform — now with shareable rooms for your deals. <b>See what's new</b></p>
        </div>
        <header>
            <a href="#" className="logo">
                <img src={PitchLogo} height="150px" alt="" style={{ marginLeft: "-25px" }} />
            </a>
            <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Use cases</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Pricing</a></li>
                <li>
                    <div className="login_button">
                        Log in
                    </div>
                </li>
                <li>
                    <div className="Sign_up_button">
                        Sign up
                    </div>
                </li>
            </ul>
        </header>
      </div>

      <img className="semicircle" src={semicircle} alt="" />
      <img className="blurimg" src={blurimg} alt="" />

      <div className="White_text">Win more deals.</div>
      <div className="White_text1">Pitch.</div>
      <div>
        <img className="blur_tri" src={blurtri} alt="" />
      </div>
      <img className="circle" src={circle} alt="" />
      <div className="text">Pitch turns presentations into your teams superpower for closing deals,</div>
      <div className="text1">winning clients, and expanding accounts, all while staying on-brand.</div>

      <div className="suff">
        Sign up for free
      </div>
      <div className="gad">
        Get a demo
      </div>
    </>
  );
}

export default Sample;
