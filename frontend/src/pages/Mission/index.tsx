import React, {useState} from "react";
import PageContainer from "../../components/PageContainer";
import styled from "styled-components";
import TaskGroups from "./TaskGroups";
import TaskTableList from "./TaskTableList";

const TaskGroupsWarp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 214px;
`

const TaskListWarp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const MissionWarp = styled.div`
  display: flex;
`

const Mission = () => {

    return (
        <PageContainer>
            <MissionWarp>
                <TaskGroupsWarp>
                    <TaskGroups />
                </TaskGroupsWarp>
                <TaskListWarp>
                    <TaskTableList />
                </TaskListWarp>
            </MissionWarp>
        </PageContainer>
    );
}

export default Mission;