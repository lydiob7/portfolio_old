import React, { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col, Spin } from 'antd'
import styled from 'styled-components'
import { contactFn } from '../services/contact'
import { LoadingOutlined } from '@ant-design/icons';

const ContactStyled = styled.div`
    padding: 50px 0;
    background-color: ${props => props.theme.color.tertiary};    
    h2, h4 {
        color: ${props => props.theme.font.color};
        text-align: center;
    }
    .form {
        label {
            color: ${props => props.theme.font.color};
        }
        input, textarea {
            color: ${props => props.theme.font.color};
            background-color: transparent;
            border: 2px solid gray;
        }
    }
    button {
        width: 100%;
        background-color: ${props => props.theme.color.main};
        color: ${props => props.theme.font.color};
        border: 1px solid #383838;
        span {
            margin: 0 20px;
        }
        &:hover {
            background-color: ${props => props.theme.color.secondary};
            color: ${props => props.theme.color.main};
        }
    }
    .ant-btn-primary:hover, .ant-btn-primary:focus {
            background-color: ${props => props.theme.color.secondary};
            color: ${props => props.theme.color.main};
    }
    .message-sent {
        height: 425.2px;
        button {
            margin-top: 50px;
        }
    }
    @media ${props => props.theme.device.tablet} {
        min-height: calc(100vh - 60px);
        padding: 150px 0;
    }
`

const Contact = () => {
    const [ messageSent, setMessageSent ] = useState(null)
    const [ spinner, setSpinner ] = useState(null)
    
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    const onFinish = async(values) => {
        setSpinner(true)
        await contactFn(values);
        setMessageSent(true)
        setSpinner(false)
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };

    return (
        <ContactStyled id="contact">
            <Row>
            {!messageSent ?
                <><Col span={24}>
                    <Typography.Title className="section-title" level={2} >Get in touch</Typography.Title>
                </Col>

                <Col xs={{offset: 2, span: 20}} md={{offset: 4, span: 16}} lg={{offset: 8, span: 8}}>

                    <Form
                        name="contact"
                        className="form"
                        layout="vertical"
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[{ required: true, message: 'Please name your message!' }]}
                        >
                            <Input />
                        </Form.Item>
                        
                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Please write your message!' }]}
                        >
                            <Input.TextArea autoSize={{minRows: 4, maxRows: 10}} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Send message {spinner && <Spin indicator={antIcon} />}
                            </Button>
                        </Form.Item>
                        </Form>

                </Col></> : <Col className="message-sent" xs={{offset: 2, span: 20}} md={{offset: 4, span: 16}}>
                    <Row>
                        <Col span={24}>
                            <Typography.Title level={2}>Thanks for contacting! </Typography.Title>
                            <Typography.Title level={4}>I'll be getting back to you shortly</Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 24}} sm={{offset: 4, span: 16}} lg={{offset: 8, span: 8}}>
                            <Button onClick={()=> setMessageSent(null)}>Get in touch again!</Button>
                        </Col>
                    </Row>
                </Col>}
            </Row>
        </ContactStyled>
    )
}

export default Contact
