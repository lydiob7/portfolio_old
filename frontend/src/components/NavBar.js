import React, { useState, useEffect } from 'react';
import { useContextInfo } from '../hooks/languageContext';
import { Typography, Menu, Dropdown } from 'antd';
import { HashLink } from 'react-router-hash-link';
import { NavBarStyled } from '../styles/NavBar';

const NavBar = () => {
    const [language, setLanguage] = useState('english');
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    const { languageCtx, changeLanguage } = useContextInfo();

    const scrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });
        return () => {
            window.removeEventListener('beforeinstallprompt', () => {});
        };
    });

    useEffect(() => {
        window.addEventListener('appinstalled', () => {
            setDeferredPrompt(null);
        });
        return () => {
            window.removeEventListener('appinstalled', () => {});
        };
    });

    const install = () => {
        deferredPrompt.prompt().then(async () => {
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
        });
    };

    const menu = (layout) => (
        <Menu mode={layout}>
            <Menu.Item>
                <HashLink to="#top">{languageCtx.menu.home}</HashLink>
            </Menu.Item>
            <Menu.Item>
                <HashLink to="/#about">{languageCtx.menu.about}</HashLink>
            </Menu.Item>
            <Menu.Item>
                <HashLink to="/#technologies">{languageCtx.menu.technologies}</HashLink>
            </Menu.Item>
            <Menu.Item>
                <HashLink to="/#projects">{languageCtx.menu.projects}</HashLink>
            </Menu.Item>
            <Menu.Item>
                <HashLink to="/#contact">{languageCtx.menu.contact}</HashLink>
            </Menu.Item>
            {deferredPrompt && (
                <Menu.Item>
                    <p onClick={install}>{languageCtx.menu.install}</p>
                </Menu.Item>
            )}
            <Menu.Item>
                {language === 'english' ? (
                    <p
                        onClick={() => {
                            changeLanguage('ES');
                            setLanguage('spanish');
                        }}
                    >
                        Español
                    </p>
                ) : (
                    <p
                        onClick={() => {
                            changeLanguage('EN');
                            setLanguage('english');
                        }}
                    >
                        English
                    </p>
                )}
            </Menu.Item>
        </Menu>
    );

    return (
        <NavBarStyled>
            <div id="logo" onClick={scrollTop}>
                <Typography.Title level={2}>Tomi Scattini</Typography.Title>
            </div>

            <div id="menu-mobile">
                <Dropdown
                    placement="bottomCenter"
                    overlay={() => menu('vertical')}
                    overlayClassName="submenu-mobile"
                    trigger={['click']}
                >
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Dropdown>
            </div>

            <div id="menu-lg">{menu('horizontal')}</div>
        </NavBarStyled>
    );
};

export default NavBar;
