import React, { useState } from 'react'
import { useContextInfo } from '../hooks/languageContext'
import { Typography, Form, Input, Button, Row, Col, Spin } from 'antd'
import styled from 'styled-components'
import { contactFn } from '../services/contact'
import { LoadingOutlined } from '@ant-design/icons';

const ContactStyled = styled.section`
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
        position: relative;
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
        &:disabled,
        &[disabled] {
            background-color: gray;
            color: white;
            opacity: .8;
        }
        .ant-spin {
            color: ${props => props.theme.font.color};
            position: absolute;
            left: calc(50% - 25px);
            z-index: 3;
            .anticon {
                font-size: 16px!important;
            }
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
    const [ btnDisabled, setBtnDisabled ] = useState(false)

    const { languageCtx } = useContextInfo()
    
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    const onFinish = async(values) => {
        setBtnDisabled(true)
        setSpinner(true)
        await contactFn(values);
        setMessageSent(true)
        setSpinner(false)
        setBtnDisabled(false)
    };
    
    const onFinishFailed = (errorInfo) => {
        alert('Failed:', errorInfo);
        setSpinner(false)
        };

    return (
        <ContactStyled id="contact">
            <Row>
            {!messageSent ?
                <><Col span={24}>
                    <Typography.Title className="section-title" level={2} >{languageCtx.titles.contact}</Typography.Title>
                </Col>

                <Col xs={{offset: 2, span: 20}} md={{offset: 4, span: 16}} lg={{offset: 8, span: 8}}>

                {/* <Typography.Title level={3} style={{textAlign: "center"}}>{languageCtx.networkError}</Typography.Title> */}

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
                            rules={[{ required: true, message: languageCtx.form.message1 }, { type: 'email' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={languageCtx.form.subject}
                            name="subject"
                            rules={[{ required: true, message: languageCtx.form.message2 }]}
                        >
                            <Input />
                        </Form.Item>
                        
                        <Form.Item
                            label={languageCtx.form.message}
                            name="message"
                            rules={[{ required: true, message: languageCtx.form.message3 }]}
                        >
                            <Input.TextArea autoSize={{minRows: 4, maxRows: 10}} />
                        </Form.Item>

                        <Form.Item>
                            <Button disabled={btnDisabled} type="primary" htmlType="submit">
                            {spinner ? <>{languageCtx.form.sending} <Spin indicator={antIcon} /></> : languageCtx.form.send }
                            </Button>
                        </Form.Item>
                        </Form>

                </Col></> : <Col className="message-sent" xs={{offset: 2, span: 20}} md={{offset: 4, span: 16}}>
                    <Row>
                        <Col span={24}>
                            <Typography.Title level={2}>{languageCtx.form.thanks} </Typography.Title>
                            <Typography.Title level={4}>{languageCtx.form.thanks2}</Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span: 24}} sm={{offset: 4, span: 16}} lg={{offset: 8, span: 8}}>
                            <Button onClick={()=> setMessageSent(null)}>{languageCtx.form.sendagain}</Button>
                        </Col>
                    </Row>
                </Col>}
            </Row>
        </ContactStyled>
    )
}

export default Contact
