import React, {useState} from "react";
import {Link} from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import styles from './index.module.less'


const Profile = () => {
    const [result, setResult] = useState('Please enter your name below 👇');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    const greet = () => {
        window.go.main.App.Greet(name).then((result) => {
            setResult(result);
        });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target?.value);
    };

    return (
        <PageContainer>
            <div className={styles.Result}>{result}</div>
            <div className={styles.InputBox} data-wails-no-drag>
                <input className={styles.Input} type="text" autoComplete="off" value={name} onChange={handleChange}/>
                <button className={styles.Btn} onClick={greet}>Greet</button>
            </div>
            <div className={styles.InputBox} data-wails-no-drag>
                <input className={styles.Input} type="text" autoComplete="off" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
                <button className={styles.Btn} onClick={() => {
                    window.runtime.WindowSetTitle(title)
                }}>Profile
                </button>
            </div>
            <div className={styles.InputBox} data-wails-no-drag>
                <button className={styles.Btn} onClick={() => {
                    window.runtime.WindowFullscreen()
                }}>全屏
                </button>
                <button className={styles.Btn} onClick={() => {
                    window.runtime.WindowUnfullscreen()
                }}>退出全屏
                </button>
                <Link to="/login"><button className={styles.Btn}>登录</button>
                </Link>
            </div>
        </PageContainer>
    );
}

export default Profile;