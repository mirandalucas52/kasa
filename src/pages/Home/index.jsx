import "./Home.css";
import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index";
import Datas from "../../datas/logements.json";
import BannerImage from "../../Images/banner_img.jpg";

function Accueil() {
    const items = Datas.map((data) => <Card key={data.id} {...data} />);

    return (
        <div className="accueil">
            <Banner displayText={true} imageSrc={BannerImage} />
            <div className="gallery">{items}</div>
        </div>
    );
}

export default Accueil;
