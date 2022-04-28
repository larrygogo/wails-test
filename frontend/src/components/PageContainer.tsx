import React from "react";
import Navigate from "./navigate/Navigate";
import styled from "styled-components";

const PageContainerWarp = styled.div`
  display: flex;
  height: 100%;
`

type IProps = {
    showMenu?: boolean;
    children?: React.ReactNode
}

const PageContainer: React.FC<IProps> = (props) => {
    const {showMenu = true, children} = props;

    return <PageContainerWarp>
        {showMenu && <Navigate />}
        {children}
    </PageContainerWarp>
}

export default PageContainer;