import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper-top">
                <div className="co-block co-block_footer">
                    <p className="co-block_text">Forb1ch development</p>
                </div>
                <div className="social social_footer">
                    <a href="https://www.facebook.com/">facebook</a>
                    <a href="https://www.linkedin.com">linkedin</a>
                    <a href="https://twitter.com">twitter</a>
                    <a href="https://www.drupal.org/">drupal</a>
                </div>
            </div>
            <div className="footer-wrapper-bottom">
                <p className="text text_left">© 2021 All rights reserved. Forb1ch development</p>
                <a className="text text_right" href="https://forb1ch-development.com">forb1ch-development.com</a>
            </div>
        </footer>
    );
}

export default Footer;