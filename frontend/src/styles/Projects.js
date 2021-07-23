import styled from 'styled-components';

export const ProjectsStyled = styled.section`
    width: 100vw;
    background-color: ${(props) => props.theme.color.main};
    padding: 120px 10vw 60px 10vw;
    &>div {
        display: flex;
        align-items: center;
        justify-content: center;
        .arrow {
            display: none;
            height: 30px;
            width: auto;
            margin: 0 10px;
            cursor: pointer;
            color: #383838;
            &:hover {
                    color: ${(props) => props.theme.color.secondary};
                }
            }
        }
        .carousel {
            width: 80vw;
            margin-top: 50px;
            .project {
                width: 80vw;
                min-height: 25vh;
                a {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    div {
                        position: relative;
                        display: flex;
                        align-items: center;
                        height: 100%;
                        width: 85%;
                        img {
                            object-fit: cover;
                            width: 100%;
                        }
                    }
                }
            }
        }
        .carouselSm {
            .project {
                margin-bottom: 100px;
                h3 {
                    text-align: center;
                    margin-top: 25px;
                    color: ${(props) => props.theme.font.color};
                }
                span, a {
                    color: ${(props) => props.theme.font.color};
                }
            }
        }
        .carouselLg {
            display: none;
        }
        @media ${(props) => props.theme.device.lgPhone} {
            justify-content: space-evenly;
            &>div .arrow {
                display: block;
            }
            .carouselSm {
                display: none;
            }
            .carouselLg {
                display: block;
                .project a div {
                    div {
                        position: absolute;
                        flex-direction: column;
                        justify-content: center;
                        padding: 0 2vw;
                        width: 100%;
                        height: 38.25vw;
                        background-color: ${(props) => props.theme.color.tertiaryLight};
                        z-index: 20;
                        transition: all .3s ease;
                        overflow-y: hidden;
                        h3 {
                            color: ${(props) => props.theme.font.color};
                            margin: 1vw 0;
                            font-size: 14px;
                            text-transform: uppercase;
                        }
                        p {
                            font-size: 11px;
                            color: ${(props) => props.theme.font.color};
                            text-align: justify;
                        }
                        &:hover {
                            opacity: 0;
                        }
                    }
                }
            }
            .carousel {
                height: 85vh;
                .project {
                    height: 85vh;
                }
            }
        }
    }
    @media ${(props) => props.theme.device.tablet} {
        min-height: 100vh;
        .carousel .project a div div {
            padding: 8vw;
            h3 {
                font-size: 20px;
                margin: 1vw 0 5vw 0;
            }
            p {
                font-size: 18px;
            }
        }
    }
    @media ${(props) => props.theme.device.laptop} {
        .arrow {
            height: 60px;
            margin: 0 50px;            
        }
    }
`;
