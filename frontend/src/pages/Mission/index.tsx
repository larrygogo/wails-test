import React, {useState} from "react";
import PageContainer from "../../components/PageContainer";
import styled from "styled-components";
import TaskGroups from "./TaskGroups";

const TaskGroupsWarp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 214px;
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
            </MissionWarp>
        </PageContainer>
    );
}

export default Mission;