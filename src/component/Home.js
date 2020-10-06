import React from 'react';
import Slide from '../assets/slider-bg.jpg'
import TypeImg from '../assets/type-bg.jpg'
import { Col, Form, Button, Card } from 'react-bootstrap'
import { Container, SlideSection, HolidyType } from '../component/static/publicStyle'
import TypeBg from '../assets/big-icons.png'
export const SelectPlace = () => {
    const style = {
        whiteSpace: 'nowrap',
        paddingRight: '20px',
        color: '#aaa',
        fontSize: '1.5rem'
    }
    const aside = {
        borderRight: '.5px solid #aaa',
        textAlign: 'right'
    }
    return (
        <div className="w-100 common-bg">
            <Container color="#fff">
                <Col lg={2} className="p-2" style={aside}>
                    <h6>尋找你的</h6>
                    <h4>假期 !!</h4>
                </Col>
                <Col lg={10} className="d-flex align-items-center">
                    <Col className="d-flex">
                        <label htmlFor="where" style={style}>地點</label>
                        <Form.Control id="where" />
                    </Col>
                    <Col className="d-flex">
                        <label htmlFor="date" style={style}>日期</label>
                        <Form.Control id="date" />
                    </Col>
                    <Button variant="info">搜尋</Button>
                </Col>
            </Container>
        </div>
    )
}
const SpecialOffer = (props) => {
    return (
        <React.Fragment>
            <div className="text-center mt-3 mb-3">
                <h2>特別優惠</h2>
                <p>2020最受歡迎旅遊地點</p>
            </div>
            <section className="w-80 d-flex mb-3">
                {Object.values(props).map(el =>
                    <Col key={el.img}>
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
const Clients = (props) => {
    return (
        <div className="text-center mb-3 mt-3">
            <h2>旅遊回饋</h2>
            <p>聽聽看其他人怎麼說!</p>
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
            <SelectPlace />
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