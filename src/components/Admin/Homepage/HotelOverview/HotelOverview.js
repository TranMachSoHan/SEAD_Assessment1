import React , { useState } from "react";
import "./HotelOverview.css"
import Card from "react-bootstrap/Card"
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap"
import { Field, Formik,Form } from "formik"; // <== this correct import
const HotelOverview = (props) => {
    const [loading, setLoading] = useState(false);
    let [data,setData] = useState(props.hotel.overview);

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <Card>
                    <Card.Header>Hotel Details</Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={{
                                hotelName: data.hotelName,
                                hotelAddress : data.hotelAddress,
                                ownerName: data.hotelOwner.ownerName,
                                ownerEmail: data.hotelOwner.ownerEmail,
                                ownerPhone: data.hotelOwner.ownerPhone
                            }}
                            onSubmit={value=>{
                                
                                let overviewChangedData = {
                                    ...data, 
                                    "hotelOwner":{
                                        "ownerName": value.ownerName, "ownerEmail": value.ownerEmail, "ownerPhone": value.ownerPhone
                                    },
                                    "hotelName": value.hotelName,
                                    "hotelAddress": value.hotelAddress
                                }
                                let dataPost = {
                                    ...props.hotel,
                                    "overview": overviewChangedData
                                }

                                setLoading(true);
                                axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", dataPost).then(
                                    response => {
                                        setLoading(false);
                                        setData(response.data.overview);
                                    }
                                )
                            }}
                            >
                            <Form>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="inputItem">
                                                <label htmlFor="hotelName">Hotel Name</label>
                                                <Field name="hotelName" className="form-control"/>
                                            </div>
                                            <div className="inputItem">
                                                <label htmlFor="hotelAddress">Hotel Address</label>
                                                <Field name="hotelAddress" className="form-control"/>
                                            </div>
                                        </Col>
                                        <Col>
                                        <div className="inputItem">
                                                <label htmlFor="ownerName">Owner Name</label>
                                                <Field name="ownerName" className="form-control"/>
                                            </div>
                                            <div className="inputItem">
                                                <label htmlFor="ownerEmail">Owner Email</label>
                                                <Field name="ownerEmail" className="form-control"/>
                                            </div>
                                            <div className="inputItem">
                                                <label htmlFor="ownerPhone">Owner Phone</label>
                                                <Field name="ownerPhone" className="form-control"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                </Container>
                                
                                <button type="submit">Save changes</button>
                            </Form>
                        </Formik>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default HotelOverview;