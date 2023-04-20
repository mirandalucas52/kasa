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
        <main className="accueil">
            <Banner
                displayText={true}
                imageSrc={BannerImage}
                imageAlt="Bord de mer"
            />
            <section className="gallery">
                {datas.map((data) => (
                    <Card key={data.id} {...data} />
                ))}
            </section>
        </main>
    );
}

export default Accueil;
