import React from "react";
import { Field, Formik,Form } from "formik"; // <== this correct import
const HotelUtilityForm = (props) => {
    return (
        <div>
            <h3>{props.formData.typeForm === "Create" ? "Add Utility" : "Edit Utility"}</h3>
            <Formik
                initialValues={{
                    utilityName: props.formData.utilityName,
                }}
                enableReinitialize
                onSubmit={value=>{
                    props.onFormSubmit(
                        {
                            "utilityName" : value.utilityName,
                            "index": props.formData.index,
                            "typeForm": props.formData.typeForm
                        }
                    )
                }}
                >
                <Form>
                    <div className="inputItem">
                        <label htmlFor="utilityName">Utility Name</label>
                        <Field name="utilityName" placeholder="Utility Name" className="form-control" />
                    </div>
                    <button type="submit">Save changes</button>
                    <button onClick={()=>props.onFormCancel()}>Cancel</button>
                </Form>
            </Formik>
        </div>
    )
}

export default HotelUtilityForm;