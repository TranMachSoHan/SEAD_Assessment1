import React from "react";
import './HotelImages.css'
import { Row, Col, Container } from 'react-bootstrap';

const HotelImages = (props) =>{
    return (
        <Container>
            <Row xs={1} lg={4}>
                {props.hotelPhotos.slice(0,8).map( photo=> (
                    <Col key={photo}>
                        <img width="400" height="200" src={photo} alt={photo}/>
                    </Col>
                ))}
                
            </Row>
            
    </Container>
    )
}

export default HotelImages;