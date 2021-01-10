import React, { useRef } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectsStyled = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.color.main};
    padding: 120px 10vw 60px 10vw;
    &>h2 {
        text-align: center;
        color: ${props=>props.theme.font.color};
        font-size: 30px;
    }
    &>div{
        display: flex;
        align-items: center;
        justify-content: center;
        .arrow {
            display: none;
            height: 40px;
            width: auto;
            margin: 0 10px;
            cursor: pointer;
            color: #383838;
            &:hover {
                    color: ${props => props.theme.color.secondary};
                }
            }
        }
        .carousel {
            width: 80vw;
            margin-top: 50px;
            .project {
                width: 80vw;
                height: 25vh;
                a {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    div {
                        position: relative;
                        display: flex;
                        align-items: center;
                        height: 100%;
                        width: 85%;
                        div {
                            position: absolute;
                            flex-direction: column;
                            padding: 0 2vw;
                            width: 100%;
                            height: 38.25vw;
                            background-color: ${props => props.theme.color.tertiaryLight};
                            z-index: 20;
                            transition: all .3s ease;
                            overflow-y: hidden;
                            h3 {
                                color: ${props => props.theme.font.color};
                                margin: 1vw 0;
                                font-size: 14px;
                            }
                            p {
                                font-size: 11px;
                                color: ${props => props.theme.font.color};
                                text-align: justify;
                            }
                            &:hover {
                                opacity: 0;
                            }
                        }
                        img {
                            object-fit: cover;
                            width: 100%;
                        }
                    }
                }
            }
        }
        .carouselLg {
            display: none;
        }
        @media ${props => props.theme.device.lgPhone } {
            justify-content: space-evenly;
            &>div .arrow {
                display: block;
            }
            .carouselSm {
                display: none;
            }
            .carouselLg {
                display: block;
            }
            .carousel {
                height: 85vh;
                .project {
                    height: 85vh;
                }
            }
        }
    }
    @media ${props => props.theme.device.tablet } {
        .carousel .project a div div {
            padding: 8vw;
            h3 {
                font-size: 16px;
                margin: 1vw 0 5vw 0;
            }
            p {
                font-size: 14px;
            }
        }
    }
    @media ${props => props.theme.device.laptop } {
        .arrow {
            height: 60px;
            margin: 0 50px;            
        }
    }
`

const Projects = () => {

    const $carousel = useRef(null)

    const prev = () => {
        $carousel.current.prev()
    }
    
    const next = () => {
        $carousel.current.next()
    }

    return (
        <ProjectsStyled id="projects">

        <h2>Projects</h2>

        <div>
            <FontAwesomeIcon icon={faChevronLeft} onClick={prev} className="arrow"/>

            <div className="carousel carouselSm">
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://tierra-roja.herokuapp.com/"><div><div><h3>Tierra Roja</h3><p>Website for the women clay artists of Misiones, Argentina. <br/>In this app, the artists can offer their products and courses to any person with an account. <br/>Created with ReactJs, NodeJs, Express, MongoDB and a little magic of AntD and Styled Components (repository on my GitHub)</p></div><img src="tierrarojalandingpage.png" alt="Tierra Roja - Mujeres del barro" /></div></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://chapati-delta.herokuapp.com/"><div><div><h3>Chapati - Delta</h3><p>Chapati is a conscious website promoting exchange of experiences and products from a self-sustainable perspective.<br/>
                    You will find a virtual space where to offer and find volunteer experiences, as well as to buy and sell craft products.<br/>Created with Hbs, NodeJs, Express, MongoDB and Sass (repository on my GitHub)</p></div><img src="chapatilandingpage.png" alt="Chapati Delta" /></div></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://musing-swirles-d6448a.netlify.app/"><div><div><h3>Vagamundos</h3><p>Vagamundos is an interactive game where you can travel the continent with the character of your choosing guessing all the capitals. The game is divided in three levels increasing the difficulty of the tests. Enjoy the world while learning geography!<br/>Created fully on plain JavaScript, Html and Css (repository on my GitHub)</p></div><img src="vagamundoslandingpage.png" alt="Vagamundos" /></div></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://compassionate-feynman-920d93.netlify.app/"><div><div><h3>Banda Especia</h3><p>This is a website for a music group of La Plata, Argentina. You'll find their music, some pictures and their next events!<br/>Created on Html, JavaScript, Css and a little of JQuery (repository on my GitHub)</p></div><img src="bandaespecialandingpage.png" alt="Banda Especia" /></div></a>
                </div>
            </div>

            <Carousel ref={$carousel} dots={false} className="carousel carouselLg">
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://tierra-roja.herokuapp.com/"><div><div><h3>Tierra Roja</h3><p>Website for the women clay artists of Misiones, Argentina. <br/>In this app, the artists can offer their products and courses to any person with an account. <br/>Created with ReactJs, NodeJs, Express, MongoDB and a little magic of AntD and Styled Components (repository on my GitHub)</p></div><img src="tierrarojalandingpage.png" alt="Tierra Roja - Mujeres del barro" /></div></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://chapati-delta.herokuapp.com/"><div><div><h3>Chapati - Delta</h3><p>Chapati is a conscious website promoting exchange of experiences and products from a self-sustainable perspective.<br/>
                    You will find a virtual space where to offer and find volunteer experiences, as well as to buy and sell craft products.<br/>Created with Hbs, NodeJs, Express, MongoDB and Sass (repository on my GitHub)</p></div><img src="chapatilandingpage.png" alt="Chapati Delta" /></div></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://musing-swirles-d6448a.netlify.app/"><div><div><h3>Vagamundos</h3><p>Vagamundos is an interactive game where you can travel the continent with the character of your choosing guessing all the capitals. The game is divided in three levels increasing the difficulty of the tests. Enjoy the world while learning geography!<br/>Created fully on plain JavaScript, Html and Css (repository on my GitHub)</p></div><img src="vagamundoslandingpage.png" alt="Vagamundos" /></div></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://compassionate-feynman-920d93.netlify.app/"><div><div><h3>Banda Especia</h3><p>This is a website for a music group of La Plata, Argentina. You'll find their music, some pictures and their next events!<br/>Created on Html, JavaScript, Css and a little of JQuery (repository on my GitHub)</p></div><img src="bandaespecialandingpage.png" alt="Banda Especia" /></div></a>
                </div>
            </Carousel>
            
            <FontAwesomeIcon icon={faChevronRight} onClick={next} className="arrow"/>
        </div>
            
        </ProjectsStyled>
    )
}

export default Projects
