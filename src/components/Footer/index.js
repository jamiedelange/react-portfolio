import React from 'react';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import stackoverflowIcon from '../../assets/stackoverflow-icon.png';

function Footer() {
    return (
        <section>
            <nav>
                <ul className="footer">
                    <li className="footer-li">
                        <img src={`${githubIcon}`} alt="github icon"></img>
                    </li>
                    <li className="footer-li">
                        <img src={`${linkedinIcon}`} alt="linkedin icon"></img>
                    </li>
                    <li className="footer-li">
                        <img src={`${stackoverflowIcon}`} alt="stackoverflow icon"></img>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Footer;