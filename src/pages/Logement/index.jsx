import { useParams } from "react-router-dom";
import "./Logement.css";
import Collapse from "../../components/Collapse/index";
import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery";
import datas from "../../logements.json";

function Logement() {
    // Récupère l'id du logement dans l'URL
    const { id } = useParams();

    // Recherche le logement correspondant à l'id dans le fichier logements.json
    const logement = datas.find((data) => data.id === id);

    // Initialise un tableau d'images de la galerie
    const [imageGallery, setImageGallery] = useState([]);

    // Met à jour le tableau d'images de la galerie lorsque le logement change
    useEffect(() => {
        setImageGallery(logement.pictures);
    }, [logement]);

    // Remet la page en haut
    useEffect(() => {
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView();
        }
    }, []);

    return (
        <div className="logement">
            <Gallery imageGallery={imageGallery} />
            <div className="logementDescription">
                <div>
                    <h1 className="logementTitle">{logement.title}</h1>
                    <h2 className="logementLocate">{logement.location}</h2>

                    <ul className="logementTagsWrap">
                        {logement.tags.map((tag, index) => (
                            <li key={index} className="logementTag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="wrapHostRating">
                    <div className="hostInfo">
                        <h3 className="logementHostName">
                            {logement.host.name}
                        </h3>
                        <img
                            className="logementHostPicture"
                            src={logement.host.picture}
                            alt={logement.title}
                        />
                    </div>
                    <div
                        className="rating"
                        style={{
                            "--rating": `${(logement.rating / 5) * 100}%`,
                        }}
                    ></div>
                </div>
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
