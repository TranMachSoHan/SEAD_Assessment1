import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HotelOverview from "../../components/Admin/Homepage/HotelOverview/HotelOverview";
import HotelRule from "../../components/Admin/Homepage/HotelRule/HotelRule";
import HotelUtilities from "../../components/Admin/Homepage/HotelUtilities/HotelUtilities";

const Homepage = () =>{
    const navigate = useNavigate();

    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            axios.get('https://api.npoint.io/57c91b6f051e9f983cd7').then(
                response => {
                    setHotel(response.data);
                    setLoading(false);
                }
            );
          } catch (error) {
            console.error(error)
          }
        };
    
        fetchData();
      }, []);

    const handleClick = () => {
        navigate("/admin/rooms");
    }

    return(
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    <button type="button" onClick={handleClick} className="mb-3 btn btn-primary">View Rooms</button>
        
                    <HotelOverview hotel = {hotel}></HotelOverview>
                    <HotelUtilities hotel = {hotel}></HotelUtilities>
                    <HotelRule hotel = {hotel}></HotelRule>
                </div>
            )}
            
            
        </div>
    )
}

export default Homepage;