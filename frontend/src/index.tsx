import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
