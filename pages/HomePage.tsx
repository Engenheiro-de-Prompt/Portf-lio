
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Hero = () => (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at bottom, #072a4d 0%, #020617 70%)'}}>
        <div className="absolute inset-0 opacity-20">
            {/* Starfield */}
            {[...Array(100)].map((_, i) => (
                <div key={i} className="absolute rounded-full bg-cyan-200 animate-pulse-slow" style={{
                    height: `${Math.random() * 2 + 1}px`,
                    width: `${Math.random() * 2 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                }}></div>
            ))}
        </div>
        <div className="z-10 animate-fade-in-up px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white neon-text-title">
                Gustavo Machado
            </h1>
            <h2 className="mt-4 text-lg md:text-2xl text-cyan-200 max-w-3xl mx-auto">
                Engenheiro de Prompt & Especialista Estratégico em IA
            </h2>
            <p className="mt-6 text-md md:text-xl text-slate-300 max-w-4xl mx-auto">
                Da Prova de Conceito ao Valor Real: Orquestrando Soluções de Inteligência Artificial que Impulsionam o Seu Negócio.
            </p>
            <div className="mt-10">
                <a href="https://wa.me/5548998628663" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 neon-glow">
                    Entre em Contato
                </a>
            </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white animate-bounce w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
            </svg>
        </div>
    </section>
);

const ValueProposition = () => (
    <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-cyan-400">IA como Ativo Estratégico, Não como Custo de Inovação.</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">Minha filosofia é simples: a tecnologia só tem valor quando resolve um problema real de negócio e gera um retorno claro sobre o investimento.</p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
                <div className="card-bg p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-white">Diagnóstico Preciso e ROI Quantificável</h3>
                    <p className="mt-2 text-slate-400">Começo pelo seu desafio, não pela tecnologia. Cada solução é projetada com um business case claro, traduzindo ganhos técnicos em impacto financeiro.</p>
                </div>
                <div className="card-bg p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-white">Orquestração de Ponta a Ponta</h3>
                    <p className="mt-2 text-slate-400">Minha expertise cobre a jornada completa, da arquitetura de dados à integração de agentes autônomos. Entrego um ecossistema funcional e escalável.</p>
                </div>
                <div className="card-bg p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-white">Transparência Radical e Mitigação de Risco</h3>
                    <p className="mt-2 text-slate-400">Meu compromisso é ter um diálogo honesto sobre viabilidade, riscos e limitações, garantindo previsibilidade e projetos de sucesso.</p>
                </div>
            </div>
        </div>
    </section>
);

const ImpactNumbers = () => (
    <section className="py-20 sm:py-32 bg-slate-900/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-3xl lg:text-4xl font-bold text-white">Resultados que Falam por Si</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">Traduzindo IA em Valor Mensurável. Estes são processos otimizados e novos patamares de eficiência alcançados.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="card-bg p-6 rounded-lg">
                    <span className="text-5xl font-black text-cyan-400 neon-text-title">34.640%</span>
                    <p className="mt-2 font-semibold text-white">de ROI</p>
                    <p className="text-sm text-slate-400">em automação de extração de dados.</p>
                </div>
                <div className="card-bg p-6 rounded-lg">
                    <span className="text-5xl font-black text-cyan-400 neon-text-title">R$ 2M+</span>
                    <p className="mt-2 font-semibold text-white">em Economia Projetada</p>
                    <p className="text-sm text-slate-400">com automação de atendimento (10 anos).</p>
                </div>
                 <div className="card-bg p-6 rounded-lg">
                    <span className="text-5xl font-black text-cyan-400 neon-text-title">U$5/mês</span>
                    <p className="mt-2 font-semibold text-white">Custo de Arquitetura de Dados</p>
                    <p className="text-sm text-slate-400">para Data Lake e pipelines de ETL.</p>
                </div>
                <div className="card-bg p-6 rounded-lg">
                    <span className="text-5xl font-black text-cyan-400 neon-text-title">R$ 115k</span>
                    <p className="mt-2 font-semibold text-white">de Economia Anual</p>
                    <p className="text-sm text-slate-400">com automação de análise de avaliações.</p>
                </div>
            </div>
        </div>
    </section>
);

const Projects = () => (
    <section id="projects" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-3xl lg:text-4xl font-bold text-white">Estudos de Caso e Projetos</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">A ponta do iceberg. Explore como transformei desafios de negócio em soluções de IA com impacto real.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
);

const Skills = () => {
    const skillsData = {
        'Inteligência Artificial & Machine Learning': ['Engenharia de Prompt Avançada (GPT-4, Claude)', 'Orquestração de Agentes Autônomos (CrewAI, MANUS)', 'Modelagem de ML (Scikit-learn, TensorFlow)', 'RAG, Fine-Tuning e Visão Computacional', 'Geração de Dados Sintéticos'],
        'Desenvolvimento & Arquitetura Cloud': ['Cloud (AWS): S3, Glue, Lambda, Athena, QuickSight', 'Backend: Python, Node.js', 'Frontend: React, HTML/CSS', 'Infraestrutura como Código (IaC)', 'Arquitetura de Micro-serviços'],
        'Análise de Dados & Automação': ['SQL e Análise de Dados com Pandas', 'Business Intelligence e Visualização (QuickSight)', 'Automação de Processos (Selenium, Apps Script)', 'Web Scraping e Consumo de APIs', 'Análise de Sentimentos e NLP'],
    };

    return (
        <section id="skills" className="py-20 sm:py-32 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Um Arsenal Completo para Soluções de Ponta a Ponta</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">Minha capacidade de entregar resultados vem da combinação de expertise em três áreas cruciais.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, items]) => (
                        <div key={category} className="card-bg p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {items.map(skill => (
                                    <li key={skill} className="flex items-start">
                                        <svg className="w-4 h-4 mr-2 mt-1 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span className="text-slate-300">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Methodology = () => (
    <section id="methodology" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Da Ideia ao Impacto: Um Processo Estruturado</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">Uma metodologia de 4 fases para maximizar o alinhamento, mitigar riscos e garantir a entrega de valor.</p>
            </div>
            <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { num: '01', title: 'Análise Crítica e Diagnóstico', focus: 'Entender o "Porquê"' },
                        { num: '02', title: 'Design Colaborativo e Prototipagem', focus: 'Validar a Solução' },
                        { num: '03', title: 'Implementação Responsável e Gradual', focus: 'Entregar Valor de Forma Segura' },
                        { num: '04', title: 'Evolução e Sustentabilidade', focus: 'Garantir Autonomia' },
                    ].map((step, index) => (
                        <div key={index} className="relative card-bg p-6 rounded-lg text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="text-4xl font-black text-cyan-500">{step.num}</span>
                                <h3 className="ml-4 text-lg font-bold text-white">{step.title}</h3>
                            </div>
                            <p className="mt-2 text-slate-400">{step.focus}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="py-20 sm:py-32 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Pronto para Transformar seu Desafio em uma Vantagem Competitiva?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">Estou à disposição para uma conversa estratégica, sem compromisso, para explorar como a aplicação inteligente da IA pode gerar valor real para o seu negócio.</p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                <a href="mailto:mimempreende@gmail.com" className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors">mimempreende@gmail.com</a>
                <a href="https://linkedin.com/in/engenheirodeprompt" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors">linkedin.com/in/engenheirodeprompt</a>
                <a href="https://wa.me/5548998628663" target="_blank" rel="noopener noreferrer" className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors">(48) 9 9862-8663</a>
            </div>
        </div>
    </section>
);


const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Delay to ensure the element is rendered before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
             // On initial page load or navigation without a hash, scroll to top.
            if(window.scrollY !== 0) {
                 window.scrollTo(0, 0);
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <ValueProposition />
            <ImpactNumbers />
            <Projects />
            <Skills />
            <Methodology />
            <Contact />
        </main>
    );
};

export default HomePage;
