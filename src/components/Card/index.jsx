import { Link } from "react-router-dom";
import "./Card.css";

function Item(props) {
    return (
        <Link to={`/logement/${props.id}`}>
            <figure className="item">
                <figcaption className="locationTitle">{props.title}</figcaption>
                <img src={props.cover} alt={props.title} />
            </figure>
        </Link>
    );
}

export default Item;
