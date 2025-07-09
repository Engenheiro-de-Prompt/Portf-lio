
import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface HighlightProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const Highlight: React.FC<HighlightProps> = ({ icon, label, value }) => (
    <div>
        <div className="flex items-center text-xs text-cyan-400 uppercase font-semibold mb-1">
            {icon}
            <span className="ml-2">{label}</span>
        </div>
        <p className="text-sm text-slate-200">{value}</p>
    </div>
);

const Icons = {
    Chart: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    Savings: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1.667 1.667 0 01.958-1.513l1.428-.826a1.667 1.667 0 00.958-1.513V2m-2.599 1M12 6H9.401M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    Impact: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    Tools: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const savingsValue = `${project.savings || ''}${project.savings && project.hoursSaved ? ' + ' : ''}${project.hoursSaved || ''}`;

    return (
        <Link to={`/project/${project.slug}`} className="block group">
            <div className="h-full card-bg rounded-lg p-6 border border-slate-800 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex flex-col h-full">
                    <div>
                        <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">{project.category}</span>
                        <h3 className="text-xl font-bold text-slate-100 mt-2 mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{project.summary}</p>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-slate-700/50 space-y-3">
                        {project.roi && <Highlight icon={Icons.Chart} label="Resultado Mensurado" value={project.roi} />}
                        {(project.savings || project.hoursSaved) && <Highlight icon={Icons.Savings} label="Economia" value={savingsValue} />}
                        {project.businessImpact && <Highlight icon={Icons.Impact} label="Impacto de Negócio" value={project.businessImpact} />}
                        {project.keyTools.length > 0 && <Highlight icon={Icons.Tools} label="Tecnologias Chave" value={project.keyTools.join(', ')} />}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
