import styled from 'styled-components';

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.color.tertiary};
    height: 120px;
    width: 100vw;
    position: relative;
    bottom: 0;
    padding: 0 10vw;
    p {
        color: ${(props) => props.theme.font.color};
        text-align: center;
    }
    .social {
        .icon {
            color: ${(props) => props.theme.font.color};
            height: 20px;
            width: auto;
            margin: 0 10px;
            &:hover {
                color: ${(props) => props.theme.color.secondaryLight};
            }
        }
    }
    @media ${(props) => props.theme.device.tablet} {
        height: 60px;
        flex-direction: row;
        justify-content: space-between;
    }
`;
