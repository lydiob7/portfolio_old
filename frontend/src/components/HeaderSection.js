import React from 'react'
import styled from 'styled-components'
import { Typography, Row, Col } from 'antd'

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${'' /* align-items: center; */}
    height: calc(100vh - 60px);
    margin-top: 60px;
    background-color: ${props => props.theme.color.mainLight};
    h1, h2, span {
        color: white;
    }
    `

const HeaderSection = () => {
    return (
        <HeaderStyled>
            <Row>
                <Col offset={3} span={18}>
                    <Row>
                        <Col span={24}>
                            <Typography.Text>{`<!DOCTYPE html>`}<br/>{`<html lang="en">`}<br/>{`<head>`}</Typography.Text>
                        </Col>
                        <Col offset={2} span={20}>
                            <Typography.Text>{`<meta charset="UTF-8">`}<br/>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}<br/>{`<title>Portfolio</title>`}</Typography.Text>
                        </Col>
                        <Col span={24}>
                            <Typography.Text>{`</head>`}<br/>{`<body>`}</Typography.Text>
                        </Col>
                        <Col offset={2} span={20}>
                            <Typography.Title level={1}>{"<h1>Tomi Scattini</h1>"}</Typography.Title>
                            <Typography.Title level={2}>{"<h2>Web Developer</h2>"}<br/>{"<h2>Full Stack</h2>"}</Typography.Title>
                        </Col>
                        <Col span={24}>
                            <Typography.Text>{`</body>`}<br/>{`</html>`}</Typography.Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </HeaderStyled>
    )
}

export default HeaderSection
