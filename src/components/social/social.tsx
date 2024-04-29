import './social.scss'
import Github from '../../assets/logo/github-icon-1.svg'
import Faceboof from '../../assets/logo/facebook-3-3.svg'
import Google from '../../assets/logo/google-g-2015.svg'
import Linkedin from '../../assets/logo/linkedin-icon-2.svg'

export default function Social():JSX.Element{
    return(
        <div className="Social">
            <div className="line"></div>
            <ul>
                <li>
                    <a href="#">
                        <img src={Faceboof} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Google} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Github} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Linkedin} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

