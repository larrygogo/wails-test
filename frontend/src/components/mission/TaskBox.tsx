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

const TaskCount = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.35);
`

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`

const TaskStatusBox = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 3px;
  height: 18px;
  font-size: 12px;
  line-height: 14px;
  border-radius: 2px;
  
  background: ${(props: {type?: string}) => props.type === 'success' && 'rgba(95, 236, 143, 0.1)' };
  color: ${(props: {type?: string}) => props.type === 'success' && 'rgba(95, 236, 143, 1)' };
  
  background: ${(props: {type?: string}) => props.type === 'warning' && 'rgba(229, 174, 35, 0.1)' };
  color: ${(props: {type?: string}) => props.type === 'warning' && 'rgba(229, 174, 35, 1)' };
  
  background: ${(props: {type?: string}) => props.type === 'error' && 'rgba(227, 94, 94, 0.1)' };
  color: ${(props: {type?: string}) => props.type === 'error' && 'rgba(227, 94, 94, 1)' };
  
  &:not(:last-child) {
    margin-right: 8px;
  }
`

const TaskStatusList = styled.div`
  display: flex;
`

const TaskBoxWarp = styled.div`
  padding: 10px;
  background: ${(props: IProps) => props.active ? 'rgba(255, 255, 255, 0.08)' : ''};
  border-radius: ${(props: IProps) => props.active ? '4px' : ''};
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover ${TaskTitle} {
    color: rgba(255, 255, 255, 0.88);
  }
`;

const CartIcon = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.38993 9.20728C4.03426 9.20728 3.74766 9.49388 3.74766 9.84955C3.74766 10.2052 4.03426 10.4918 4.38993 10.4918C4.74559 10.4918 5.0322 10.2052 5.0322 9.84955C5.0322 9.49388 4.74559 9.20728 4.38993 9.20728Z" fill="#E6AE23"/>
    <path d="M8.88876 9.20728C8.53309 9.20728 8.24648 9.49388 8.24648 9.84955C8.24648 10.2052 8.53309 10.4918 8.88876 10.4918C9.24442 10.4918 9.53103 10.2052 9.53103 9.84955C9.53103 9.49388 9.24269 9.20728 8.88876 9.20728Z" fill="#E6AE23"/>
    <path d="M10.2552 2.75001C10.0912 2.56354 9.86505 2.46341 9.61988 2.46341H3.1851L3.16265 2.33219C3.10568 1.8643 2.69476 1.5 2.22687 1.5H1.82114C1.6433 1.5 1.5 1.6433 1.5 1.82114C1.5 1.99897 1.6433 2.14227 1.82114 2.14227H2.22514C2.36499 2.14227 2.5083 2.27003 2.52556 2.42542L2.83634 4.21756L3.38192 8.05219C3.4389 8.52008 3.84463 8.88611 4.30907 8.88611H9.5301C9.70794 8.88611 9.85124 8.74281 9.85124 8.56497C9.85124 8.38714 9.70794 8.24384 9.5301 8.24384H4.30734C4.17095 8.24384 4.03628 8.1178 4.01728 7.96759L3.96376 7.59293L9.05876 7.27871C9.52147 7.27871 9.92893 6.91268 9.98246 6.46206L10.4918 3.56839C10.528 3.25934 10.4434 2.96065 10.2552 2.75001Z" fill="#E6AE23"/>
</svg>

const SuccessIcon = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.96237 5.18094L4.44816 7.66673L9.92264 2.14915L11.0003 3.21961L4.40505 9.85077L0.942188 6.38791L1.96237 5.18094Z" fill="#35BB32"/>
</svg>


const FailureIcon = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.0759 10.0001L6.00032 7.07562L8.92479 10.0001L10.0004 8.92441L7.07599 6L10.0004 3.07564L8.92479 2.00002L6.00032 4.92444L3.0759 2.00002L2.00039 3.07564L4.9248 6L2.00039 8.92441L3.0759 10.0001Z" fill="#E35E5E"/>
</svg>




const TaskBox: React.FC<IProps> = (props) => {
    return (
        <TaskBoxWarp {...props} data-wails-no-drag>
            <TaskHeader>
                <TaskTitle {...props}>{props.title}</TaskTitle>
                <TaskCount>2132 tasks</TaskCount>
            </TaskHeader>
            <TaskStatusList>
                <TaskStatusBox type="warning"><CartIcon/> 123</TaskStatusBox>
                <TaskStatusBox type="success"><SuccessIcon /> 123</TaskStatusBox>
                <TaskStatusBox type="error"><FailureIcon /> 123</TaskStatusBox>
            </TaskStatusList>
        </TaskBoxWarp>
    )
}

export default TaskBox;

