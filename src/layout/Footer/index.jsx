import "./Footer.css";
import WhiteLogo from "../../Logo/.LOGO_white.png";

function Footer() {
    return (
        <div className="footer">
            <img src={WhiteLogo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
