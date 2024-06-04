import Banner from "../components/Banner"
import img from "../assets/images/capture2.jpg"
import data from '../assets/json/about.json'
import Collapse from "../components/Collapse";


const About = () => {


    return (
        <section className="about">
            <Banner img={img} />
            <section className="container-dropdowns">
                {data.map(item => <Collapse key={item.id} item={item} />)}
            </section>
        </section>
    )
}

export default About