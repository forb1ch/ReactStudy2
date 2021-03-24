import React from 'react';
import './about.scss';

const About = () => {
    return (
        <div id="about" className="about">
            <h2 className="title about_title">About</h2>
            <p className="about_text">Drulap mobile & development</p>
            <div className="about-info">
                <div className="about-info_item">
                    <p className="text text_big">5 years</p>
                    <p className="text text_small">in intetational market</p>
                </div>
                <div className="about-info_item">
                    <p className="text text_big">10+</p>
                    <p className="text text_small">completed projects</p>
                </div>
                <div className="about-info_item">
                    <p className="text text_big">1 developer</p>
                    <p className="text text_small">drupal and front-end</p>
                </div>
                <div className="about-info_item">
                    <p className="text text_big">5+ clients</p>
                    <p className="text text_small">over the globe:</p>
                    <p className="text text_small">Europe, Us, Canada</p>
                </div>
            </div>
        </div>
    );
};

export default About;