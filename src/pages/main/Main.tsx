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