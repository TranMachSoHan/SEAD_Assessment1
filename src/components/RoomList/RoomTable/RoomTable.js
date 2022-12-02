import React from "react";
import {Table, Button} from "react-bootstrap";
import {FaBed, FaHouseUser} from 'react-icons/fa'


const RoomTable =(props)=> {
    return (
        <Table striped bordered hover>
            <thead>
                    <tr>
                        <th>Room Name</th>
                        <th>Rate</th>
                        <th>Room Detail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.roomList.map(
                        room => (
                            <tr key={room.name}>
                                <td>{room.name}</td>
                                <td>{room.rate} VND</td>
                                <td>
                                    <div>
                                        <FaHouseUser/>
                                        Room size: {room.size} m2
                                    </div>
                                    <div>
                                        <FaBed/>
                                        {room.numberOfRooms}
                                    </div>
                                </td>
                                <td>
                                    <Button>Order Now</Button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
        </Table>
    )
}

export default RoomTable;