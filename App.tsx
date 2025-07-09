
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

const Background = () => (
    <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        <div 
            className="absolute inset-0 h-full w-full" 
            style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 242, 255, 0.15), rgba(2, 6, 23, 0))' }}
        ></div>
         {/* Iceberg/Deep Ocean glow */}
        <div 
            className="absolute bottom-0 inset-x-0 h-1/2"
            style={{ background: 'radial-gradient(ellipse at bottom, rgba(8, 145, 178, 0.2), transparent 70%)' }}
        ></div>
    </div>
);

function App() {
    const location = useLocation();

    return (
        <>
            <Background />
            <Header />
            <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
