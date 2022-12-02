import React, { useState, useEffect } from "react";
import { Field, Formik,Form, useField } from "formik"; // <== this correct import
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../Helper/MyDatePicker";

const RoomFormRate = (props) => {
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [hotel,setHotel] = useState({});
    const {roomID} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {

        try {
            console.log(Number(roomID));
            axios.get(`https://api.npoint.io/57c91b6f051e9f983cd7`).then(
                response => {
                    setHotel(response.data);
                    if(roomID !== -1){
                        setRoom(response.data.roomType[roomID]);
                    }
                    setLoading(false);
                }
            )
        } catch (error) {
            console.error(error)
        }
        };
    
        fetchData();

    }, []);
      

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
                                dateTo: new Date()
                            }}
                            onSubmit={(values) => {
                                alert(JSON.stringify(values));
                            }}
                        >
                            {(props) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="dateFrom">From</label>
                                    <MyDatePicker name="dateFrom" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dateTo">To</label>
                                    <MyDatePicker name="dateTo" />
                                </div>
                                <div>
                                    
                                </div>
                                <button type="submit">Submit</button>
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