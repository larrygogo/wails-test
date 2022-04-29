import React from "react";
import {FormTextProps} from "./types";
import FormItem from "./FormItem";
import Input from "../Input";


const FormText: React.FC<FormTextProps> = (props) => {
    const {label, layout} = props;
    return <FormItem label={label} layout={layout}>
        <Input {...props}/>
    </FormItem>

}

export default FormText;