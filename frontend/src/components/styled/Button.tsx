import React, {ButtonHTMLAttributes} from "react";
import styled, { css } from 'styled-components';

type IProps = {
    block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton: React.FC<IProps> = (props) => {
    const {children, block, ...attr} = props
    return <button {...attr} >{children}</button>
}

const Button = styled(StyledButton)`
  display: ${props => props?.block ? 'block' : 'inline'};
  width: ${props => props?.block ? '100%' : ''};
  border-radius: 4px;
  padding: 7.5px 16px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`




export default Button;