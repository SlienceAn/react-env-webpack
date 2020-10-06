import React from 'react';
import { Col, Card } from 'react-bootstrap'
import { SelectPlace } from './Home'
const Holiday = (props) => {
    return (
        <div>
            <SelectPlace />
            <div className="w-80 mt-3 mb-3 d-flex flex-wrap">
                {props.HolidayValue.map(el =>
                    <Col lg={4} className="mb-3" key={el}>
                        <Card>
                            <Card.Img src={el} />
                            <div className="holiday-nav d-flex">
                                <div className="d-flex align-items-center mr-2">
                                    <i className="fas fa-home mr-2" />
                                    <span>住宿</span>
                                </div>
                                <div className="d-flex align-items-center mr-2">
                                    <i className="fas fa-plane-departure mr-2" />
                                    <span>機場</span>
                                </div>
                                <div className="d-flex align-items-center mr-2">
                                    <i className="fas fa-bread-slice mr-2" />
                                    <span>早餐</span>
                                </div>
                            </div>
                            <div className="holiday-bottom w-100">
                                <span>VENICE</span>
                                <span>$250</span>
                            </div>
                        </Card>
                    </Col>)}
            </div>
        </div>
    );
};

export default Holiday;