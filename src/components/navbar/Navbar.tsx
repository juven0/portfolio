import Logo from "../logo/logo"
import "./Navbar.scss"
import Navs from "./Navs"

function Navbar():JSX.Element{
    return (
        <div className="Navbar">
            <Logo/>
            <Navs/>
        </div>
    )
}

export default Navbar