import "./Home.css";
import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index";
import BannerImage from "../../Images/banner_img.jpg";
import { useEffect, useState } from "react";

function Accueil() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("logements.json");
            const data = await response.json();
            setDatas(data);
        };
        fetchData();
    }, []);

    return (
        <div className="accueil">
            <Banner displayText={true} imageSrc={BannerImage} />
            <div className="gallery">
                {datas.map((data) => (
                    <Card key={data.id} {...data} />
                ))}
            </div>
        </div>
    );
}

export default Accueil;
