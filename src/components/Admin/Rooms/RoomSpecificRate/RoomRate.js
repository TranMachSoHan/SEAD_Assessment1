import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import {Container, Row, Col} from "react-bootstrap";


const RoomRate = (props) => {
    const [loading, setLoading] = useState(true);
    const [hotel,setHotel] = useState({});
    const {roomID} = useParams();
    const [roomRateFormData, setRoomRateFormData] = useState({});
    const [roomRateAction, setRoomRateAction] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

        try {
            console.log(Number(roomID));
            axios.get(`https://api.npoint.io/57c91b6f051e9f983cd7`).then(
                response => {
                    setHotel(response.data);
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
                <Card>
                <Card.Header>
                  Hotel Utilities
                </Card.Header>
                <Card.Body>
                  <Container>
                    <Row>
                        <Col>
                          {/* <HotelUtilitiesView utilities={utilities} onEditUtility={handleUtility} onDeleteUtility={deleteUtility}></HotelUtilitiesView> */}

                        </Col>
                        {roomRateAction && <Col>
                          {/* <HotelUtilityForm onFormSubmit={submitForm} formData = {utilityFormData} onFormCancel={cancelForm}></HotelUtilityForm> */}
                        </Col>}
                        
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            }
        </div>
    )
}

export default RoomRate;