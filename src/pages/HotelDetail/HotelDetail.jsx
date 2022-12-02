import React, { useState, useEffect } from "react";
import HotelOverview from "../../components/HotelOverview/HotelOverview";
import axios from "axios";
import RoomList from "../../components/RoomList/RoomsList";
import HotelImages from "../../components/HotelImages/HotelImages";
import HotelRuleView from "../../components/HotelRule/HotelRuleView";
import { Container } from "react-bootstrap";

const HotelDetail = () =>{
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
      
    return (
        <Container>
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    {/* <HotelImages hotelPhotos={hotel.photos}></HotelImages> */}
                    <HotelOverview overview={hotel.overview}></HotelOverview>
                    <RoomList roomList = {hotel.roomType}></RoomList>
                    <HotelRuleView rules={hotel.houseRules}></HotelRuleView>
                </div>
            )}
            
            
        </Container>
    )
}

export default HotelDetail;