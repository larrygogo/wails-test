import styled, {css} from "styled-components";
import React, {HTMLAttributes} from "react";
import {useLocation} from "react-router";
import {Link, useNavigate} from "react-router-dom";


type IProps = {
    active?: boolean;
    icon?: React.ReactNode;
    title: React.ReactNode;
    to?: string;
} & HTMLAttributes<HTMLDivElement>;


const MenuIcon = styled.div`
  margin-right: 8px;
  font-size: 20px;
  transition: color .2s;
  color: ${(props: IProps) => props.active ? 'rgb(52, 182, 158)' : 'rgba(255, 255, 255, 0.4)'};
`

const MenuTitle = styled.div`
  font-size: 14px;
  transition: color .2s;
  color: ${(props: IProps) => props.active ? 'rgb(52, 182, 158)' : 'rgba(255, 255, 255, 0.4)'};
`


const MenuItemWarp = styled.div`
  padding: 16px 0 16px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    ${MenuIcon} {
      color: rgb(52, 182, 158);

    }

    ${MenuTitle} {
      color: rgb(52, 182, 158)
    }
  }
`;


const MenuItem: React.FC<IProps> = (props) => {
    const {icon, title, to, onClick} = props
    let navigate = useNavigate();
    return (
        <MenuItemWarp {...props} onClick={(e) => {
            if (to) navigate(to)
            if (onClick) onClick(e)
        }}>
            <MenuIcon {...props}>{icon}</MenuIcon>
            <MenuTitle {...props}>{title}</MenuTitle>
        </MenuItemWarp>
    )
}


export default MenuItem;

