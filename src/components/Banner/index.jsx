import "./Banner.css";

function Banner(props) {
    const { displayText, imageSrc } = props;

    return (
        <div className="banner">
            <img src={imageSrc} alt="Bord de mer" />
            {displayText && (
                <div className="texte">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            )}
        </div>
    );
}

export default Banner;
