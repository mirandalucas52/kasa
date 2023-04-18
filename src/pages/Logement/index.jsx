import { useParams } from "react-router-dom";
import "./Logement.css";
import Collapse from "../../components/Collapse/index";
import { useState, useEffect } from "react";
import Slider from "../../components/Caroussel";
import datas from "../../logements.json";

function Logement() {
    const { id } = useParams();
    const logement = datas.find((data) => data.id === id);
    const [imageSlider, setImageSlider] = useState([]);

    useEffect(() => {
        setImageSlider(logement.pictures);
    }, [logement]);

    useEffect(() => {
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView();
        }
    }, []);

    return (
        <div className="logement">
            <Slider imageSlider={imageSlider} />
            <div className="logementFirstWrap">
                <div>
                    <h1 className="logementTitle">{logement.title}</h1>
                    <h2 className="logementLocate">{logement.location}</h2>
                </div>
                <div className="logementRightFlex">
                    <h3 className="logementHostName">{logement.host.name}</h3>
                    <img
                        className="logementHostPicture"
                        src={logement.host.picture}
                        alt={logement.title}
                    />
                </div>
            </div>
            <div className="wrapTagsRating">
                <div className="logementTagsWrap">
                    {logement.tags.map((tag, index) => (
                        <div key={index} className="logementTag">
                            {tag}
                        </div>
                    ))}
                </div>
                <div
                    className="rating"
                    style={{
                        "--rating": `${(logement.rating / 5) * 100}%`,
                    }}
                ></div>
            </div>
            <div className="collapseContainer">
                <Collapse title="Description">{logement.description}</Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
}

export default Logement;
