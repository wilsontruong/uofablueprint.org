import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Project, StudentApply, NonprofitApply } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="projects" element={<Project />}></Route>
                <Route path="apply/students" element={<StudentApply />}></Route>
                <Route
                    path="apply/nonprofits"
                    element={<NonprofitApply />}
                ></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
