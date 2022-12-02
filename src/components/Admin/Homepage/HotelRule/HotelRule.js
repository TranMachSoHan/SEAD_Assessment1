import React , { useState, useEffect }from "react";
import axios from "axios";
import HotelRuleView from "./HotelRuleView";
import {Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import HotelRuleForm from "./HotelRuleForm";

const HotelRule = () => {
    const [loading, setLoading] = useState(true);
    let [rules,setRules] = useState({});
    const [ruleFormData, setRuleFormData] = useState({});
    const [ruleAction, setRuleAction] = useState(false);


    useEffect(() => {
      const fetchData = async () => {
        try {
          axios.get('https://api.npoint.io/57c91b6f051e9f983cd7/houseRules').then(
              response => {
                  setRules(response.data);
                  setLoading(false);
              }
          );
        } catch (error) {
          console.error(error)
        }
      };
  
      fetchData();
    }, []);

    const handleRule = (rule) =>{
      setRuleFormData({ 
        "nameRule": rule.rule.nameRule,
        "descriptionRule": rule.rule.descriptionRule,
        "typeForm":"Edit"
      });
      setRuleAction(true);
    }

    const deleteRule = (rule)=>{
      rules = rules.filter( selectedRule => selectedRule.nameRule !== rule.rule.nameRule);
      setRules(rules)
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
        console.log(formData);
        rules[index]['descriptionRule'] = formData.descriptionRule;
        setRules(rules);
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