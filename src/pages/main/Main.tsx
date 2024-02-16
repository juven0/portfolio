import Navbar from "../../components/navbar/Navbar";
import "./Main.scss"
import me from"../../assets/images/me.png"
import Social from "../../components/social/social";
import Wave from "../../assets/images/wave.svg"

function Main(): JSX.Element {
    return(
       <div className="Main">
        <Navbar/>
        <div className="left">
            <div className="welcome">
                <div className="welcome-message">
                    <label><span>Hi there! 👋</span></label>
                    <br/>
                    <label>I'm Eddy Juveno</label>
                    <br/>
                    <label>a <span>Full-stak developer</span></label>
                </div>
                <div className="resume">
                    <p>I am a full-stack developer passionate about the world of artificial intelligence and algorithms,<br/>
                         seeking to deepen my skills in this fascinating field while creating innovative solutions.</p>
                </div>
                <label className="cv-btn">Download my CV</label>
            </div>
            <Social/>
        </div>
        <div className="rigthbg"></div>
        <div className="me">
            <img src={me} />
        </div>
        <div className="wave">
            <img src={Wave}  />
        </div>
       </div>
    )
}

export default Main;