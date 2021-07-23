import React, { useRef, useState, useEffect } from 'react';
import { useContextInfo } from '../hooks/languageContext';
import { Carousel } from 'antd';
import ShowMoreText from 'react-show-more-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectsStyled } from '../styles/Projects';

const Projects = () => {
    const [projectsArray, setProjectsArray] = useState([]);

    const { languageCtx } = useContextInfo();

    useEffect(() => {
        const array = languageCtx.projects?.filter((project) => project.active);
        setProjectsArray(array);
    }, [languageCtx]);

    const $carousel = useRef(null);

    const prev = () => {
        $carousel.current.prev();
    };

    const next = () => {
        $carousel.current.next();
    };

    return (
        <ProjectsStyled id="projects">
            <h2 className="section-title">{languageCtx.titles.projects}</h2>

            <div>
                <FontAwesomeIcon icon={faChevronLeft} onClick={prev} className="arrow" />

                <div className="carousel carouselSm">
                    {projectsArray &&
                        projectsArray.map((project) => {
                            return (
                                <>
                                    <div className="project">
                                        <a
                                            target={project.responsive && '_blank'}
                                            rel="noreferrer"
                                            href={project.responsive ? project.link || '#' : '#'}
                                        >
                                            <div>
                                                <img src={project.img} alt={project.name} />
                                            </div>
                                        </a>
                                        <div>
                                            <h3>{project.name}</h3>
                                            <ShowMoreText
                                                lines={1}
                                                more={languageCtx.content.more}
                                                less={languageCtx.content.less}
                                                expanded={false}
                                            >
                                                <p>{project.description}</p>
                                            </ShowMoreText>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>

                <Carousel ref={$carousel} dots={false} className="carousel carouselLg">
                    {projectsArray &&
                        projectsArray.map((project) => {
                            return (
                                <>
                                    <div className="project">
                                        <a target="_blank" rel="noreferrer" href={project.link}>
                                            <div>
                                                <div>
                                                    <h3>{project.name}</h3>
                                                    <p>{project.description}</p>
                                                </div>
                                                <img src={project.img} alt={project.name} />
                                            </div>
                                        </a>
                                    </div>
                                </>
                            );
                        })}
                </Carousel>

                <FontAwesomeIcon icon={faChevronRight} onClick={next} className="arrow" />
            </div>
        </ProjectsStyled>
    );
};

export default Projects;
