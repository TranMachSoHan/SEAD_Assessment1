import React from "react";
import {Card, Table} from 'react-bootstrap';

const HotelOwner = (props) => {
    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title>
                        Owner
                    </Card.Title>
                    <Table bordered hover>
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.hotelOwner.ownerName}</td>
                                <td>{props.hotelOwner.ownerEmail}</td>
                                <td>{props.hotelOwner.ownerPhone}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HotelOwner;