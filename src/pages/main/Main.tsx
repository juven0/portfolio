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
                    <label><span>Hi </span></label>
                    <br/>
                    <label>Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                    <br/>
                    <label>Lorem ipsum dolor sit amet consectetur</label>
                </div>
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