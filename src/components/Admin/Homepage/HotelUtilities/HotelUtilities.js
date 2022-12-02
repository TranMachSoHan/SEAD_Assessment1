import React, {useState} from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import HotelUtilitiesView from "./HotelUtilitiesView";
import HotelUtilityForm from "./HotelUtilitiesForm";

const HotelUtilities = (props) =>{
    const [loading, setLoading] = useState(false);
    let [utilities,setUtilties] = useState(props.hotel.overview.utilities);
    const [utilityFormData, setUtilityFormData] = useState({});
    const [utilityAction, setUtilityAction] = useState(false);

    const handleUtility = (value) =>{
        setUtilityFormData({ 
          "utilityName": value.utility,
          "index": value.index,
          "typeForm":"Edit"
        });
        setUtilityAction(true);
      }
  

      const cancelForm = () =>{
        setUtilityFormData({});
        setUtilityAction(false);
      }

      const deleteUtility = (value)=>{
        utilities.splice(value.index, 1);

        let overviewChangedData = {
          ...props.hotel.overview, 
          "utilities": [...utilities]
        }

        let dataPost = {
            ...props.hotel,
            "overview": overviewChangedData
        }

        setLoading(true);
        axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", dataPost).then(
            response => {
                setLoading(false);
                setUtilties(response.data.overview.utilities);
            }
        )
      }
      
      const submitForm =(formData)=>{
        if(formData.typeForm === "Create"){
          utilities.push(formData.utilityName)
        }
        else{
          // edit 
          utilities[formData.index] = formData.utilityName;
          let overviewChangedData = {
            ...props.hotel.overview, 
            "utilities": [...utilities]
          }
  
          let dataPost = {
              ...props.hotel,
              "overview": overviewChangedData
          }
          setLoading(true);
          axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", dataPost).then(
              response => {
                  setLoading(false);
                  setUtilties(response.data.overview.utilities);
              }
          )
          cancelForm();
        }
      }
      
    return(
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
                      <HotelUtilitiesView utilities={utilities} onEditUtility={handleUtility} onDeleteUtility={deleteUtility}></HotelUtilitiesView>
                    </Col>
                    {utilityAction && <Col>
                      <HotelUtilityForm onFormSubmit={submitForm} formData = {utilityFormData} onFormCancel={cancelForm}></HotelUtilityForm>
                    </Col>}
                    
                </Row>
              </Container>
            </Card.Body>
          </Card>
          
        }
      </div>
    )
}

export default HotelUtilities;