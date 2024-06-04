import Banner from "../components/Banner"
import img from "../assets/images/capture2.jpg"
import React, { useState } from 'react';
import data from '../assets/json/about.json'
import UpdateableParagraph from "../components/Menu"

const About = () => {
    

    return (
        <section className="about">
            <Banner img={img} />
            <section>

                {data.map(item => <UpdateableParagraph /> key={item.id} item={item} />)}

            </section>
        </section>
    )
}

export default About