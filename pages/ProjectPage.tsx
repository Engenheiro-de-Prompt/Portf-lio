
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = PROJECTS.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold text-cyan-400">Projeto não encontrado</h1>
                <p className="mt-4 text-lg text-slate-300">O projeto que você está procurando não existe.</p>
                <Link to="/" className="mt-8 inline-block bg-cyan-500 text-slate-900 font-bold py-2 px-6 rounded-full hover:bg-cyan-400 transition-colors">
                    Voltar para a Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Link to="/#projects" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para todos os projetos
                    </Link>

                    <article className="card-bg rounded-lg p-6 sm:p-10 border border-slate-800">
                        <header>
                            <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">{project.category}</p>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{project.title}</h1>
                            <p className="text-lg text-slate-300 mt-2">{project.subtitle}</p>
                        </header>

                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Resultados Imediatos e de Longo Prazo</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-700">
                                    <thead className="bg-slate-800/50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Métrica de Impacto</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Resultado Alcançado</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">O que isso significa?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800">
                                        {project.metrics.map((metric, index) => (
                                            <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">{metric.metric}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-400 font-semibold">{metric.result}</td>
                                                <td className="px-6 py-4 text-sm text-slate-400">{metric.meaning}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-8 prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-strong:text-slate-100 prose-h3:text-cyan-400 prose-ul:text-slate-300">
                           {project.narrative}
                        </div>
                        
                        <div className="mt-10 pt-8 border-t border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4">Ferramentas Utilizadas</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, index) => (
                                    <span key={index} className="bg-slate-700 text-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full">{tool}</span>
                                ))}
                            </div>
                        </div>

                        {project.links && project.links.length > 0 && (
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-white mb-4">Links Relevantes</h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {project.links.map((link, index) => (
                                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-cyan-600/20 text-cyan-300 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-600/40 transition-colors">
                                            {link.label}
                                            <ExternalLinkIcon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
