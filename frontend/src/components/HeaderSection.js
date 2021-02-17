import React from 'react'
import { useContextInfo } from '../hooks/languageContext'
import styled from 'styled-components'
import { Typography } from 'antd'

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${'' /* align-items: center; */}
    height: calc(100vh - 60px);
    margin-top: 60px;
    padding: 100px 10vw;
    background-color: ${props => props.theme.color.mainLight};
    &>img {
        position: absolute;
        height: calc(100vh - 60px);
        max-width: 100vw;
        object-fit: cover;
        left: 0;
        z-index: 0;
        opacity: .5;
    }
    h1.ant-typography {
        font-size: 14vw;
        width: 75vw;
        color: ${props => props.theme.font.color};
        text-transform: uppercase;
        margin: 0;
        z-index: 10;
        &>span {
            display: block;
            color: ${props => props.theme.font.color};
            margin: 0;
            font-size: 24px;
            z-index: 10;
        }
    }
    h2.ant-typography:first-of-type {
        width: 100%;
        text-align: center;
        color: ${props => props.theme.font.color};
    }
    @media ${props => props.theme.device.laptop} {
        &>img {
        left: calc(50vw - 400px);
    }
        h1.ant-typography {
            font-size: 11rem;
            &>span {
                font-size: 30px;
            }
        }
    }
    `

const HeaderSection = () => {
    const { languageCtx } = useContextInfo()

    return (
        <HeaderStyled>
            <img src="https://res.cloudinary.com/tomiscattini/image/upload/v1610380448/Portfolio/IMG_69478_vbwzk5_1_v7phz5.jpg" alt="Tomi Scattini" />
            <Typography.Title level={2}>{languageCtx.content.hello}</Typography.Title>
            <Typography.Title level={1}>Tomi Scattini <span>{languageCtx.content.profession}</span></Typography.Title>
        </HeaderStyled>
    )
}

export default HeaderSection
