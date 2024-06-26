import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from "history";
import {
    Route,
    Routes, BrowserRouter
} from "react-router-dom";
import Home from "./view/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
var hist = createBrowserHistory();

root.render(
    <BrowserRouter history={hist}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
