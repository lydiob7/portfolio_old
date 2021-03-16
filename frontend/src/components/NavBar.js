import React, {useState, useEffect } from 'react'
import { useContextInfo } from '../hooks/languageContext'
import { Typography, Menu, Dropdown } from 'antd'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

const NavBarStyled = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    width: 100vw;
    z-index: 500;
    background-color: ${props => props.theme.color.tertiary};
    #logo {
        cursor: pointer;
        h2 {
            margin: 0;
            color: ${props => props.theme.font.color};
            text-transform: uppercase;
            &:hover {
                color: ${props => props.theme.color.secondary};
                opacity: .8;
            }
        }
    }
    #menu-mobile {
        div {
            display: block;
            width: 50px;
            z-index: 20;
            cursor: pointer;
            span {
                height: 2px;
                width: 30px;
                margin: 6px auto;
                background-color: ${props => props.theme.font.color};
                text-align: center;
                display: block;
                border-radius: 20%;
            }
        }
    }
    #menu-lg {
        display: none;
    }
    #languages {
        color: ${props => props.theme.font.color};
        span:hover {
            opacity: .6;
        }
    }
    @media (min-width: 850px) {
        #menu-mobile {
            div {
                display: none;
            }
        }
        #menu-lg {
            display: block;
            .ant-menu {
                background-color: ${props => props.theme.color.tertiary}; 
                border-bottom: none;
            }
            .ant-menu-item {
                margin: 0 5px;
            }
            a, p {
                text-transform: uppercase;
                color: ${props => props.theme.font.color};
            }
        }
    }
    @media ${props => props.theme.device.laptop} {
        #menu-lg {
            .ant-menu-item, p {
                margin: 0 15px;
            }
        }
    }
`

const NavBar = () => {
    const [language, setLanguage] = useState('english')
    const [ deferredPrompt, setDeferredPrompt ] = useState(null)

    const { languageCtx, changeLanguage } = useContextInfo()

    const scrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

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
        window.addEventListener('appinstalled', ()=> {
            setDeferredPrompt(null);
        });
        return () => {
            window.removeEventListener('appinstalled', () => {});
        };
    });


    const install = () => {
        deferredPrompt.prompt().then(async() => {
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
        })
    };

    const menu = (layout) => (
    <Menu mode={layout}>
        <Menu.Item>
            <HashLink to="#top">{languageCtx.menu.home}</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#about'>{languageCtx.menu.about}</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#technologies'>{languageCtx.menu.technologies}</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#projects'>{languageCtx.menu.projects}</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#contact'>{languageCtx.menu.contact}</HashLink>
        </Menu.Item>
        {deferredPrompt && <Menu.Item>
            <p onClick={install}>{languageCtx.menu.install}</p>
        </Menu.Item>}
        <Menu.Item>
            {language === 'english' ? 
                <p onClick={() => {
                    changeLanguage('ES')
                    setLanguage('spanish')
                    }}>Español</p> : 
                <p onClick={() => {
                    changeLanguage('EN')
                    setLanguage('english')
                    }}>English</p>
            }
        </Menu.Item>
    </Menu>)

    return (
        <NavBarStyled>
            <div id="logo" onClick={scrollTop}>
                <Typography.Title level={2}>Tomi Scattini</Typography.Title>
            </div>

            <div id="menu-mobile">
                <Dropdown placement="bottomCenter" overlay={() => menu('vertical')} overlayClassName="submenu-mobile" trigger={['click']}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Dropdown>
            </div>

            <div id="menu-lg">
                {menu('horizontal')}
            </div>
        </NavBarStyled>
    )
}

export default NavBar
