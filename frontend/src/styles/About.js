import styled from 'styled-components';

export const AboutStyled = styled.main`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    padding: 120px 0 60px 0;
    background-color: ${(props) => props.theme.color.main};
    .container-about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
        z-index: 5;
        .photo {
            width: 100%;
            padding: 80px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            .social {
                .icon {
                    color: ${(props) => props.theme.font.color};
                    height: 50px;
                    width: auto;
                    margin: 60px 20px;
                    &:hover {
                        color: ${(props) => props.theme.color.secondaryLight};
                        opacity: 0.8;
                    }
                }
            }
            .resume {
                button {
                    background-color: ${(props) => props.theme.color.mainLight};
                    color: ${(props) => props.theme.font.color};
                    border: 1px solid #383838;
                    height: 45px;
                    padding: 0 20px;
                    &:hover {
                        background-color: ${(props) => props.theme.color.secondary};
                        color: ${(props) => props.theme.color.main};
                    }
                }
            }
        }
        .bio {
            width: 100%;
            padding: 0 10vw;
            .ant-menu {
                background-color: ${(props) => props.theme.color.main}!important;
                li {
                    color: ${(props) => props.theme.font.color}!important;
                }
            }
            .content {
                width: 80vw;
                height: 500px;
                padding: 0 40px 60px 60px;
                background-image: url(${(props) => props.theme.bioImg});
                background-size: cover;
                background-position: left center;
                background-repeat: no-repeat;
                overflow-y: scroll;
                -ms-overflow-style: none;
                scrollbar-width: none;
                transition: all 0.6s ease;
                &::-webkit-scrollbar {
                    display: none;
                }
                span {
                    color: ${(props) => props.theme.font.color};
                    font-size: 14px;
                    font-family: 'Courier Prime', monospace;
                    strong {
                        color: #569cd6;
                        font-weight: normal;
                    }
                    i {
                        font-style: normal;
                        color: #49b9f8;
                    }
                    em {
                        font-style: normal;
                        color: #dcdcaa;
                    }
                    & > div {
                        margin-left: 20px;
                    }
                    & > span {
                        font-family: sans-serif;
                    }
                    a {
                        color: ${(props) => props.theme.font.color};
                        &:hover {
                            color: ${(props) => props.theme.color.secondaryLight};
                        }
                    }
                }
            }
        }
    }
    @media ${(props) => props.theme.device.laptop} {
        .container-about {
            flex-direction: row-reverse;
            align-items: flex-start;
            .photo {
                width: 40%;
                padding: 10vw;
            }
            .bio {
                width: 60%;
                padding: 0 0 0 10vw;
                .content {
                    width: 100%;
                }
            }
        }
    }
`;
