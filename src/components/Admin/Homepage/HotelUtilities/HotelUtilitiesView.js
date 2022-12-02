import React from "react";
import {Table} from "react-bootstrap";

const HotelUtilitiesView = (props) => {
    return (
        <div>
            <Table striped bordered hover> 
                <tbody>
                    {props.utilities.map(
                        (utility,index) => (
                            <tr key={utility}>
                                <td>{utility}</td>
                                <td>
                                    <button onClick={ () => props.onEditUtility({index,utility})}>Edit</button>
                                    <button onClick={ () => props.onDeleteUtility({index,utility})}>Delete</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </Table>   
        </div>
    )
}

export default HotelUtilitiesView;