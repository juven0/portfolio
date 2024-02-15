import './logo.scss'
import Mylogo from '../../assets/logo/my logo.svg'

function Logo(): JSX.Element{
    return (
        <div className="Logo">
            <img src={Mylogo} alt="" />
        </div>
    )
}

export default Logo