import React, { useState, useEffect, useRef } from 'react';
import { useContextInfo } from '../hooks/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TechnologiesStyled } from '../styles/Technologies';

const Technologies = () => {
    const [visible1, setVisible1] = useState('0');
    const [visible2, setVisible2] = useState('0');
    const $componentTech = useRef();

    const { languageCtx } = useContextInfo();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                if ($componentTech) {
                    const winY = window.scrollY;
                    const winH = window.innerHeight - 50;
                    const compY = $componentTech.current.getBoundingClientRect().top + winH;
                    const compH = $componentTech.current.getBoundingClientRect().height;
                    if (winY > compY + 100 && winY < compY + compH + 1000) {
                        setVisible2('1');
                    }
                    if (winY > compY && winY < compY + compH + 900) {
                        setVisible1('1');
                    }
                    if (winY < compY || winY > compY + compH + 900) {
                        setVisible1('0');
                        setVisible2('0');
                    }
                }
            };
        }
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    });

    return (
        <TechnologiesStyled id="technologies" ref={$componentTech}>
            <h2 className="section-title">{languageCtx.titles.technologies}</h2>

            <div>
                <FontAwesomeIcon icon={['fab', 'react']} style={{ opacity: visible1 }} className="icon react" />
                <FontAwesomeIcon icon={['fab', 'node']} style={{ opacity: visible1 }} className="icon node" />
                <img
                    src="/expressjs-black.svg"
                    style={{ opacity: visible1 }}
                    className="icon express"
                    alt="ExpressJs"
                />
                <img src="/mongodb.png" style={{ opacity: visible1 }} className="icon mongo" alt="MongoDB" />
                <FontAwesomeIcon icon={['fab', 'js']} style={{ opacity: visible1 }} className="icon js" />
                <FontAwesomeIcon icon={['fab', 'html5']} style={{ opacity: visible2 }} className="icon html" />
                <FontAwesomeIcon icon={['fab', 'css3']} style={{ opacity: visible2 }} className="icon css" />
                <FontAwesomeIcon icon={['fab', 'git-alt']} style={{ opacity: visible2 }} className="icon git" />
                <FontAwesomeIcon icon={['fab', 'github']} style={{ opacity: visible2 }} className="icon github" />
            </div>
        </TechnologiesStyled>
    );
};

export default Technologies;
