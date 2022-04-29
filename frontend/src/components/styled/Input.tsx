import React, {InputHTMLAttributes} from "react";
import styled, { css } from 'styled-components'

type IProps = {
    width?: number;
} & InputHTMLAttributes<HTMLInputElement>


const Input = styled.input`
  width: ${(props: IProps) => typeof props.width === 'number' ? `${props.width}px` : '100%'};
  padding: 6px 8px;
  font-size: 14px;
  line-height: 20px;
  border: none;
  color: #4A4C4D;
  background-color: transparent;
  outline: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  
  &:focus {
    border-color: rgb(52, 182, 158);
  }
`

export default Input;