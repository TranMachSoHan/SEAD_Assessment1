import React from "react";
import HotelOwner from "./HotelOwner/HotelOwner";
import HotelUtility from "../HotelUtility/HotelUtility";
import { Container, Row, Col } from "react-bootstrap";
import './HotelOverview.css'
import HotelDetailHeader from "./HotelDetailHeader/HotelDetailHeader";

const HotelOverview = (props)=> {
    return (
        <Container >
            <Row xs={1} lg={2}>
                <Col className="hotelOverview">
                    <HotelDetailHeader detail={props.overview}></HotelDetailHeader>
                    <HotelOwner hotelOwner={props.overview.hotelOwner}></HotelOwner>
                    <HotelUtility utilities={props.overview.utilities}></HotelUtility>
                </Col>
                <Col>

                </Col>
            </Row>
            
        </Container>
    )
}

export default HotelOverview;