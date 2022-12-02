import React from "react";
import DatePicker from "react-datepicker"
import { useField } from "formik"; // <== this correct import

const MyDatePicker = ({ name = "" }) => {
    const [field, meta, helpers] = useField(name);
    
    const { value } = meta;
    const { setValue } = helpers;
    
    return (
        <DatePicker
            {...field}
            selected={value}
            onChange={(date) => setValue(date)}
        />
    );
};

export default MyDatePicker;