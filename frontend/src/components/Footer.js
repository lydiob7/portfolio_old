import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterStyled = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.color.tertiary};
    height: 120px;
    width: 100vw;
    position: relative;
    bottom: 0;
    padding: 0 10vw;
    p {
        color: ${props => props.theme.font.color};
    }
    .social {
        .icon {
            color: ${props => props.theme.font.color};
            height: 20px;
            width: auto;
            margin: 0 10px;
            &:hover {
                color: ${props => props.theme.color.secondaryLight};
            }
        }
    }
    @media ${props => props.theme.device.tablet} {
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Footer = () => {
    const d = new Date()
    const year = d.getFullYear()

    return (
        <FooterStyled>
            <div>
                <p>&copy; All rights reserved by Tomas Scattini {year}</p>
            </div>

            <div className="social">
                        <a  rel="noreferrer" target="_blank" href="https://github.com/Tomasscattini">
                            <FontAwesomeIcon icon={["fab", "github"]} className="icon"/>
                        </a>
                        <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tomas-scattini/">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon"/>
                        </a>
                        <a  rel="noreferrer" target="_blank" href="https://www.instagram.com/tomiscattini/">
                            <FontAwesomeIcon icon={["fab", "instagram"]} className="icon"/>
                        </a>
                        <a  rel="noreferrer" target="_blank" href="https://twitter.com/tomiscattini">
                            <FontAwesomeIcon icon={["fab", "twitter"]} className="icon"/>
                        </a>
                        <a  rel="noreferrer" target="_blank" href="https://www.facebook.com/tomas.scattini">
                            <FontAwesomeIcon icon={["fab", "facebook"]} className="icon"/>
                        </a>
                        <a  href="mailto:tomasscattini@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                        </a>
                    </div>
        </FooterStyled>
    )
}

export default Footer
