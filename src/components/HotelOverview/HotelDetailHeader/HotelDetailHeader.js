import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const HotelDetailHeader = (props) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>
                    {props.detail.hotelName}
                </Card.Title>
                <Card.Subtitle>
                    {props.detail.hotelAddress}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default HotelDetailHeader;