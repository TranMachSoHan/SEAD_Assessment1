import React, {useState, useEffect} from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import HotelUtilitiesView from "./HotelUtilitiesView";
import HotelUtilityForm from "./HotelUtilitiesForm";

const HotelUtilities = () =>{
    const [loading, setLoading] = useState(true);
    let [utilities,setUtilties] = useState([]);
    const [utilityFormData, setUtilityFormData] = useState({});
    const [utilityAction, setUtilityAction] = useState(false);


    useEffect(() => {
      const fetchData = async () => {
        try {
          axios.get('https://api.npoint.io/57c91b6f051e9f983cd7/overview/utilities').then(
              response => {
                  setUtilties(response.data);
                  setLoading(false);
                  console.log(utilities);
              }
          );
        } catch (error) {
          console.error(error)
        }
      };
  
      fetchData();
    }, []);


    const handleUtility = (value) =>{
        cancelForm();
        setUtilityFormData({ 
          "utilityName": value.utility,
          "index": value.index,
          "typeForm":"Edit"
        });
        setUtilityAction(true);
      }
  
      const deleteUtility = (value)=>{
        utilities.splice(value.index, 1);
        setUtilties([...utilities]);
      }
  
      const cancelForm = () =>{
        setUtilityFormData({});
        setUtilityAction(false);
      }
      
      const submitForm =(formData)=>{
        if(formData.typeForm === "Create"){
          utilities.push(formData.utilityName)
        }
        else{
          // edit 
          utilities[formData.index] = formData.utilityName;
          setUtilties(utilities);
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