import React from "react";
import {Table} from "react-bootstrap";
import {FaPen, FaTrash} from 'react-icons/fa';


const RoomTable = (props) => {
    
    return (
        <div>
            <div>
                <Table striped bordered hover>
                    <thead>
                            <tr>
                                <th>Room Name</th>
                                <th>Rate</th>
                                <th>Room Size</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {props.roomList.map(
                                (room,index) => (
                                    <tr key={room.name}>
                                        <td>{room.name}</td>
                                        <td>{room.rate} VND</td>
                                        <td>{room.size}</td>
                                        <td>
                                            <button onClick={() => props.onEditRoom({room,index})} type="button" className="btn btn-info"><FaPen/></button>
                                            <button onClick={() => props.onDeleteRoom({room,index})} type="button" className="btn btn-danger"><FaTrash/></button>
                                        </td>
                                    </tr>
                                )) 
                            }
                        </tbody>
                </Table>
            </div>
        </div>
    )
}

export default RoomTable;