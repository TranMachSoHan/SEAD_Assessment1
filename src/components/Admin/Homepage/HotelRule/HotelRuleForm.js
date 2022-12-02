import React from "react";
import { Field, Formik,Form } from "formik"; // <== this correct import
const HotelRuleForm = (props) => {
    return (
        <div>
            <h3>{props.formData.typeForm === "Create" ? "Add Rule" : "Edit Rule"}</h3>
            <Formik
                initialValues={{
                    ruleName: props.formData.nameRule,
                    ruleDescription : props.formData.descriptionRule
                }}
                enableReinitialize
                onSubmit={value=>{
                    props.onFormSubmit(
                        {
                            "nameRule" : value.ruleName,
                            "descriptionRule": value.ruleDescription,
                            "typeForm": props.formData.typeForm
                        }
                    )
                }}
                >
                <Form>
                    <div className="inputItem">
                        <label htmlFor="ruleName">Rule Name</label>
                        <Field disabled name="ruleName" className="form-control"/>
                    </div>
                    <div className="inputItem">
                        <label htmlFor="ruleDescription">Rule Description</label>
                        <Field name="ruleDescription" className="form-control"/>
                    </div>
                    <button type="submit">Save changes</button>
                    <button onClick={()=>props.onFormCancel()}>Cancel</button>
                </Form>
            </Formik>
        </div>
    )
}

export default HotelRuleForm;