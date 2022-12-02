import React from "react";
import { Route, Routes } from "react-router-dom";
import {Container} from "react-bootstrap";
import HotelRoomCRUD from "./HotelRoomCRUD";
import HotelRoomList from "./HotelRoomList";
import Homepage from "./Homepage";
import { v4 as uuid } from 'uuid';

const HotelDetail = () =>{
    console.log(uuid());
    
    return(
        <Container>
            <h1>admin</h1>
            <Routes>
                <Route path="homepage" element={<Homepage/>}></Route>
                <Route path="rooms" element={<HotelRoomList/>}></Route>
                <Route path="rooms/:roomID" element={<HotelRoomCRUD/>}></Route>
            </Routes>
        </Container>
    )
}

export default HotelDetail;