import { useParams } from "react-router-dom"
import data from '../assets/json/accommodation.json'
import Stars from '../components/Stars'

const Lodging = () => {
    const { id } = useParams()
    // const id = useParams().id

    const item = data.find(obj => obj.id === id);


    return (
    <div className="container-lodging"> {id}
        <div className="lodging-carousel">
        </div>

        <div className="container-infos">
            <div className="container-element-1">
                <div className="lodging-title">
                    <h1>{item.title}</h1>
                    <span>{item.location}</span>
                </div>
                <div className="lodging-owner">
                    <span>{item.host.name}</span>
                    <img src={item.host.picture} alt="owner" />
                </div>
            </div >
            
            <div className="container-element-2">
                <div className="lodging-area">
                    <span>{item.tags}</span>
                </div>
                <div className="lodging-stars">
                    <span></span>
                </div>
            </div>

           <div className="container-element-3">
                <div className="lodging-about-1">
                    
                </div>
                <div className="lodging-about-2">
                    
                </div>
            </div>
        </div>
    </div>

    )


}

export default Lodging