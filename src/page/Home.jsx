import Banner from "../components/Banner"
import Card from "../components/Card"
import img from '../assets/images/capture.jpg'
import data from '../assets/json/accommodation.json'

const Home = () => {
    return (
        <section className="home">
            <Banner img={img} text={'Chez vous, partout et ailleurs'} />
            <section className="gallery">
                {data.map(item => <Card key={item.id} item={item} />)}
            </section>
        </section>
    )
}

export default Home
