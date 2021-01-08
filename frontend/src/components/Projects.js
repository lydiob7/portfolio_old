import React, { useRef } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 60px 10vw;
    background-color: white;
    .arrow {
        height: 40px;
        width: auto;
        margin: 0 10px;
        cursor: pointer;
        color: ${props => props.theme.color.mainLight};
        &:hover {
                color: ${props => props.theme.color.secondary};
            }
        }
    }
    .carousel {
        width: 80vw;
        height: 85vh;
        margin-top: 50px;
        .project {
            width: 80vw;
            height: 85vh;
            a {
                display: flex;
                height: 100%;
                align-items: center;
                justify-content: center;
                img {
                    object-fit: cover;
                    height: 100%;
                }
            }
        }
    }
    .carouselLg {
        display: none;
    }
    @media ${props => props.theme.device.laptop } {
        justify-content: space-evenly;
        .arrow {
            height: 60px;
            margin: 0 50px;            
        }
        .carouselSm {
            display: none;
        }
        .carouselLg {
            display: block;
        }
        .carousel {
            .project {
                a {
                    img {
                        height: auto;
                        width: 100%;
                    }
                }
            }
        }
    }
`

const Projects = () => {

    const $carousel = useRef(null)
    const $carousel2 = useRef(null)

    const prev = () => {
        $carousel.current.prev()
        $carousel2.current.prev()
    }
    
    const next = () => {
        $carousel.current.next()
        $carousel2.current.next()
    }

    return (
        <ProjectsStyled id="projects">

            <FontAwesomeIcon icon={faChevronLeft} onClick={prev} className="arrow"/>

            <Carousel ref={$carousel2} dots={false} className="carousel carouselSm">
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://tierra-roja.herokuapp.com/"><img src="tierrarojaresponsive.png" alt="Tierra Roja - Mujeres del barro" /></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://chapati-delta.herokuapp.com/"><img src="chapatiresponsive.png" alt="Chapati Delta" /></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://compassionate-feynman-920d93.netlify.app/"><img src="bandaespeciaresponsive.png" alt="Banda Especia" /></a>
                </div>
            </Carousel>

            <Carousel ref={$carousel} dots={false} className="carousel carouselLg">
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://tierra-roja.herokuapp.com/"><img src="tierrarojalandingpage.png" alt="Tierra Roja - Mujeres del barro" /></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://chapati-delta.herokuapp.com/"><img src="chapatilandingpage.png" alt="Chapati Delta" /></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://musing-swirles-d6448a.netlify.app/"><img src="vagamundoslandingpage.png" alt="Vagamundos" /></a>
                </div>
                <div className="project">
                    <a target="_blank" rel="noreferrer" href="https://compassionate-feynman-920d93.netlify.app/"><img src="bandaespecialandingpage.png" alt="Banda Especia" /></a>
                </div>
            </Carousel>
            
            <FontAwesomeIcon icon={faChevronRight} onClick={next} className="arrow"/>
            
        </ProjectsStyled>
    )
}

export default Projects
