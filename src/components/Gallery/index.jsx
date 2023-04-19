import "./Gallery.css";
import ArrowRight from "../../Images/caroussel_right.png";
import ArrowLeft from "../../Images/caroussel_left.png";
import { useState } from "react";

function Gallery({ imageGallery }) {
    // Création d'un état currentIndex initialisé à 0
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction qui permet d'afficher l'image suivante du tableau
    const nextImage = () => {
        setCurrentIndex(currentIndex + 1);
        // Si l'index de l'image est égal à la dernière image, on emmène à la première image
        if (currentIndex === imageGallery.length - 1) setCurrentIndex(0);
    };

    // Fonction qui permet d'afficher l'image précédente du tableau
    const prevImage = () => {
        setCurrentIndex(currentIndex - 1);
        // Si l'index de l'image est égal à la première image, on emmène à la dernière image
        if (currentIndex === 0) setCurrentIndex(imageGallery.length - 1);
    };

    return (
        <section
            style={{ backgroundImage: `url(${imageGallery[currentIndex]})` }}
            className="carousel"
        >
            {imageGallery.length > 1 && (
                <div>
                    <img
                        className="carousel_arrow carousel_arrow_right"
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextImage}
                    />
                    <img
                        className="carousel_arrow carousel_arrow_left"
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevImage}
                    />
                    <p className="slideCount">
                        {currentIndex + 1} / {imageGallery.length}
                    </p>
                </div>
            )}
        </section>
    );
}

export default Gallery;
