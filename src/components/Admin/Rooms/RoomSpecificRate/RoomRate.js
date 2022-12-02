import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import {Container, Row, Col} from "react-bootstrap";
import RoomRateView from "./RoomRateView";
import RoomFormRate from "./RoomFormRate";


const RoomRate = (props) => {
    const [loading, setLoading] = useState(true);
    const [hotel,setHotel] = useState({});
    const [roomRates, setRoomRates] = useState([]);
    const {roomID} = props.roomID;
    const [roomRateFormData, setRoomRateFormData] = useState({});
    const [roomRateAction, setRoomRateAction] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

        try {
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
      
    const createRate = () => {
      setRoomRateFormData({ 
        "typeForm":"Create"
      });
      setRoomRateAction(true);
    }

    const handleRate = (value) =>{
      console.log(`Edit rate ${value}`);
    }

    const deleteRate = (value)=>{
      
    }

    const submitForm =(formData)=>{
      if(formData.typeForm === "Create"){
        
      }
      else{
        // edit 
        cancelForm();
      }
    }

    const cancelForm = () =>{
      console.log("cancel");
      setRoomRateFormData({});
      setRoomRateAction(false);
    }

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && 
                <Card>
                <Card.Header>
                  Room Rating
                </Card.Header>
                <Card.Body>
                  <Container>
                    <button type="button" className="btn btn-primary" onClick={createRate}>Add Specific Rate</button>
                    <Row>
                        {roomRates.length > 0 && (
                          <Col>
                            <RoomRateView onEditRate={handleRate} onDeleteRate={deleteRate} rangeRates={roomRates}></RoomRateView>
                        </Col>
                        )}
                        
                        {roomRateAction && (<Col>
                          <RoomFormRate onFormSubmit={submitForm} formData = {roomRateFormData} onFormCancel={cancelForm}></RoomFormRate>
                        </Col>)}
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            }
        </div>
    )
}

export default RoomRate;