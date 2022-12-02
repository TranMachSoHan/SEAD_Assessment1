import React, { useState, useEffect } from "react";
import { Field, Formik,Form, useField } from "formik"; // <== this correct import
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../../Helper/MyDatePicker";

const RoomFormRate = (props) => {
    const isCreated = props.formData.typeForm === "Create";

    return (
        
        <div>
            <h3>{isCreated ? "Add Rate" : "Edit Rate"}</h3>
            <Formik
                initialValues={{
                    startDate: isCreated ? new Date(): props.formData.startDate,
                    endDate : isCreated ? new Date():  props.formData.endDate,
                    rating: isCreated ? '': props.formData.rating
                }}
                enableReinitialize
                onSubmit={value=>{
                    props.onFormSubmit(
                        {
                            "index": props.formData.index,
                            "startDate" : value.startDate,
                            "endDate": value.endDate,
                            "rating": value.rating,
                            "typeForm": props.formData.typeForm
                        }
                    )
                }}
                >
                {() => (
                    <Form>
                        <div className="inputItem">
                            <label htmlFor="startDate">From</label>
                            <MyDatePicker name="startDate" />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="endDate">To</label>
                            <MyDatePicker name="endDate" />
                        </div>
                        <div className="inputItem">
                            <label htmlFor="rating">Specific Rating</label>
                            <Field name="rating" className="form-control" />
                        </div>
                        <button type="submit">Save changes</button>
                        <button onClick={()=>props.onFormCancel()}>Cancel</button>
                    </Form>
                    )}
            </Formik>
        </div>
    )
}

export default RoomFormRate;