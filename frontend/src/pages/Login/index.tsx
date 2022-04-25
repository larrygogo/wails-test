import React, {useState} from 'react'
import './index.css'
import {useAuth} from "../../hooks/useAuth";
import {Form, Input} from "antd";
import {userLogin} from "../../services/user";
import Button from "../../styled/Button";

const Login = () => {
    const {userInfo, setUserInfo} = useAuth()
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        await userLogin({username, password}).then(res => {
            if (res.data.code === 200) {
                setUserInfo(res.data.data)

            }
        })
    }

    return <div className="login-box">
        <Form className="login-form">
            <Form.Item  data-wails-no-drag>
                <Input type="text" autoComplete="off" name="username" value={username}
                       placeholder="Username"
                       onChange={(e) => setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item  data-wails-no-drag>
                <Input type="text" autoComplete="off" name="username" value={password}
                       placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            <div className="login-form-detail" data-wails-no-drag>
                <Button onClick={handleLogin}>登录</Button>
            </div>
        </Form>
    </div>
}

export default Login