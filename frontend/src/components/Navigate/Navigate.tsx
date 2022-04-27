import React from "react";
import MenuItem from "./MenuItem";
import {HeartOutlined} from '@ant-design/icons'
import {useLocation} from "react-router";
import styled from "styled-components";
import Logo from "./Logo";
import MenuList from "./MenuList";
import UserBar from "./userbar/UserBar";

const NavigateWarp = styled.div`
  position: relative;
  width: 161px;
  min-width: 161px;
  background: rgba(6, 6, 6, 1);
`

const Navigate: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname.slice(1)

    return <NavigateWarp>
        <Logo>Logo</Logo>
        <MenuList>
            <MenuItem icon={<HeartOutlined/>} to="/mission" title="Mission" active={pathname === "mission"}
                      data-wails-no-drag/>
            <MenuItem icon={<HeartOutlined/>} to="/profile" title="Profile" active={pathname === "profile"}
                      data-wails-no-drag/>
            <MenuItem icon={<HeartOutlined/>} title="Proxy" active={pathname === "proxy"} data-wails-no-drag/>
            <MenuItem icon={<HeartOutlined/>} title="Settings" active={pathname === "settings"} data-wails-no-drag/>
            <MenuItem icon={<HeartOutlined/>} title="Gift Cards" active={pathname === "giftCards"} data-wails-no-drag/>
            <MenuItem icon={<HeartOutlined/>} title="Restocking" active={pathname === "restocking"} data-wails-no-drag/>
        </MenuList>
        <UserBar/>
    </NavigateWarp>
}


export default Navigate;