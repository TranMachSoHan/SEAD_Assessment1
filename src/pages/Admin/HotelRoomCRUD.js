import React from "react";
import RoomOverviewForm from "../../components/Admin/Rooms/RoomOverviewForm";
import RoomRate from "../../components/Admin/Rooms/RoomSpecificRate/RoomRate";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const HotelRoomCRUD = () =>{
    const navigate = useNavigate();
    const {roomID} = useParams();
    
    return(
        <div>
            <div className="d-flex justify-content-between">
                <h3>{roomID === "-1" ? "Add Room" : "Edit Room"}</h3>
                <button type="button" className="btn btn-primary" onClick={() => navigate(`/admin/rooms/`)}>Return </button>
            </div>
            <RoomOverviewForm roomID={Number(roomID)}></RoomOverviewForm>
            <RoomRate roomID={Number(roomID)}></RoomRate>
        </div>
    )
}

export default HotelRoomCRUD;