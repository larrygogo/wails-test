import React from "react";
import Navigate from "../navigate/Navigate";
import styles from './index.module.less';
import {useLocation} from "react-router";


type IProps = {
    showMenu?: boolean;
    children?: React.ReactNode
}

const PageContainer: React.FC<IProps> = (props) => {
    const {showMenu = true, children} = props;
    const location = useLocation();

    console.log(location)

    return <div className={styles.PageContainer}>
        {showMenu && <Navigate />}
        {children}
    </div>
}

export default PageContainer;