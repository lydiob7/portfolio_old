import React from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import styled from 'styled-components'

const ContactStyled = styled.div`
    padding: 60px 0;
    h3 {
        color: white;
        text-align: center;
    }
    .form {
        label {
            color: white;
        }
        button {
            width: 100%;
            background-color: ${props => props.theme.color.main};
            border: none;
            &:hover {
                background-color: ${props => props.theme.color.secondary};
            }
        }
    }
`

const Contact = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };

    return (
        <ContactStyled id="contact">
            <Row>
                <Col span={24}>
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

                </Col>
            </Row>
        </ContactStyled>
    )
}

export default Contact
