import React , {useState, useEffect} from "react";
import axios from "axios";
import RoomTable from "./RoomTable";
import { useNavigate } from "react-router-dom";


const Room = (props) => {
    const [loading, setLoading] = useState(true);
    const [rooms,setRooms] = useState({});
    const [hotel, setHotel] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          axios.get('https://api.npoint.io/57c91b6f051e9f983cd7').then(
              response => {
                  setHotel(response.data);
                  setRooms(response.data.roomType);
                  setLoading(false);
              }
          );
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []); 

    const deleteRoom = (value)=>{
      rooms.splice(value.index, 1);

      let dataPost = {
          ...props.hotel,
          "roomType": rooms
      }

      setLoading(true);
      axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", dataPost).then(
          response => {
              setLoading(false);
              setHotel(response.data);
              setRooms(response.data.roomType);
          }
      )
    }

    const navigate = useNavigate();

    const editRoom = (value) => {
        navigate(`/admin/rooms/${value.index}`);
    }

    const addRoom = () => {
        navigate(`/admin/rooms/-1`);
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div><h1>Rooms</h1></div>
                <div><button onClick={addRoom} type="button" className="btn btn-primary">ADD ROOM</button></div>
            </div>

            {loading && <div>Loading</div>}
            {!loading && (
                <RoomTable onDeleteRoom={deleteRoom} onEditRoom={editRoom} roomList={rooms}></RoomTable>
            )}
            
            <button onClick={() => navigate(`/admin/homepage/`)}>Return</button>
        </div>
    )
}

export default Room;