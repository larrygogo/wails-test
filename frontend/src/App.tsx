import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {AuthProvider} from "./hooks/useAuth";
import 'antd/dist/antd.css';
import '../mock/user'

const App: React.FC = () => {
    return (
        <AuthProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login/>}>
                        <Route path="/dashboard" element={<Home/>}/>
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;