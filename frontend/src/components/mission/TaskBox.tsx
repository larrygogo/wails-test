import styled from "styled-components";
import React, {HTMLAttributes} from "react";

type IProps = {
    active?: boolean;
    title: string;
} & HTMLAttributes<HTMLDivElement>

const TaskTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props: IProps) => props.active ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.5)'};
`;

const TaskBoxWarp = styled.div`
  padding: 10px;
  background: ${(props: IProps) => props.active ? 'rgba(255, 255, 255, 0.08)' : ''};
  border-radius: ${(props: IProps) => props.active ? '4px' : ''};
  cursor: pointer;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover ${TaskTitle}{
    color: rgba(255, 255, 255, 0.88);
  }
`;


const TaskBox: React.FC<IProps> = (props) => {
    return (
        <TaskBoxWarp {...props} data-wails-no-drag>
            <TaskTitle {...props}>{props.title}</TaskTitle>
        </TaskBoxWarp>
    )
}

export default TaskBox;

