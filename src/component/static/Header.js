import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components'
import { Container } from './publicStyle'
import { Link } from 'react-router-dom'
import logo from '../../assets/redux-logo.png'
const connectList = [
    { icon: 'fas fa-user-alt mr-1', text: '會員登入' },
    { icon: 'fas fa-user-alt mr-1', text: '會員註冊' },
    { icon: 'fas fa-file mr-1', text: '還不是成員?' },
]
const mediaLogo = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram']
const homeLink = [
    { link: '/Home', name: '首頁' },
    { link: '/holiday', name: '假期' },
    { link: '/blog', name: '日誌' },
    { link: '/about', name: '關於我們' },
]
const Header = () => {
    return (
        <React.Fragment>
            <Navbar style={{ background: '#2C3E50' }}>
                <Container size="10" color="#fff">
                    <section className="d-flex">
                        {connectList.map(el =>
                            <div className="d-flex ml-2 align-items-center" key={el.text}>
                                <i className={el.icon}></i>
                                <div>{el.text}</div>
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
            </Navbar>
            <Navbar bg="light">
                <Container size="25" color="#333">
                    <section className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt="missing"
                            className="mr-2"
                            style={{ height: '5vmin', }}
                        />
                        <h3>React-Redux-Travel</h3>
                    </section>
                    <section className="d-flex">
                        {homeLink.map(el =>
                            <Link to={el.link} className="p-3" key={el.name}>
                                {el.name}
                            </Link>)}
                        <div className="p-3">
                            <i className="fas fa-search" />
                        </div>
                    </section>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
export default Header;