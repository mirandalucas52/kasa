import { Link } from "react-router-dom";
import "./Card.css";

function Item(props) {
    return (
        <Link to={`/logement/${props.id}`}>
            <figure className="item">
                <h1 className="locationTitle">{props.title}</h1>
                <img src={props.cover} alt={props.title} />
            </figure>
        </Link>
    );
}

export default Item;
