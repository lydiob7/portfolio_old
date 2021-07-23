import styled from 'styled-components';

export const TechnologiesStyled = styled.section`
    width: 100vw;
    padding: 120px 10vw;
    background-color: ${(props) => props.theme.color.mainLight};
    & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img {
            object-fit: scale-down;
        }
        .icon {
            height: auto;
            width: 20vw;
            margin: 3vw;
        }
        .react {
            color: #5ed3f3;
            transition: all 0.9s ease-in-out;
        }
        .node {
            color: #3c823b;
            transition: all 0.8s ease-in-out;
        }
        .express {
            transition: all 0.7s ease-in-out;
        }
        .mongo {
            width: 14vw;
            margin: 0 6vw;
            transition: all 1s ease-in-out;
        }
        .js {
            color: #e8d44d;
            transition: all 0.5s ease-in-out;
        }
        .html {
            color: #dd4b25;
            transition: all 0.9s ease-in-out;
        }
        .css {
            color: #016cb4;
            transition: all 0.8s ease-in-out;
        }
        .git {
            color: #e84d31;
            transition: all 1s ease-in-out;
        }
        .github {
            color: #000;
            transition: all 0.5s ease-in-out;
        }
    }

    @media ${(props) => props.theme.device.tablet} {
        min-height: 100vh;
        & > div {
            .icon {
                width: 10vw;
            }
            .mongo {
                width: 8vh;
            }
        }
    }
    @media ${(props) => props.theme.device.laptop} {
        & > div {
            .icon {
                width: 7vw;
            }
            .mongo {
                width: 5vw;
            }
        }
    }
`;
