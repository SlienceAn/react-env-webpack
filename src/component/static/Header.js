import React, { useState } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import { Container } from './publicStyle'
import { Link } from 'react-router-dom'
import logo from '../../assets/redux-logo.png'
import WindowModal from './Modal'
import { MemberLogin, MemberSign, MemberNo } from './MemberForm'
const connectList = [
    { icon: 'fas fa-user-alt mr-1', text: '會員登入' },
    { icon: 'fas fa-user-alt mr-1', text: '會員註冊' },
]
const mediaLogo = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram']
const homeLink = [
    { link: '/Home', name: '首頁' },
    { link: '/holiday', name: '假期' },
    { link: '/blog', name: '日誌' },
    { link: '/about', name: '關於我們' },
]
const Header = () => {
    const [show, setShow] = useState(false)
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('');
    const memberStatus = (val) => {
        switch (val) {
            case '會員登入':
                setTitle('會員登入')
                setContent(<MemberLogin />)
                break;
            case '會員註冊':
                setTitle('會員註冊')
                setContent(<MemberSign />)
                break;
        }
        setShow(true)
    }
    return (
        <React.Fragment>
            <Navbar style={{ background: '#2C3E50' }}>
                <Container size="10" color="#fff">
                    <section className="d-flex">
                        {connectList.map(el =>
                            <div className="d-flex ml-2 align-items-center" key={el.text}>
                                <i className={el.icon}></i>
                                <div className="loginText" onClick={() => memberStatus(el.text)}>{el.text}</div>
                            </div>)}
                    </section>
                    <section className="d-flex">
                        {mediaLogo.map(el =>
                            <div className="p-1" key={el}>
                                <i className={el}></i>
                            </div>
                        )}
                    </section>
                </Container>
                <WindowModal
                    show={show}
                    title={title}
                    setShow={setShow}
                >
                    {content}
                </WindowModal>
            </Navbar>
            <Navbar bg="light">
                <Row className="row-80">
                    <Col lg={6} className="d-flex align-items-center nav-logo">
                        <img
                            src={logo}
                            alt="missing"
                            className="mr-2"
                            style={{ height: '5vmin', }}
                        />
                        <h3>React-Redux-Travel</h3>
                        <button className="ml-auto text-white link-btn" style={{ background: '#2C3E50' }}>
                            <i className="fas fa-align-justify" />
                        </button>
                    </Col>
                    <Col lg={6} className="router-link">
                        {homeLink.map(el =>
                            <Link to={el.link} className="p-3" key={el.name}>
                                {el.name}
                            </Link>)}
                        <div className="p-3">
                            <i className="fas fa-search" />
                        </div>
                    </Col>
                </Row>
            </Navbar>
        </React.Fragment>
    );
}
export default Header;