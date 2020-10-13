import React from 'react'
import { createPortal } from 'react-dom'
import { Modal, Row, Col } from 'react-bootstrap'
import ReactBg from '../../assets/react-bg.jpg'
import styled from 'styled-components'
const WindowModal = (props) => {
    return createPortal(
        <Modal
            size="lg"
            show={props.show}
            onHide={() => props.setShow(false)}
        >
            <Modal.Header>
                <Modal.Title>
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <FormImg />
                    </Col>
                    <Col>
                        {props.children}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>,
        document.getElementById('modal')
    )
};
const FormImg = styled.div({
    backgroundImage: `url(${ReactBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize:'cover',
    width: '100%',
    height: '100%'
})
export default WindowModal;