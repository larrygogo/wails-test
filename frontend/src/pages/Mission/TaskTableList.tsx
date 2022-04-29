import React from "react";
import Search from "../../components/styled/Search";
import SectionHeader from "../../components/SectionHeader";

const TaskTableList: React.FC = () => {
    return <div>
        <SectionHeader
            title="Task Groups"
            showIcon
            subTitle={
                <div>
                    <span>20</span>
                    <span>Tasks</span>
                </div>
            }/>
        <div>
            <Search showIcon width={320} placeholder="Search by product name.SKU.site..."/>

        </div>
    </div>
}

export default TaskTableList;