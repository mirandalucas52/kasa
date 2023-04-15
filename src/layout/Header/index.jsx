import { Link, useLocation } from "react-router-dom";
import Logo from "../../Logo/LOGO.jpg";
import "./Header.css";

function Header() {
    const location = useLocation();

    const handleClick = () => {};

    return (
        <div className="header">
            <Link to="/" onClick={() => handleClick("Accueil")}>
                <img src={Logo} alt="logo Kasa" />
            </Link>
            <nav className="headerNav">
                <ul>
                    <li>
                        <Link
                            to="/"
                            onClick={() => handleClick("Accueil")}
                            className={
                                location.pathname === "/" ? "active" : ""
                            }
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/a_propos"
                            onClick={() => handleClick("A propos")}
                            className={
                                location.pathname === "/a_propos"
                                    ? "active"
                                    : ""
                            }
                        >
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
