import React, { useState, useEffect } from "react";
import { Field, Formik,Form,useFormikContext, useField } from "formik"; // <== this correct import
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RoomOverviewForm = (props) => {
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [hotel,setHotel] = useState({});

    const {roomID} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {

        try {
            console.log(Number(roomID));
            axios.get(`https://api.npoint.io/57c91b6f051e9f983cd7`).then(
                response => {
                    setHotel(response.data);
                    if(roomID !== -1){
                        setRoom(response.data.roomType[roomID]);
                    }
                    setLoading(false);
                }
            )
        } catch (error) {
            console.error(error)
        }
        };
    
        fetchData();

      }, []);
      
    const DatePickerField = ({ ...props }) => {
        const { setFieldValue } = useFormikContext();
        const [field] = useField(props);
        return (
            // <DatePicker
            //     {...field}
            //     {...props}
            //     selected={(field.value && new Date(field.value)) || null}
            //     onChange={(val) => {
            //         setFieldValue(field.name, val);
            //     }}
            // />
            <div></div>
        );
    };

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && 
                (<Card>
                    <Card.Header>
                        Specific Rate
                    </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={{
                                
                            }}
                            enableReinitialize
                            onSubmit={value=>{

                                
                            }}
                            >
                            <Form>
                                <div className="inputItem">
                                    <label htmlFor="roomName">Room Name</label>
                                    <Field name="roomName" className="form-control"/>
                                </div>
                                
                                <button type="submit">Save changes</button>
                                <button onClick={() => navigate(`/admin/rooms`)}>Return</button>
                            </Form>
                        </Formik>
                    </Card.Body>
                    
                </Card>)
            }
        </div>
    )
}

export default RoomOverviewForm;