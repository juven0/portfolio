import NavLink from "./NavLink"
import "./Navs.scss"

function Navs(): JSX.Element {
    return (
        <nav className="Navs">
          <ul>
            <NavLink label="About" target="about"/>
            <NavLink label="Skills" target="skills"/>
            <NavLink label="Projects" target="projects"/>
            <NavLink label="Contact" target="contacts"/>
          </ul>
        </nav>
    )
}

export default Navs