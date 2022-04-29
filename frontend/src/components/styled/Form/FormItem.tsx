import React from "react";
import {FormItemProps} from "./types";
import styled from "styled-components";

const FormItemWarp = styled.div`
  
`

const FormItem:React.FC<FormItemProps> = (props) => {
    const {label, children} = props;
    return <FormItemWarp>
        {label && label}
        {children}
    </FormItemWarp>
}

export default FormItem;