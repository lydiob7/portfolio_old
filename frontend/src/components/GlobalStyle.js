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

.ant-dropdown-menu {
    background-color: ${props => props.theme.color.tertiary}!important;
}

.ant-dropdown-menu-item a {
        color: ${props => props.theme.font.color};
    }

.ant-menu-item-active,
.ant-menu-item-selected {
    border-color: ${props => props.theme.color.secondary}!important;
}

.ant-switch-checked {
    background-color: ${props => props.theme.color.secondary}!important;
}
.submenu-mobile {
    width: 100vw;
    a {
        text-align: center;
    }
}

#switch {
    position: fixed;
    top: 80px;
    z-index: 200;
    left: calc(50vw - 22px);
}
@media ${props => props.theme.device.laptop} {
    .container {
        width: 1200px;
    }
}
`


export default GlobalStyle
