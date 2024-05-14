import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
)

