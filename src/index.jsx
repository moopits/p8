import React from 'react'
// importer les outils React
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Home from './page/Home'
import About from './page/About'
import NotFound from './page/NotFound'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Lodging from './page/Lodging.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Router>
        <Header /> {/* Render the Header outside the Routes */}
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lodging/:id" element={<Lodging />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer /> {/* Render the Footer outside the Routes */}
    </Router>
)





// --model elementaire appli REACT
// --importer les outils React
//import ReactDOM from 'react-dom'
// --cibler la dic dont l'id est root
//const divRoot = document.getElementById('root')
// --créer un noeud racine a partir de la div root
//const reactRoot = ReactDOM.creatRoot(divRoot)
// --injecter le 1er composant le noeud racine
//reactRoot.render(_)
