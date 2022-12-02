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
                                    <div className="d-flex align-items-center justify-content-around">
                                        <div > 
                                            <FaHouseUser/>
                                        </div>
                                        <div>
                                            Room size: {room.size} m2
                                        </div>
                                        
                                        
                                    </div>
                                    <hr/>
                                    <div className="d-flex align-items-center justify-content-around">
                                        <div>
                                            <FaBed/>
                                        </div>
                                        <div>
                                            {room.singleRoom > 0 && (<div>{room.singleRoom} single room</div>)} 
                                            <br/>
                                            {room.doubleRoom > 0 && (<div>{room.singleRoom} double room</div>)}
                                        </div>
                                        
                                    </div>
                                </td>
                                <td >
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