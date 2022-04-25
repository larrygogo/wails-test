import React, {useContext, useState} from "react";
import {userLogin} from "../services/user";

type AuthContextProps = {
    isAuth: boolean
    userInfo?: IUser.UserInfo
    setUserInfo: (userInfo: IUser.UserInfo) => void
}

type IProps = {
    children: React.ReactNode
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps)

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<IProps> = ({children}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<IUser.UserInfo>();

    const login = async (data: API.UserLoginData) => {
        setLoading(true)
        await userLogin(data).then(res => {
            if (res.data.code === 200) {
                setUserInfo(res.data.data)
            }
        }).finally(() => setLoading(false))
    }

    return <AuthContext.Provider value={{isAuth: !!userInfo, userInfo, setUserInfo}}>
        {children}
    </AuthContext.Provider>
}