import { useState } from "react";
import "./Collapse.css";
import Arrow from "../../Images/Vector.png";

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="dropdown-container">
            <div className="dropdown-title" onClick={handleToggle}>
                {props.title}
                <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
            {isOpen && <div className="dropdown-content">{props.children}</div>}
        </article>
    );
}

export default Dropdown;
