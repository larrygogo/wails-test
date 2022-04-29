import styles from './index.module.less'
import React, {useState} from "react";
import styled from "styled-components";
import Search from "../../components/styled/Search";
import TaskBox from "../../components/mission/TaskBox";
import SectionHeader from "../../components/SectionHeader";

const TaskGroupCount = styled.span`
  margin-right: 8px;
`

const TaskList = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: transparent;
    transition: all .5s;
  }


  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 10px;
    background: transparent;
    transition: all .5s;
  }


  &:hover {
    ::-webkit-scrollbar-thumb {
      background: #535353;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }
`


const TaskGroup: React.FC = () => {
    const [current, setCurrent] = useState<number>();
    return (
        <>
            <SectionHeader
                title="Task Groups"
                showIcon
                subTitle={
                    <>
                        <TaskGroupCount>8</TaskGroupCount>
                        <span>Groups</span>
                    </>
                }/>
            <Search showIcon block placeholder="Search Group Name."/>
            <TaskList>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <TaskBox title="Task Test"
                                                                                          active={current === item}
                                                                                          onClick={() => setCurrent(item)}/>)}
            </TaskList>
        </>
    )
}

export default TaskGroup;