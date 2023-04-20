import { Link, useLocation } from "react-router-dom";
import Logo from "../../Logo/LOGO.jpg";
import "./Header.css";

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="logo Kasa" />
            </Link>
            <nav className="headerNav">
                <ul>
                    <li>
                        <Link
                            to="/"
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
                            className={
                                location.pathname === "/a_propos"
                                    ? "active"
                                    : ""
                            }
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
