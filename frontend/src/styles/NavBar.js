import styled from 'styled-components';

export const NavBarStyled = styled.nav`
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
    background-color: ${(props) => props.theme.color.tertiary};
    #logo {
        cursor: pointer;
        h2 {
            margin: 0;
            color: ${(props) => props.theme.font.color};
            text-transform: uppercase;
            &:hover {
                color: ${(props) => props.theme.color.secondary};
                opacity: 0.8;
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
                background-color: ${(props) => props.theme.font.color};
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
        color: ${(props) => props.theme.font.color};
        span:hover {
            opacity: 0.6;
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
                background-color: ${(props) => props.theme.color.tertiary};
                border-bottom: none;
            }
            .ant-menu-item {
                margin: 0 5px;
            }
            a,
            p {
                text-transform: uppercase;
                color: ${(props) => props.theme.font.color};
            }
        }
    }
    @media ${(props) => props.theme.device.laptop} {
        #menu-lg {
            .ant-menu-item,
            p {
                margin: 0 15px;
            }
        }
    }
`;
