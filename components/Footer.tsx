
import React from 'react';

const Footer = () => {
    const LinkedinIcon = () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    );

    return (
        <footer className="bg-slate-950/50 border-t border-slate-800">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <a href="https://www.linkedin.com/in/engenheirodeprompt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedinIcon />
                    </a>
                </div>
                <p className="text-sm">Gustavo Machado - Engenheiro de Prompt & Especialista Estratégico em IA</p>
                <p className="text-xs mt-2">&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
