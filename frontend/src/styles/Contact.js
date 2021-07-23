import styled from 'styled-components';

export const ContactStyled = styled.section`
    padding: 50px 0;
    background-color: ${(props) => props.theme.color.tertiary};
    h2,
    h4 {
        color: ${(props) => props.theme.font.color};
        text-align: center;
    }
    .form {
        label {
            color: ${(props) => props.theme.font.color};
        }
        input,
        textarea {
            color: ${(props) => props.theme.font.color};
            background-color: transparent;
            border: 2px solid gray;
        }
    }
    button {
        position: relative;
        width: 100%;
        background-color: ${(props) => props.theme.color.main};
        color: ${(props) => props.theme.font.color};
        border: 1px solid #383838;
        span {
            margin: 0 20px;
        }
        &:hover {
            background-color: ${(props) => props.theme.color.secondary};
            color: ${(props) => props.theme.color.main};
        }
        &:disabled,
        &[disabled] {
            background-color: gray;
            color: white;
            opacity: 0.8;
        }
        .ant-spin {
            color: ${(props) => props.theme.font.color};
            position: absolute;
            left: calc(50% - 25px);
            z-index: 3;
            .anticon {
                font-size: 16px !important;
            }
        }
    }
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
        background-color: ${(props) => props.theme.color.secondary};
        color: ${(props) => props.theme.color.main};
    }
    .message-sent {
        height: 425.2px;
        button {
            margin-top: 50px;
        }
    }
    @media ${(props) => props.theme.device.tablet} {
        min-height: calc(100vh - 60px);
        padding: 150px 0;
    }
`;
