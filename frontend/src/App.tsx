import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Mission from "./pages/Mission";
import Login from "./pages/Login";
import {AuthProvider} from "./hooks/useAuth";
import 'antd/dist/antd.css';
import '../mock/user'
import './App.css'
import Profile from "./pages/Profile";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <div className="App">
                <Routes>
                    <Route path="/">
                        <Route index element={<Login/>} />
                        <Route path="/mission" element={<Mission />}/>
                        <Route path="/profile" element={<Profile />}/>
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;