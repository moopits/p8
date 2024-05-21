import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <Header /> {/* Render the Header outside the Routes */}
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer /> {/* Render the Footer outside the Routes */}
    </Router>
)

