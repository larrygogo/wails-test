import React, {useState} from "react";
import PageContainer from "../../components/PageContainer";
import TaskGroups from "../../components/TaskGroups";
import styled from "styled-components";
import Search from "../../components/styled/Search";

const TaskGroupsWarp = styled.div`
  padding-left: 20px;
`

const MissionWarp = styled.div`
  display: flex;
`

const Mission = () => {

    return (
        <PageContainer>
            <MissionWarp>
                <TaskGroupsWarp>
                    <TaskGroups/>
                </TaskGroupsWarp>

            </MissionWarp>

        </PageContainer>
    );
}

export default Mission;