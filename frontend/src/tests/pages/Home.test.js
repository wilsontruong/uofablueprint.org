import React from 'react'

import App from '../../App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Project, StudentApply, NonprofitApply } from '../../pages'
import { render, screen} from '@testing-library/react'

test('renders home', () => {
    render(
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

    const linkElement = screen.getByText('Tech For Social Good')
    expect(linkElement).toBeInTheDocument()
    
})
