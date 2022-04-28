import styles from './index.module.less'
import React from "react";
import styled from "styled-components";
import Search from "./styled/Search";

const TaskGroupAddSvg = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.28H14V8.78H2V7.28Z" fill="white" fill-opacity="0.6"/>
    <path d="M7.27969 14V2H8.77969V14H7.27969Z" fill="white" fill-opacity="0.6"/>
</svg>

const TaskGroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 14px;
`

const TaskGroupTitleWarp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 4px;
`

const TaskGroupTitle = styled.h1`
  font-size: 18px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.88);
  margin-right: 8px;
  margin-bottom: 0;
`

const TaskGroupSubTitle = styled.p`
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
  margin: 0;
`

const TaskGroupCount = styled.span`
  margin-right: 8px;
`


const TaskGroup: React.FC = () => {
    return (
        <>
            <TaskGroupHeader>
                <TaskGroupTitleWarp>
                    <TaskGroupTitle>Task Groups</TaskGroupTitle>
                    <TaskGroupAddSvg />
                </TaskGroupTitleWarp>
                <TaskGroupSubTitle>
                    <TaskGroupCount>8</TaskGroupCount>
                    <span>Groups</span>
                </TaskGroupSubTitle>
            </TaskGroupHeader>
            <div>
                <Search/>
            </div>
        </>
    )
}

export default TaskGroup;