import React, { useState, useEffect } from "react";
import { Field, Formik,Form, useField } from "formik"; // <== this correct import
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../../Helper/MyDatePicker";

const RoomFormRate = (props) => {
    const [loading, setLoading] = useState(true);
    const [hotel,setHotel] = useState({});
    const [room, setRoom] = useState({});
    const {roomID} = useParams();

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && 
                (<Card>
                    <Card.Header>
                        Specific Rate
                    </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={{ 
                                dateFrom: new Date() , 
                                dateTo: new Date(),
                                rating: 0
                            }}
                            onSubmit={(values) => {
                                alert(JSON.stringify(values));
                            }}
                        >
                            {(props) => (
                            <Form>
                                <div className="inputItem">
                                    <label htmlFor="dateFrom">From</label>
                                    <MyDatePicker name="dateFrom" />
                                </div>
                                <div className="inputItem">
                                    <label htmlFor="dateTo">To</label>
                                    <MyDatePicker name="dateTo" />
                                </div>
                                <div className="inputItem">
                                    <label htmlFor="rating">Specific Rating</label>
                                    <Field name="rating" className="form-control" />
                                </div>
                                <button type="submit">Submit Change</button>
                            </Form>
                            )}
                        </Formik>
                    </Card.Body>
                    
                </Card>)
            }
        </div>
    )
}

export default RoomFormRate;