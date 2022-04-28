import styles from './index.module.less'
import React from "react";
import styled from "styled-components";
import Search from "../../components/styled/Search";
import TaskBox from "../../components/mission/TaskBox";

const TaskGroupAddSvg = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.28H14V8.78H2V7.28Z" fill="white" fillOpacity="0.6"/>
    <path d="M7.27969 14V2H8.77969V14H7.27969Z" fill="white" fillOpacity="0.6"/>
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

const TaskList = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background   : transparent;
    transition: all .5s;
  }
  
  

  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 10px;
    background   : transparent;
    transition: all .5s;
  }


  &:hover {
    ::-webkit-scrollbar-thumb {
      background   : #535353;
    }
    
    ::-webkit-scrollbar-track {
      box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }
`


const TaskGroup: React.FC = () => {
    return (
        <>
            <TaskGroupHeader>
                <TaskGroupTitleWarp>
                    <TaskGroupTitle data-wails-no-drag>Task Groups</TaskGroupTitle>
                    <TaskGroupAddSvg data-wails-no-drag />
                </TaskGroupTitleWarp>
                <TaskGroupSubTitle data-wails-no-drag>
                    <TaskGroupCount>8</TaskGroupCount>
                    <span>Groups</span>
                </TaskGroupSubTitle>
            </TaskGroupHeader>
            <Search showIcon block/>
            <TaskList>
                <TaskBox title="Task Test" active />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
                <TaskBox title="Task Test" />
            </TaskList>
        </>
    )
}

export default TaskGroup;