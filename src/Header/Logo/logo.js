import logo from "../../4b4LogoCrop.png";
import "./logo.scss";

const Logo = () => {
    return (
        <div className="header-logo">
            <img src={logo} className="header-logo-icon" alt="logo" />
        </div>
    );
}

export default Logo;