import React, {InputHTMLAttributes} from "react";
import styled, { css } from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 7.5px 16px;
  font-size: 14px;
  border: none;
  
  
  &:focus {
  }
`


type IProps = {

} & InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<IProps> = (props) => {
    const {value, ...attr} = props


    return <StyledInput {...attr} value={value} />
}

export default Input;