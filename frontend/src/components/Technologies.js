import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TechnologiesStyled = styled.div`
    width: 100vw;
    padding: 120px 10vw;
    background-color: ${props => props.theme.color.mainLight};
    &>div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img {
            object-fit: scale-down;
        }
        .icon {
            height: auto;
            width: 20vw;
            margin: 3vw;
        }
        .react {
            color: #5ED3F3;
            transition: all .9s ease-in-out;
        }
        .node {
            color: #3C823B;
            transition: all .8s ease-in-out;
        }
        .express {
            transition: all .7s ease-in-out;
        }
        .mongo {
            width: 14vw;
            margin: 0 6vw; 
            transition: all 1s ease-in-out;
        }
        .js {
            color: #E8D44D;
            transition: all .5s ease-in-out;
        }
        .html {
            color: #DD4B25;
            transition: all .9s ease-in-out;
        }
        .css {
            color: #016CB4;
            transition: all .8s ease-in-out;
        }
        .git {
            color: #E84D31;
            transition: all 1s ease-in-out;
        }
        .github {
            color: #000;
            transition: all .5s ease-in-out;
        }
    }

    @media ${props => props.theme.device.tablet} {
        min-height: 100vh;
        &>div {
            .icon {
                width: 10vw;
            }
            .mongo {
                width: 8vh;
            }
        }
    }
    @media ${props => props.theme.device.laptop} {
        &>div {
            .icon {
                width: 7vw;
            }
            .mongo {
                width: 5vw;
            }
        }
    }
`

const Technologies = () => {
    const [ visible1, setVisible1 ] = useState('0')
    const [ visible2, setVisible2 ] = useState('0')
    const $componentTech = useRef()

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                if ($componentTech) { 
                    const winY = window.scrollY
                    const winH = window.innerHeight - 50
                    const compY = $componentTech.current.getBoundingClientRect().top + winH
                    const compH = $componentTech.current.getBoundingClientRect().height
                    if(winY > (compY + 100) && winY < (compY + compH + 1000)) {
                        setVisible2('1')
                    } 
                    if(winY > compY && winY < (compY + compH + 900)) {
                        setVisible1('1')
                    }
                    if (winY < compY || winY > (compY + compH + 900)) {
                        setVisible1('0')
                        setVisible2('0')
                    }
                }
            }
        }
        return () => {
            window.removeEventListener('scroll', ()=> {})
        }
    })

    return (
        <TechnologiesStyled  id="technologies" ref={$componentTech}>

            <h2 className="section-title">Technologies</h2>

            <div>
                <FontAwesomeIcon icon={["fab", "react"]} style={{opacity: visible1}} className="icon react"/>
                <FontAwesomeIcon icon={["fab", "node"]} style={{opacity: visible1}} className="icon node"/>
                <img src="/expressjs-black.svg" style={{opacity: visible1}} className="icon express" alt="ExpressJs" />
                <img src="/mongodb.png" style={{opacity: visible1}} className="icon mongo" alt="MongoDB" />
                <FontAwesomeIcon icon={["fab", "js"]} style={{opacity: visible1}} className="icon js"/>
                <FontAwesomeIcon icon={["fab", "html5"]} style={{opacity: visible2}} className="icon html"/>
                <FontAwesomeIcon icon={["fab", "css3"]} style={{opacity: visible2}} className="icon css"/>
                <FontAwesomeIcon icon={["fab", "git-alt"]} style={{opacity: visible2}} className="icon git"/>
                <FontAwesomeIcon icon={["fab", "github"]} style={{opacity: visible2}} className="icon github"/>
            </div>
        </TechnologiesStyled>
    )
}

export default Technologies
