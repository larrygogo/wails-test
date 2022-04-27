import React from "react";
import AvatarDefault from '../../../assets/images/avatar.jpeg'
import ExitImage from '../../../assets/images/exit.png'
import {useAuth} from "../../../hooks/useAuth";
import styled from "styled-components";

const UserBarWarp = styled.div`
  position: absolute;
  bottom: 154px;
  left: 0;
`

const UserBarBox = styled.div`
  display: flex;
  height: 64px;
  padding-left: 24px;
`

const AvatarWarp = styled.div`
  width: 40px;
  height: 40px;
  background: #e2ebf0;
  border-radius: 3.4px;
  overflow: hidden;
  margin-right: 3px;

  img {
    width: 100%;
    height: 100%;
  }
`

const InfoWarp = styled.div`
  height: 44px;
`

const Nickname = styled.div`
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 4px;
`

const ExitButtonWarp = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`

const UserBar: React.FC = () => {
    const {userInfo} = useAuth();

    return <UserBarWarp>
        <UserBarBox>
            <AvatarWarp>
                <img src={AvatarDefault} alt="avatar"/>
            </AvatarWarp>
            <InfoWarp>
                <Nickname>拉灰Larry</Nickname>
                <ExitButtonWarp>
                    <img src={ExitImage} alt="exit"/>
                </ExitButtonWarp>
            </InfoWarp>
        </UserBarBox>
    </UserBarWarp>
}

export default UserBar;