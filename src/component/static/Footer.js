import React from 'react';
import { Container } from './publicStyle'
import { Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer className="w-100" style={{ background: '#2C3E50' }}>
            <Container>
                <Col className="p-3">
                    <header className="footer-header">New Letter</header>
                </Col>
                <Col className="p-3">
                    <header className="footer-header">New Latest</header>
                </Col>
                <Col className="p-3">
                    <header className="footer-header">New Tags</header>
                </Col>
                <Col className="p-3">
                    <header className="footer-header">Address</header>
                </Col>
            </Container>
            <Container>

            </Container>
        </footer>
    );
}

export default Footer;