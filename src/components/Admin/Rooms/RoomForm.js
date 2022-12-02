import React, { useState, useEffect } from "react";
import { Field, Formik,Form } from "formik"; // <== this correct import
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RoomForm = (props) => {
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);

    const {roomID} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if(roomID !== "-1") {
            const fetchData = async () => {
            try {
                axios.get(`https://api.npoint.io/57c91b6f051e9f983cd7/roomType/${roomID}`).then(
                    response => {
                        setRoom(response.data);
                        setLoading(false);
                    }
                )
            } catch (error) {
                console.error(error)
            }
            };
        
            fetchData();
        }
        else{setLoading(false)}

      }, []);
    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && 
                (<Card>
                    <Card.Header>
                        {roomID === "-1" ? "Add Room" : "Edit Room"}
                    </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={{
                                roomName: room.name ? room.name : "",
                                roomSize: room.size ? room.size : "",
                                roomRate: room.rate ? room.rate : "",
                                roomNumber: room.numberOfRooms ? room.numberOfRooms : "",
                            }}
                            enableReinitialize
                            onSubmit={value=>{

                                let data = {
                                    "uuid": room.uuid,
                                    "name" : value.roomName,
                                    "size": value.roomSize,
                                    "rate": value.roomRate,
                                    "numberOfRooms": value.roomNumber
                                }
                                if(roomID !== "-1"){
                                    const putData = async () => {
                                        try {
                                            axios.put(`https://api.npoint.io/57c91b6f051e9f983cd7/roomType/${roomID}`, data).then(
                                                response => {
                                                    setRoom(response.data);
                                                    console.log("success");
                                                    setLoading(false);
                                                }
                                            );
                                        } catch (error) {
                                            console.error(error)
                                        }
                                    };
                                    putData();
                                }
                                else{
                                    const postData = async () => {
                                        try {
                                            axios.post(`https://api.npoint.io/57c91b6f051e9f983cd7/roomType`, data).then(
                                                response => {
                                                    setRoom(response.data);
                                                    console.log("success");
                                                    setLoading(false);
                                                }
                                            );
                                        } catch (error) {
                                            console.error(error)
                                        }
                                    };
                                    postData();
                                }
                            }}
                            >
                            <Form>
                                <div className="inputItem">
                                    <label htmlFor="roomName">Room Name</label>
                                    <Field name="roomName" className="form-control"/>
                                </div>
                                <div className="inputItem">
                                    <label htmlFor="roomSize">Room Size</label>
                                    <Field name="roomSize" className="form-control"/>
                                </div>
                                <div className="inputItem">
                                    <label htmlFor="roomRate">Room Rate</label>
                                    <Field name="roomRate" className="form-control"/>
                                </div>
                                <div className="inputItem">
                                    <label htmlFor="roomNumber">Number of Room</label>
                                    <Field name="roomNumber" className="form-control"/>
                                </div>
                                <button type="submit">Save changes</button>
                                <button onClick={() => navigate(`/admin/rooms`)}>Return</button>
                            </Form>
                        </Formik>
                    </Card.Body>
                    
                </Card>)
            }
        </div>
    )
}

export default RoomForm;