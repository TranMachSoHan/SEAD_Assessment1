import React , { useState, useEffect }from "react";
import axios from "axios";
import HotelRuleView from "./HotelRuleView";
import {Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import HotelRuleForm from "./HotelRuleForm";

const HotelRule = (props) => {
    const [loading, setLoading] = useState(false);
    let [rules,setRules] = useState(props.hotel.houseRules);
    const [ruleFormData, setRuleFormData] = useState({});
    const [ruleAction, setRuleAction] = useState(false);

    const handleRule = (rule) =>{
      setRuleFormData({ 
        "nameRule": rule.rule.nameRule,
        "descriptionRule": rule.rule.descriptionRule,
        "typeForm":"Edit"
      });
      setRuleAction(true);
    }
    const deleteRule = (value)=>{
      rules.splice(value.index, 1);

      let dataPost = {
          ...props.hotel,
          "houseRules": rules
      }

      setLoading(true);
      axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", dataPost).then(
          response => {
              setLoading(false);
              setRules(response.data.houseRules);
          }
      )
    }

    const cancelForm = () =>{
      setRuleFormData({});
      setRuleAction(false);
    }
    
    const submitForm =(formData)=>{
      if(formData.typeForm === "Create"){
        rules.push(
          {
            "nameRule": formData.nameRule,
            "descriptionRule": formData.descriptionRule
          }
        )
      }
      else{
        // edit 
        let index = rules.findIndex((rule) => rule.nameRule === formData.nameRule);
        rules[index]['descriptionRule'] = formData.descriptionRule;

        let dataPost = {
          ...props.hotel,
          "houseRules": rules
        }

        setLoading(true);
        axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", dataPost).then(
            response => {
                setLoading(false);
                setRules(response.data.houseRules);
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
              Hotel Rules
            </Card.Header>
            <Card.Body>
              <Container>
                <Row>
                    <Col>
                      <HotelRuleView rules={rules} onEditRule={handleRule} onDeleteRule={deleteRule}></HotelRuleView>
                    </Col>
                    {ruleAction && <Col>
                      <HotelRuleForm onFormSubmit={submitForm} formData = {ruleFormData} onFormCancel={cancelForm}></HotelRuleForm>
                    </Col>}
                </Row>
              </Container>
            </Card.Body>
          </Card>
          
        }
      </div>
      
        
    )
}

export default HotelRule;