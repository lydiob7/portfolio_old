import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
    --antd-wave-shadow-color: ${props => props.theme.color.secondary}!important;
}

body {
    position: relative;
    overflow-x: hidden;
    font-family: ${props => props.theme.font.primary};
    width: 100vw;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
}
.container {
    width: 90%;
    margin: 0 auto;
}

.section-title {
        text-align: center;
        color: ${props=>props.theme.font.color};
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
}

.ant-dropdown-menu {
    background-color: ${props => props.theme.color.tertiary}!important;
}

.ant-dropdown-menu-item a {
        color: ${props => props.theme.font.color};
        text-transform: uppercase;
    }

.ant-menu-item-active,
.ant-menu-item-selected {
    border-color: ${props => props.theme.color.secondary}!important;
}

.submenu-mobile {
    width: 100vw;
    a {
        text-align: center;
    }
}

#switch {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65px;
    top: 80px;
    z-index: 200;
    left: calc(50vw - 30px);
    svg {
        color: ${props => props.theme.font.color};
    }
}

.ant-switch-checked {
    background-color: black!important;
}

@media ${props => props.theme.device.laptop} {
    .container {
        width: 1200px;
    }
}
`


export default GlobalStyle
