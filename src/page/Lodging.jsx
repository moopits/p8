import { useParams } from "react-router-dom"
import data from '../assets/json/accommodation.json'
import Stars from '../components/Stars'
import Carrousel from "../components/Carrousel"
import Tags from "../components/Tags"
import Collapse from "../components/Collapse"
import NotFound from "./NotFound"


const Lodging = () => {
    const { id } = useParams()

    const item = data.find(obj => obj.id === id);

    if (!item) {
        return <NotFound />
    }

    return (
        <section id="lodging">
            <Carrousel data={item} />

            <div className="container">
                <div className="header">
                    <div className="title">
                        <h1>{item.title}</h1>
                        <h2>{item.location}</h2>
                        <Tags tags={item.tags} />
                    </div>
                    <div className="sub-header">
                        <div className="host">
                            <span>{item.host.name}</span>
                            <img src={item.host.picture} alt={item.host.name} />
                        </div>
                        <Stars rating={item.rating} />
                    </div>
                </div>
            </div>
            <div className="dropdowns">
                <Collapse
                    item={{ title: 'Description', text: item.description }}
                />
                <Collapse
                    item={{ title: 'Equipements', text: item.equipments }}
                />
            </div>
        </section>
    )


}

export default Lodging