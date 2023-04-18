import "./Banner.css";

function Banner(props) {
    const { displayText, imageSrc, imageAlt } = props;

    return (
        <div className="banner">
            <img src={imageSrc} alt={imageAlt} />
            {displayText && (
                <div className="texte">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            )}
        </div>
    );
}

export default Banner;
