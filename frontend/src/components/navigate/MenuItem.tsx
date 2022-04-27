import styled, {css} from "styled-components";
import React, {HTMLAttributes} from "react";
import {useLocation} from "react-router";
import { Link } from "react-router-dom";


type IProps = {
    active?: boolean;
    icon?: React.ReactNode;
    title: React.ReactNode;
    to?: string;
} & HTMLAttributes<HTMLDivElement>;


const StyledMenuItem: React.FC<IProps> = (props) => {


    const {icon, title, to, ...attr} = props
    return to ? <Link to={to} style={{color: '#fff'}}><div {...attr} >
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
    </div></Link> : <div {...attr} >
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
    </div>
}

const MenuItem = styled(StyledMenuItem)`
  padding: 16px 0 16px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 8px;
    font-size: 20px;
    transition: color .2s;
    color: ${props => props.active ? 'rgb(52, 182, 158)' : ''};
  }

  .title {
    font-size: 14px;
    transition: color .2s;
    color: ${props => props.active ? 'rgb(52, 182, 158)' : ''};
  }

  &:hover {
    .icon {
      color: rgb(52, 182, 158);

    }

    .title {
      color: rgb(52, 182, 158)
    }
  }

`;

export default MenuItem;

