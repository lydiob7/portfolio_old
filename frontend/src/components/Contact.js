import React, { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import styled from 'styled-components'
import { contactFn } from '../services/contact'

const ContactStyled = styled.div`
    padding: 150px 0;
    background-color: black;
    height: calc(100vh - 60px);    
    h3, h4 {
        color: white;
        text-align: center;
    }
    .form {
        label {
            color: white;
        }
        input, textarea {
            color: white;
            background-color: transparent;
            border: 2px solid ${props => props.theme.color.mainLight};
        }
    }
    button {
        width: 100%;
        background-color: ${props => props.theme.color.main};
        color: white;
        border: none;
        &:hover {
            background-color: ${props => props.theme.color.secondary};
        }
    }
    .message-sent {
        height: 425.2px;
        button {
            margin-top: 50px;
        }
    }
`

const Contact = () => {
    const [ messageSent, setMessageSent ] = useState(null)

    const onFinish = (values) => {
        contactFn(values);
        setMessageSent(true)
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };

    return (
        <ContactStyled id="contact">
            <Row>
            {!messageSent ?
                <><Col span={24}>
                    <Typography.Title level={3} >Get in touch</Typography.Title>
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
                            Send message
                            </Button>
                        </Form.Item>
                        </Form>

                </Col></> : <Col className="message-sent" xs={{offset: 2, span: 20}} md={{offset: 4, span: 16}}>
                    <Row>
                        <Col span={24}>
                            <Typography.Title level={3}>Thanks for contacting!</Typography.Title>
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
