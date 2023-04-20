import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Logement.css";
import Collapse from "../../components/Collapse/index";
import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery";
import datas from "../../logements.json";
import Error from "../../pages/Error";

function Logement() {
    const navigate = useNavigate();
    const { id } = useParams();
    const logement = datas.find((data) => data.id === id);
    const [imageGallery, setImageGallery] = useState([]);

    useEffect(() => {
        if (!logement) {
            navigate("/error");
        }
    }, [logement, navigate]);

    useEffect(() => {
        setImageGallery(logement?.pictures || []);
    }, [logement]);

    useEffect(() => {
        const topElement = document.getElementById("top");
        if (topElement) {
            topElement.scrollIntoView();
        }
    }, []);

    return (
        <React.Fragment>
            {logement ? (
                <main className="logement">
                    <Gallery imageGallery={imageGallery} />
                    <section className="logementDescription">
                        <article>
                            <h1 className="logementTitle">{logement.title}</h1>
                            <h2 className="logementLocate">
                                {logement.location}
                            </h2>

                            <ul className="logementTagsWrap">
                                {logement.tags.map((tag, index) => (
                                    <li key={index} className="logementTag">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article className="wrapHostRating">
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
                                    "--rating": `${
                                        (logement.rating / 5) * 100
                                    }%`,
                                }}
                            ></div>
                        </article>
                    </section>
                    <aside className="collapseContainer">
                        <Collapse title="Description">
                            {logement.description}
                        </Collapse>
                        <Collapse title="Équipements">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Collapse>
                    </aside>
                </main>
            ) : (
                <Error />
            )}
        </React.Fragment>
    );
}

export default Logement;
