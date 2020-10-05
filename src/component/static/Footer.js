import React from 'react';
import { Container } from './publicStyle'
import { Col, Form, Button } from 'react-bootstrap'
import footerImg from '../../assets/footer-latest.jpg'
const Footer = () => {
    const tags = ['React', 'Redux', 'React-Redux', 'Webpack', 'React-router-dom', 'styled-components']
    return (
        <footer className="w-100" style={{ background: '#2C3E50' }}>
            <Container color="#fff">
                <Col className="p-3">
                    <header className="footer-header">寫信給我們</header>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
                    <Form className="d-flex">
                        <Form.Control></Form.Control>
                        <Button variant="info" className="ml-2">GO</Button>
                    </Form>
                </Col>
                <Col className="p-3">
                    <header className="footer-header">最新消息</header>
                    <div className="d-flex">
                        <div className="news-plc">
                            <img src={footerImg} className="footer-img" style={{ width: '90%' }} />
                        </div>
                        <div className="news-info">
                            <span style={{ fontSize: '0.875em' }}>Postformat Gallery: Multiple images</span>
                            <span style={{ fontSize: '0.875em' }}>December 12, 2012 - 9:11 pm</span>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div className="news-plc">
                            <img src={footerImg} className="footer-img" style={{ width: '90%' }} />
                        </div>
                        <div className="news-info">
                            <span style={{ fontSize: '0.875em' }}>Postformat Gallery: Multiple images</span>
                            <span style={{ fontSize: '0.875em' }}>December 12, 2012 - 9:11 pm</span>
                        </div>
                    </div>
                </Col>
                <Col className="p-3">
                    <header className="footer-header">標籤</header>
                    {tags.map(el => <div className="tags" key={el}>{el}</div>)}
                </Col>
                <Col className="p-3">
                    <header className="footer-header">住址</header>
                    <p>DieSachbearbeiter Schonhauser Allee 167c,10435 Berlin Germany E-mail:moin@blindtextgenerator.de</p>
                </Col>
            </Container>
            <section style={{ borderTop: '.5px solid #aaa', textAlign: 'center' }}>
                <p className="mt-3" style={{ color: '#7F91A2' }}>© 2014 Voyage. All rights reserved | Template by W3layouts</p>
                <div style={{ width: '3%', margin: '0 auto' }}>
                    <div className="footer-top" />
                </div>
            </section>
        </footer>
    );
}

export default Footer;