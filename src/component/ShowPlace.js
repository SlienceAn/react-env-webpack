import React from 'react';
import { SelectPlace } from '../component/Home'
import { Row, Col, Card } from 'react-bootstrap'
const ShowPlace = (props) => {
    const tags = {
        color: '#fff',
        padding: '.5rem',
        background: '#2C3E50',
        border: '2px solid #fff',
        borderRadius: '1rem',
        marginLeft: '.5rem'
    }
    return (
        <div>
            <SelectPlace search={props.SearchPlace} />
            <div className="w-80 mt-3 mb-3">
                {props.PlaceValue.length === 0 ?
                    <div className="w-100 text-center" style={{ minHeight: '50vh' }}>
                        <h1>讀取資料中...</h1>
                    </div> :
                    <Row>
                        {props.PlaceValue.map(el =>
                            <Col lg={3} className="mb-3">
                                <Card style={{ minHeight: '100%' }}>
                                    <Card.Img src={el.placeimg} />
                                    <Card.Body>
                                        <Card.Title><strong>{el.name.substring(0, 27) + "..."}</strong></Card.Title>
                                        <Card.Text>{el.text.substring(0,50)}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex">
                                        <div style={tags}>{el.city}</div>
                                        <div style={tags}>旅遊</div>
                                        <div style={tags}>住宿</div>
                                    </Card.Footer>
                                </Card>
                            </Col>)}
                    </Row>
                }
            </div>

        </div>
    );
};

export default ShowPlace;