import React from 'react';
import './banner.scss';
import {NavLink} from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
            <p className="banner_text banner_text_big"> Drupal Web and Mobile Apps developer</p>
            <p className="banner_text banner_text_small"> Make your projects easier with Forbich</p>
            <button className="button default-btn banner-btn"><NavLink to="/portfolio" exact activeClassName="active">My portfolio</NavLink></button>
        </div>
    );
}

export default Banner;