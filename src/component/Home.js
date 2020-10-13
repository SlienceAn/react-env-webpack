import React, { useState } from 'react';
import Slide from '../assets/slider-bg.jpg'
import TypeImg from '../assets/type-bg.jpg'
import { Col, Form, Button, Card, Row } from 'react-bootstrap'
import { SlideSection, HolidyType } from '../component/static/publicStyle'
import TypeBg from '../assets/big-icons.png'
import { useHistory } from 'react-router-dom'
export const SelectPlace = (props) => {
    let history = useHistory()
    const [condition, setCon] = useState({
        place: '',
        date: ''
    })
    const style = {
        whiteSpace: 'nowrap',
        paddingRight: '20px',
        paddingTop: '5px',
        color: '#aaa',
    }
    const aside = {
        borderRight: '.5px solid #aaa',
        textAlign: 'right'
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        const newCon = Object.assign({}, condition)
        newCon[name] = value
        setCon(newCon)
    }
    const searchSubmit = () => {
        props.search(condition)
        history.push('/place')
    }
    return (
        <div className="w-100 common-bg">
            <Row className="m-0" color="#fff">
                <Col lg={2} className="p-2 find text-white" style={aside}>
                    <h6>尋找你的</h6>
                    <h4>假期 !!</h4>
                </Col>
                <Col lg={10} className="align-items-center searchType">
                    <Col lg={5} className="d-flex search">
                        <div htmlFor="where" style={style}>地點</div>
                        <Form.Control type="text" name="place" onChange={handleChange} />
                    </Col>
                    <Col lg={5} className="d-flex search">
                        <label htmlFor="date" style={style}>日期</label>
                        <Form.Control type="datetime-local" name="date" onChange={handleChange} />
                    </Col>
                    <Button variant="info" className="search-btn" onClick={searchSubmit}>搜尋</Button>
                </Col>
            </Row>
        </div>
    )
}
export const SpecialOffer = (props) => {
    return (
        <React.Fragment>
            <div className="text-center mt-3 mb-3">
                <h2>特別優惠</h2>
                <p>2020最受歡迎旅遊地點</p>
            </div>
            <section className="w-80 d-flex mb-3 flex-wrap">
                {Object.values(props).map(el =>
                    <Col lg={3} md={6} key={el.img} className="mb-3">
                        <Card>
                            <Card.Img src={el.img} alt="missing" />
                            <Card.Body>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Text style={{ color: 'red', fontSize: '1.5rem' }}>{el.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
            </section>
        </React.Fragment>
    )
}
export const Clients = (props) => {
    return (
        <div className="text-center mb-3 mt-3">
            <h2>獨特房源!</h2>
            <p>換個環境，安頓下來。探索附近適合居住、工作或放鬆休息的住宿</p>
            <div className="text-left w-80 d-flex mb-3 flex-wrap">
                {Object.values(props).map((el, index) =>
                    <div key={index} className="mb-3 hotel-block">
                        <Card>
                            <Card.Img src={el.img} style={{ width: '100%' }}></Card.Img>
                            <Card.Body>
                                <Card.Title><strong>{el.title}</strong></Card.Title>
                                <Card.Text>
                                    <i className="fas fa-star" />  {el.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>)}
            </div>
        </div>
    )
}
const Home = (props) => {
    const pos = [
        { pos: 0, text: 'Cruise' },
        { pos: -155, text: 'City Breaks' },
        { pos: -309, text: 'Honeymoon' },
        { pos: -464, text: 'Adventure' },
        { pos: -620, text: 'Safari' },
        { pos: -775, text: 'Beach' }
    ]
    return (
        <div>
            <SlideSection bg={Slide} size="665px">
                <section>
                    <h1>來點旅行吧!</h1>
                    <h3>旅行是對庸常生活的一次越獄 !</h3>
                </section>
            </SlideSection>
            <SelectPlace search={props.SearchPlace} />
            <SpecialOffer {...props.SpecialValue} />
            <SlideSection bg={TypeImg} size="465px">
                {pos.map(el => <section className="p-5" key={el.pos}>
                    <HolidyType bg={TypeBg} pos={el.pos} />
                    <p>{el.text}</p>
                </section>)}
            </SlideSection>
            <Clients {...props.ClientValue} />
        </div>
    );
}

export default Home;