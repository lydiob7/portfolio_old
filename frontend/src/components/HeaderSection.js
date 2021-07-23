import React from 'react';
import { useContextInfo } from '../hooks/languageContext';
import { Typography } from 'antd';
import { HeaderStyled } from '../styles/Header';

const HeaderSection = () => {
    const { languageCtx } = useContextInfo();

    return (
        <HeaderStyled>
            <img
                src="https://res.cloudinary.com/tomiscattini/image/upload/v1610380448/Portfolio/IMG_69478_vbwzk5_1_v7phz5.jpg"
                alt="Tomi Scattini"
            />
            <Typography.Title level={2}>{languageCtx.content.hello}</Typography.Title>
            <Typography.Title level={1}>
                Tomi Scattini <span>{languageCtx.content.profession}</span>
            </Typography.Title>
        </HeaderStyled>
    );
};

export default HeaderSection;
