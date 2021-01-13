import React from 'react'
import { Typography, Menu, Dropdown } from 'antd'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

const NavBarStyled = styled.div`
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
                margin: 0 10px;
            }
            a {
                text-transform: uppercase;
                color: ${props => props.theme.font.color};
            }
        }
    }
    @media ${props => props.theme.device.laptop} {
        #menu-lg {
            .ant-menu-item {
                margin: 0 20px;
            }
        }
    }
`

const NavBar = () => {

    const scrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    }

    const menu = (layout) => (
    <Menu mode={layout}>
        <Menu.Item>
            <HashLink onClick={scrollTop}>Home</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#about'>About</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#technologies'>Technologies</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#projects'>Projects</HashLink>
        </Menu.Item>
        <Menu.Item>
            <HashLink to='/#contact'>Contact</HashLink>
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
