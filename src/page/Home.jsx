import Banner from "../components/Banner"
import Cards from "../components/Cards"
import img from '../assets/images/capture.jpg'

const Home = () => {
    return (

        <section className="home">
            <Banner img={img} text={'Chez vous, partout et ailleurs'} />
            <Cards />
        </section>


    )
}

export default Home
