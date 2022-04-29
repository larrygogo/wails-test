import React, {HTMLAttributes} from "react";

interface FormItemProps extends HTMLAttributes<HTMLDivElement>{
    label?: React.ReactNode,
    layout?: 'horizontal' | 'vertical'
}

interface FormTextProps extends FormItemProps {

}