import React from 'react';
import { useContextInfo } from '../hooks/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterStyled } from '../styles/Footer';

const Footer = () => {
    const { languageCtx } = useContextInfo();

    const d = new Date();
    const year = d.getFullYear();

    return (
        <FooterStyled>
            <div>
                <p>
                    &copy; {languageCtx.content.copyright} {year}
                </p>
            </div>

            <div className="social">
                <a rel="noreferrer" target="_blank" href="https://github.com/Tomasscattini">
                    <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tomas-scattini/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tomiscattini/">
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://twitter.com/tomiscattini">
                    <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/tomas.scattini">
                    <FontAwesomeIcon icon={['fab', 'facebook']} className="icon" />
                </a>
                <a href="mailto:tomasscattini@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
            </div>
        </FooterStyled>
    );
};

export default Footer;
