import React from "react";
import RoomFormRate from "../../components/Admin/Rooms/RoomFormRate";
import RoomOverviewForm from "../../components/Admin/Rooms/RoomOverviewForm";

const HotelRoomCRUD = () =>{
    
    return(
        <div>
            <RoomOverviewForm></RoomOverviewForm>
            <RoomFormRate></RoomFormRate>
        </div>
    )
}

export default HotelRoomCRUD;