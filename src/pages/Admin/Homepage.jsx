import React from "react";
import { useNavigate } from "react-router-dom";

import HotelOverview from "../../components/Admin/Homepage/HotelOverview/HotelOverview";
import HotelRule from "../../components/Admin/Homepage/HotelRule/HotelRule";
import HotelUtilities from "../../components/Admin/Homepage/HotelUtilities/HotelUtilities";

const Homepage = () =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/admin/rooms");
    }

    return(
        <div>
            <button type="button" onClick={handleClick} className="mb-3 btn btn-primary">View Rooms</button>

            <HotelOverview></HotelOverview>
            <HotelUtilities></HotelUtilities>
            <HotelRule></HotelRule>
        </div>
    )
}

export default Homepage;