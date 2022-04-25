import React from "react";
import styled, { css } from 'styled-components'


type IProps = {
    block?: boolean;
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button: React.FC<IProps> = (props) => {
    const {children, block, onClick, ...attr} = props
    const Button = styled.button`
      height: 32px;
      border-radius: 4px;
      padding: 7.5px 16px;
      background: rgba(255, 255, 255, 0.08);
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
    `

    return <Button {...attr} >{children}</Button>
}

export default Button;