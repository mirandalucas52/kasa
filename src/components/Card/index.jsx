import "./Card.css";

function Item(props) {
    return (
        <figure className="item">
            <h1 className="locationTitle">{props.title}</h1>
            <img src={props.cover} alt={props.title} />
        </figure>
    );
}

export default Item;
