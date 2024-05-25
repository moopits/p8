import Banner from "../components/Banner"
import img from '../assets/images/capture.jpg'

const Home = () => {
    return (

        <section className="home">
            <Banner img={img} text={'Chez vous, partout et ailleurs'} />
        </section>

    )
}

export default Home
