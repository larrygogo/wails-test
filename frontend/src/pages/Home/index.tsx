import React, {useState} from "react";
import './index.css'
import {Link} from "react-router-dom";

const Home = () => {
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
        <>
            <div className="result">{result}</div>
            <div className="input-box" data-wails-no-drag>
                <input className="input" type="text" autoComplete="off" value={name} onChange={handleChange}/>
                <button className="btn" onClick={greet}>Greet</button>
            </div>
            <div className="input-box" data-wails-no-drag>
                <input className="input" type="text" autoComplete="off" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
                <button className="btn" onClick={() => {
                    window.runtime.WindowSetTitle(title)
                }}>设置标题
                </button>
            </div>
            <div className="input-box" data-wails-no-drag>
                <button className="btn" onClick={() => {
                    window.runtime.WindowFullscreen()
                }}>全屏
                </button>
                <button className="btn" onClick={() => {
                    window.runtime.WindowUnfullscreen()
                }}>退出全屏
                </button>
                <Link to="/login"><button className="btn">登录</button>
                </Link>
            </div>
        </>
    );
}

export default Home;