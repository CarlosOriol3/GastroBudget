import React from 'react'
import './About.css'

import ImageSlider from './imageSlider/ImageSlider'
const About = () =>
    <section>
        <hr id="separator" />
        <h2>About Us</h2>
        <div className="about-content">
            <p id="text">
                <em>GastroBudget</em> is a food picker application where you input
                the <strong>cuisine type</strong>, <strong>budget</strong> and <strong>location</strong> and it uses the
                Yelp API (Application Programmable Interface) to match results based on the input and display them to you in a
                simple manner.
            </p>
            <ImageSlider />
        </div>
    </section>

export default About