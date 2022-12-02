import React , {useState, useEffect} from "react";
import axios from "axios";
import RoomTable from "./RoomTable";
import { useNavigate } from "react-router-dom";


const Room = (props) => {
    const [loading, setLoading] = useState(true);
    const [rooms,setRooms] = useState({});


    useEffect(() => {
      const fetchData = async () => {
        try {
          axios.get('https://api.npoint.io/57c91b6f051e9f983cd7/roomType').then(
              response => {
                  setRooms(response.data);
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
        fetch(`https://api.npoint.io/57c91b6f051e9f983cd7/roomType/${value.index}`, 
            {
              method: 'DELETE',
              headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
              }
            }
        ).then(res=> {
          if(!res.ok){
            console.log('Problem');
            return;
          }
          return res.json();
        })
        .then(data=>{
          console.log("success");
        })
        .catch(error => {
          console.log(error);
        })
        // const deleteData = async () => {
        //     try {
        //       axios.delete(`https://api.npoint.io/57c91b6f051e9f983cd7/roomType/${value.index}`, 
        //       {headers: {
        //         // 'application/json' is the modern content-type for JSON, but some
        //         // older servers may use 'text/json'.
        //         // See: http://bit.ly/text-json
        //         'content-type': 'application/json',
        //         'Access-Control-Allow-Origin': 'http://localhost:3000'
        //       }}).then(
        //           response => {
        //                 setLoading(false);
        //                 rooms.splice(value.index, 1);
        //                 setRooms([...rooms]);
        //           }
        //       );
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   };
      
        //   deleteData();
        
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