import React, {useState} from "react";
import {Link} from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import styles from './index.module.less'


const Mission = () => {
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
            <div>

            </div>
        </PageContainer>
    );
}

export default Mission;