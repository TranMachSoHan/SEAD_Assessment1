import React from "react";
import {Card,Container, Row, Col} from 'react-bootstrap';
import {FaCheck} from 'react-icons/fa'

const HotelUtility =(props) => {
    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title>
                        Usability
                    </Card.Title>
                    <Container>
                        <Row xs={1} lg={4}>
                            {props.utilities.map( utility=> (
                                <Col key={utility} className="items">
                                    <FaCheck/>
                                    <span >{utility}</span>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Card.Body>
                
            </Card>
        </div>
    )
}

export default HotelUtility;