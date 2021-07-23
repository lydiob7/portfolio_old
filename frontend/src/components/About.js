import React, { useRef, useState, useEffect } from 'react';
import { useContextInfo } from '../hooks/languageContext';
import Typewriter from 'typewriter-effect';
import { Button, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AboutStyled } from '../styles/About';

const About = () => {
    const [language, setLanguage] = useState('js');
    const [start, setStart] = useState(null);
    const $typewriter = useRef();

    const { languageCtx } = useContextInfo();

    useEffect(() => {
        if (language) setStart(true);
    }, [language]);

    useEffect(() => {
        changeLanguage('ts');
        changeLanguage('js');
    }, [languageCtx]);

    const txt1 = `Tomás Scattini`;
    const txt2 = languageCtx.bio.txt2;
    const txt3 = languageCtx.bio.txt3;
    const txt4 = languageCtx.bio.txt4;
    const txt5 = languageCtx.bio.txt5;
    const txt6 = languageCtx.bio.txt6;
    const txt7 = languageCtx.bio.txt7;
    const txtLkdn = `linkedin.com/in/tomas-scattini/`;
    const txtGthb = `github.com/Tomasscattini`;

    const bioJs = `<strong>const</strong> <i>name</i> = "${txt1}"<br /> <strong>const</strong> <i>bio</i>`;
    const bioJs2 = `<strong>let</strong> <i>bio</i> = <em>[</em><br /><div>"${txt2}", <br/>"${txt3}", <br/> "${txt4}",<br/>"${txt5}",<br/>"${txt6}",<br/>"${txt7}"</div><br/><em>]</em><br/> <i>function</i> <em>profSocialMedia()</em> <em>{</em><br/> <div><strong>const</strong> <i>linkedIn</i> = <a href="https://www.${txtLkdn}">${txtLkdn}</a><br/><strong>const</strong> <i>gitHub</i> = <a href="https://${txtGthb}">${txtGthb}</a><br/><strong>return</strong> clicked</div><em>}</em>`;

    const bioTs = `<strong>const</strong> <i>name: string</i> = "${txt1}"<br /> <strong>const</strong> <i>bio: string[]</i>`;
    const bioTs2 = `<strong>let</strong> <i>bio: any[]</i> = <em>[</em><br /><div>"${txt2}", <br/>"${txt3}", <br/> "${txt4}",<br/>"${txt5}",<br/>"${txt6}",<br/>"${txt7}"</div><br/><em>]</em><br/> <i>function</i> <em>profSocialMedia(): void</em> <em>{</em><br/> <div><strong>const: string</strong> <i>linkedIn: string</i> = <a href="https://www.${txtLkdn}">${txtLkdn}</a><br/><strong>const: string</strong> <i>gitHub: string</i> = <a href="https://${txtGthb}">${txtGthb}</a></div><em>}</em>`;

    const bioPy = `<i>name: str</i> = <i>full_name: str</i> = <i>alias: str</i> = "${txt1}"<br /><i>bio: list[str]</i>`;
    const bioPy2 = `<i>any]</i> = <em>[</em><br /><div>"${txt2}", <br/>"${txt3}", <br/> "${txt4}",<br/>"${txt5}",<br/>"${txt6}",<br/>"${txt7}"</div><br/><em>]</em><br/> <i>def</i> <em>prof_social_media():</em><br/> <div><i>linked_in</i> = <a href="https://www.${txtLkdn}">${txtLkdn}</a><br/><i>git_hub</i> = <a href="https://${txtGthb}">${txtGthb}</a><br/><strong>return</strong> clicked;</div>`;

    const changeLanguage = (lg) => {
        if (lg !== language) {
            setStart(null);
            setLanguage(lg);
        }
    };

    return (
        <AboutStyled id="about">
            <h2 className="section-title">{languageCtx.titles.about}</h2>

            <div className="container-about">
                <div className="photo">
                    <div className="social">
                        <a rel="noreferrer" target="_blank" href="https://github.com/Tomasscattini">
                            <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tomas-scattini/">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
                        </a>
                    </div>
                    <div className="resume">
                        <a href="/resume.pdf" download="Resume Tomas Scattini">
                            <Button primary>{languageCtx.content.download}</Button>
                        </a>
                    </div>
                </div>

                <div className="bio">
                    <Menu
                        mode="horizontal"
                        style={{
                            backgroundColor: '#1E1E1E',
                            color: 'white',
                            borderBottom: 'none',
                            marginBottom: '10px'
                        }}
                    >
                        <Menu.Item style={{ margin: '15px' }} onClick={() => changeLanguage('js')}>
                            <span>JavaScript</span>
                        </Menu.Item>
                        <Menu.Item style={{ margin: '15px' }} onClick={() => changeLanguage('ts')}>
                            <span>TypeScript</span>
                        </Menu.Item>
                        <Menu.Item style={{ margin: '15px' }} onClick={() => changeLanguage('py')}>
                            <span>Python</span>
                        </Menu.Item>
                    </Menu>
                    <div className="content">
                        {start && (
                            <Typewriter
                                ref={$typewriter}
                                options={{ delay: 75, skipAddStyles: true }}
                                onInit={(typewriter) => {
                                    let bioText;
                                    let bioText2;
                                    let n;
                                    switch (language) {
                                        case 'js':
                                            bioText = bioJs;
                                            bioText2 = bioJs2;
                                            n = '9';
                                            break;
                                        case 'ts':
                                            bioText = bioTs;
                                            bioText2 = bioTs2;
                                            n = '19';
                                            break;
                                        case 'py':
                                            bioText = bioPy;
                                            bioText2 = bioPy2;
                                            n = '4';
                                            break;
                                        default:
                                            bioText = bioJs;
                                            bioText2 = bioJs2;
                                            break;
                                    }
                                    typewriter
                                        .typeString(bioText)
                                        .pauseFor(1000)
                                        .deleteChars(n)
                                        .changeDelay(15)
                                        .typeString(bioText2)
                                        .start();
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </AboutStyled>
    );
};

export default About;
