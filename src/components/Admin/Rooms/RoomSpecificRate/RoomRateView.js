import React from "react";
import {Table} from "react-bootstrap";

const RoomRateView = (props) => {
    return (
        <div>
            <Table striped bordered hover> 
                <tbody>
                    {props.rangeRates.map(
                        (range,index) => (
                            <tr key={index}>
                                <td>{range.startDate}</td>
                                <td>{range.endDate}</td>
                                <td>{range.rating}</td>
                                <td>
                                    <button onClick={ () => props.onEditRate({range,index})}>Edit</button>
                                    <button onClick={ () => props.onDeleteRate({range,index})}>Delete</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </Table>   
        </div>
    )
}

export default RoomRateView;