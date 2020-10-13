import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { SelectPlace } from './Home'
import { Link } from 'react-router-dom'
const Blog = props => {
    return (
        <div>
            <SelectPlace search={props.SearchPlace}/>
            <div className="w-80 mt-3 mb-3 d-flex flex-wrap">
                {props.BlogValue.map((el, index) => <Col lg={6} className="mb-3" key={el.admin}>
                    <Card>
                        <Card.Img src={el.img} />
                        <div className="blog-section d-flex justify-content-center">
                            <img src={el.admin} className="admin" />
                            <div className="d-flex align-items-center mr-2">
                                <i className="far fa-address-book mr-2" />
                                <span>ADMIN</span>
                            </div>
                            <div className="d-flex align-items-center mr-2">
                                <i className="far fa-address-book mr-2" />
                                <span>4-03-2014</span>
                            </div>
                            <div className="d-flex align-items-center mr-2">
                                <i className="far fa-address-book mr-2" />
                                <span>Blog,News</span>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>{el.text}</Card.Text>
                            <Button variant="dark">
                                <Link to={`/More/${index + 1}`}>
                                    <div className="text-white">看更多</div>
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>)}
            </div>
        </div>
    );
};

export default Blog; 