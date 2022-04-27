import React, {useState} from 'react'
import {useAuth} from "../../hooks/useAuth";
import {Form} from "antd";
import {userLogin} from "../../services/user";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";
import {useNavigate} from 'react-router-dom';
import styles from './index.module.less'
import PageContainer from "../../components/PageContainer";


const Login = () => {
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useAuth()
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        console.log(username, password)
        try {
            const res = await userLogin({username, password})
            console.log(res)
            if (res.data.code === 0) {
                setUserInfo(res.data.data)
                navigate('/mission')
            }

        } finally {

        }

    }

    return (
        <PageContainer showMenu={false}>
            <div className={styles.LoginBox}>
                <Form className={styles.LoginForm}>
                    <Form.Item data-wails-no-drag>
                        <Input type="text" autoComplete="off" name="username" value={username}
                               placeholder="Username"
                               onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Item>
                    <Form.Item data-wails-no-drag>
                        <Input type="text" autoComplete="off" name="username" value={password}
                               placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Item>
                    <div data-wails-no-drag>
                        <Button onClick={handleLogin} block>登录</Button>
                    </div>
                </Form>
            </div>
        </PageContainer>
    );
}

export default Login