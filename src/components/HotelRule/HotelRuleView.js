import React from "react";
import {Table, Button, Dropdown} from "react-bootstrap";

const HotelRuleView = (props) => {
    return (
        <div>
            <h3>Hotel Rules</h3>
            
            <Table striped bordered hover> 
                <tbody>
                    {props.rules.map(
                        rule => (
                            <tr key={rule.nameRule}>
                                <td>{rule.nameRule}</td>
                                <td>{rule.descriptionRule}</td>
                                
                            </tr>
                        )) 
                    }
                </tbody>
                
            </Table>    
        </div>
    )
}

export default HotelRuleView;