import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from 'styled-components'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutStyled = styled.div`
    position: relative;
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    width: 100vw;
    padding-bottom: 60px;
    background-color: ${props => props.theme.color.main};
    .container-about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-height: calc(100vh - 120px);
        z-index: 5;
        .photo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 80px 0;
            &>div:first-of-type {
                max-height: 300px;
                max-width: 30%;
                overflow: hidden;
                img {
                    height: auto;
                    width: 100%;
                    object-fit: cover;
                }
            }
            .social {
                .icon {
                    color: white;
                    height: 50px;
                    width: auto;
                    margin: 60px 20px;
                    &:hover {
                        color: ${props => props.theme.color.secondaryLight};
                    }
                }
            }
            .resume {
                button {
                    background-color: ${props => props.theme.color.mainLight};
                    color: white;
                    border: none;
                    height: 45px;
                    padding: 0 20px;
                    &:hover {
                        background-color: ${props => props.theme.color.secondary};
                    }
                }
            }
        }
        .bio {
            width: 100%;
            padding: 0 10vw;
            .content {
                    width: 80vw;
                    height: 450px;
                    padding: 15px 60px;
                    background-image: url("https://res.cloudinary.com/tomiscattini/image/upload/v1609976839/Portfolio/background-vsc_nbsysf.png");
                    background-size: cover;
                    background-position: left center;
                    background-repeat: no-repeat;
                    overflow-y: scroll;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    span {
                        color: white;
                        line-height: 1.32;
                        &>strong {
                            color: #569CD6;
                            font-weight: normal;
                        }
                        &>i {
                            font-style: normal;
                            color: #49B9F8;
                        }
                        &>em {
                            font-style: normal;
                            color: #DCDCAA;
                        }
                        &>span {
                            color: #DCDCAA;
                        }
                        &>a {
                            color: ${props => props.theme.color.secondaryLight};
                        }
                    }
            }
        }
    }
    @media ${props => props.theme.device.laptop} {
        .container-about {
            flex-direction: row;
            .photo {
                width: 40%;
            }
            .bio {
                width: 60%;
                padding: 0 10vw 0 0;
                .content {
                    width: 100%;
                }
            }
        }
    }
`

const About = () => {

    const textBio = `<strong>const</strong> <i>name</i> = '<span>Tomas Scattini</span>'<br /> <strong>const</strong> <i>bio</i>`
    const textBio2 = `<strong>let</strong> <i>bio</i> = <span>[</span><br />"I am a web developer from Argentina with a background in Popular Music and a nomad soul.", <br/>
    "I recently graduated from an intensive bootcamp where I improved my developer skills and reinforced my social network.", <br/> "I love to put my creativity to test and that's why I deeply enjoy creating new products for the web.",<br/>
    "I have worked as a Music teacher in my home country for five years until my urge of adventure made me decide to hit the road and travel around the world.",<br/>
    "That experience made me discover a whole new universe and expanded my perception of life.",<br/>
    "Today I decide to make a positive change in the world wherever I can, and that is mostly through this powerful tool that is the internet."<br/><span>]</span><br/> <i>function</i> <em>links()</em> <span>{</span><br/> const Linkedin = <a href="https://www.linkedin.com/in/tomas-scattini/">linkedin.com/in/tomas-scattini/</a><br/> const GitHub = <a href="https://github.com/Tomasscattini">github.com/Tomasscattini</a> <br/><span>}</span>`
    
    return (
        <AboutStyled id="about">
            <div className="container-about">
                <div className="photo">
                    <div>
                        <img src="https://res.cloudinary.com/tomiscattini/image/upload/v1609991109/Portfolio/Foto_perfil_vlsfyy.jpg" alt="Profile" />
                    </div>
                    <div className="social">
                        <a  rel="noreferrer" target="_blank" href="https://github.com/Tomasscattini">
                            <FontAwesomeIcon icon={["fab", "github"]} className="icon"/>
                        </a>
                        <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tomas-scattini/">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon"/>
                        </a>
                    </div>
                    <div className="resume">
                        <a href="/resume.pdf" download="Resume Tomas Scattini"><Button primary>Download Resume</Button></a>
                    </div>
                </div>

                <div className="bio">
                    <div className='content'>
                        <Typewriter
                            options={{delay: 75}}
                            onInit={(typewriter) => {
                                typewriter.typeString(textBio)
                                .pauseFor(1000)
                                .deleteChars(9)
                                .changeDelay(15)
                                .typeString(textBio2)
                                .start();
                            }}
                        />
                    </div>
                </div>
            </div>
        </AboutStyled>
    )
}

export default About
