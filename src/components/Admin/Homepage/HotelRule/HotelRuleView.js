import React from "react";
import {Table} from "react-bootstrap";

const HotelRuleView = (props) => {
    return (
        <div>
            <Table striped bordered hover> 
                <tbody>
                    {props.rules.map(
                        (rule,index) => (
                            <tr key={rule.nameRule}>
                                <td>{rule.nameRule}</td>
                                <td>{rule.descriptionRule}</td>
                                <td>
                                    <button onClick={ () => props.onEditRule({rule})}>Edit</button>
                                    <button onClick={ () => props.onDeleteRule({rule,index})}>Delete</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </Table>   
        </div>
    )
}

export default HotelRuleView;