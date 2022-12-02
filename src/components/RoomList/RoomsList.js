import React from "react";
import RoomTable from "./RoomTable/RoomTable";

const RoomList = (props) => {
    return (
        <RoomTable roomList = {props.roomList}>

        </RoomTable>
    )
}
    

export default RoomList;