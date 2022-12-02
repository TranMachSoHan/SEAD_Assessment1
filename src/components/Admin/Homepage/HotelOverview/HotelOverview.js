import React , { useState, useEffect } from "react";
import "./HotelOverview.css"
import axios from "axios";
import Card from "react-bootstrap/Card"
import {Container, Row, Col} from "react-bootstrap"
import { Field, Formik,Form } from "formik"; // <== this correct import
const HotelOverview = () => {
    const [loading, setLoading] = useState(true);
    let [data,setData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          axios.get('https://api.npoint.io/57c91b6f051e9f983cd7/overview').then(
              response => {
                setData(response.data);
                setLoading(false);
              }
          );
        } catch (error) {
          console.error(error)
        }
      };
  
      fetchData();
    }, []);

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
                                let myData = {
                                    ...data, 
                                    "hotelOwner":{
                                        "ownerName": value.ownerName, "ownerEmail": value.ownerEmail, "ownerPhone": value.ownerPhone
                                    },
                                    "hotelName": value.hotelName,
                                    "hotelAddress": value.hotelAddress
                                }
                                const fetchData = async () => {
                                    try {
                                        setLoading(true);
                                        axios.put('https://api.npoint.io/57c91b6f051e9f983cd7',myData).then(
                                            response => {
                                                console.log(response.data);
                                                setLoading(false);
                                            }
                                        );
                                    } catch (error) {
                                      console.error(error)
                                    }
                                  };
                              
                                fetchData();
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