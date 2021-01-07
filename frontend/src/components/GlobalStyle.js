import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
    --antd-wave-shadow-color: ${props => props.theme.color.secondary}!important;
}

body {
    position: relative;
    overflow-x: hidden;
    background-color: ${props => props.theme.color.mainLight};
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
.ant-menu-item-active,
.ant-menu-item-selected {
    border-color: ${props => props.theme.color.secondary}!important;
}
.submenu-mobile {
    width: 100vw;
    a {
        color: white;
        text-align: center;
    }
}
@media ${props => props.theme.device.laptop} {
    .container {
        width: 1200px;
    }
}
`


export default GlobalStyle
