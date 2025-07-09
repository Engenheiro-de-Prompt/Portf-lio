
import React from 'react';
import type { Project } from './types';

export const PROJECTS: Project[] = [
    {
        id: 4,
        slug: 'arquitetura-dados-5-dolares-mes',
        title: 'Arquitetura de Dados a U$5/mês',
        subtitle: 'A Fundação para a Inteligência: Transformando a Leve Educação em uma Organização Data-Driven',
        category: 'Estudo de Caso',
        summary: 'Construção de uma arquitetura de dados completa, robusta e escalável, do ETL ao BI, por um custo marginal, centralizando 100% dos dados da empresa.',
        roi: '3.581% (sub-processo)',
        savings: 'R$ 115.414,00 Anual',
        hoursSaved: '403 horas/mês',
        businessImpact: 'Empresa opera com uma única fonte da verdade, permitindo decisões mais rápidas e seguras.',
        keyTools: ['AWS', 'Python', 'SQL'],
        metrics: [
            { metric: 'Custo Operacional Total', result: 'U$ 5 / mês', meaning: 'Uma arquitetura de dados completa, do ETL ao BI, por um custo marginal. Valida a capacidade de criar soluções de altíssima eficiência e baixo custo.' },
            { metric: 'Eficiência e ROI', result: 'ROI de 3.581% (em um sub-processo)', meaning: 'A automação da extração de avaliações gerou uma economia anual de R$ 115.414,00 e liberou 403 horas/mês da equipe.' },
            { metric: 'Capacidade Estratégica', result: '100% dos Dados Centralizados', meaning: 'Eliminação de relatórios conflitantes. A empresa agora opera com uma única fonte da verdade para decisões mais rápidas e seguras.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Da Desordem de Dados à Inteligência de Negócio</h3>
                <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> A Leve Educação, como muitas empresas em crescimento, enfrentava o "caos de dados". Informações críticas estavam espalhadas em planilhas, na API do LMS (TalentLMS) e em outras fontes. Isso não era apenas um problema técnico; era um gargalo de negócio que impedia uma visão clara sobre o desempenho de cursos, engajamento de alunos e oportunidades de crescimento.</p>
                <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - A Solução Holística:</strong> Em vez de atacar problemas isolados, propus e executei a construção da fundação. Desenvolvi uma arquitetura de dados de ponta a ponta, orquestrando um ecossistema de ferramentas que se comunicam perfeitamente:</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                    <li><strong className="text-slate-400">Extração Automatizada (ETL):</strong> Criei scripts em Python e utilizei AWS Glue para extrair dados de todas as fontes relevantes de forma automática e agendada.</li>
                    <li><strong className="text-slate-400">Centralização no Data Lake:</strong> Todos os dados brutos e tratados são armazenados de forma segura e econômica no AWS S3, criando um ativo de dados proprietário e perene para a empresa.</li>
                    <li><strong className="text-slate-400">Transformação e Enriquecimento:</strong> Com AWS Lambda e IA (GPT, Claude, Gemini), os dados são limpos, padronizados e enriquecidos. Isso inclui desde a análise de sentimento em avaliações até a padronização de categorias.</li>
                    <li><strong className="text-slate-400">Democratização do Acesso:</strong> Utilizando AWS Athena, qualquer pessoa com permissão pode fazer consultas complexas em SQL diretamente no Data Lake. Para a liderança e equipes de negócio, criei dashboards interativos no AWS QuickSight, transformando dados complexos em insights visuais e acionáveis.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto Além dos Números:</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Cultural:</strong> A disponibilidade de dados confiáveis fomentou uma cultura data-driven.</li>
                    <li><strong>Escalabilidade e Inovação:</strong> A arquitetura de micro-serviços modular tornou a integração de novas fontes de dados ou a aplicação de novos modelos de ML um processo simples e rápido.</li>
                </ul>
            </>
        ),
        tools: ['AWS S3', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'AWS QuickSight', 'Python', 'SQL', 'GitHub', 'Talent LMS API', 'Google Sheets API', 'GPT', 'Claude', 'Gemini'],
        links: [],
    },
    {
        id: 5,
        slug: 'chatbot-livia',
        title: 'Chatbot Lívia',
        subtitle: 'De um Chatbot de Suporte a um Mentor de IA Estratégico',
        category: 'Estudo de Caso',
        summary: 'Desenvolvimento de uma assistente instrucional inteligente que economizou 67 horas em 90 dias e projeta uma economia de R$ 2 Milhões em 10 anos.',
        roi: 'R$ 1.995.000,00 (Projeção 10 anos)',
        savings: 'R$ 2 Milhões+ (Projetado)',
        hoursSaved: '67 horas em 90 dias',
        businessImpact: 'Criação de um novo ativo de dados para liderar a próxima onda da educação com mentoria de IA.',
        keyTools: ['OpenAI API', 'RAG', 'ChatVault'],
        metrics: [
            { metric: 'Economia de Escala', result: 'R$ 1.995.000,00 (Projeção 10 anos)', meaning: 'Valida um modelo de atendimento que escala com a base de usuários sem a necessidade de aumentar proporcionalmente a equipe.' },
            { metric: 'Eficiência Operacional', result: '67 horas economizadas em 90 dias', meaning: 'Liberação imediata da equipe de tarefas repetitivas, com 399 conversas atendidas autonomamente.' },
            { metric: 'Vantagem Competitiva', result: 'Potencial de Pivotagem para Mentor de IA', meaning: 'A solução cria um novo e valioso ativo de dados curados, posicionando a empresa para liderar a próxima onda da educação.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Reinventando a Experiência do Aluno</h3>
                <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> A Leve Educação precisava oferecer um suporte excepcional e 24/7 aos alunos, respondendo a dúvidas que iam desde o uso da plataforma até questões técnicas sobre o conteúdo dos cursos. Escalar esse suporte com uma equipe humana seria caro e ineficiente.</p>
                <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - A Solução Evolutiva:</strong> Em vez de um chatbot tradicional baseado em regras, desenvolvi a "Lívia", uma assistente instrucional inteligente.</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                    <li><strong className="text-slate-400">Fundação Tecnológica:</strong> Utilizei a API da OpenAI com técnicas avançadas, como Busca Vetorial (RAG) e o recurso de Assistentes para manter o contexto.</li>
                    <li><strong className="text-slate-400">Jornada de Ferramentas:</strong> O projeto evoluiu de uma integração via ManyChat para a plataforma ChatVault, buscando mais robustez e escalabilidade.</li>
                    <li><strong className="text-slate-400">Múltiplas Frentes de Atuação:</strong> Lívia foi treinada para dar suporte à plataforma, tirar dúvidas didáticas e fazer recomendações personalizadas.</li>
                </ul>
                 <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto Além dos Números:</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong>Ativo de Dados Proprietário:</strong> Cada interação supervisionada refina um dataset único, de valor inestimável para o futuro.</li>
                     <li><strong>Visão de Futuro (Pivotagem):</strong> A inteligência acumulada pela Lívia a transforma, a longo prazo, em um mentor de IA, representando uma disrupção no modelo educacional tradicional.</li>
                </ul>
            </>
        ),
        tools: ['OpenAI API', 'Assistants', 'RAG', 'Busca Vetorial', 'ChatVault', 'ManyChat', 'Engenharia de Prompt'],
        links: [],
    },
    {
        id: 6,
        slug: 'extracao-dados-estrategicos',
        title: 'Extração de Dados Estratégicos',
        subtitle: 'Desbloqueando Inteligência de Mercado: Da Inviabilidade Manual à Automação com 34.640% de ROI',
        category: 'Estudo de Caso',
        summary: 'Automação da coleta de dados de 406.210 CNPJs, transformando um processo de meses em dias e gerando uma economia de mais de R$ 200 mil.',
        roi: '34.640%',
        savings: 'R$ 200.913,00',
        hoursSaved: '3.385 horas',
        businessImpact: 'Aceleração drástica do ciclo de análise de mercado para vantagem competitiva crucial.',
        keyTools: ['Python', 'Pandas', 'API'],
        metrics: [
            { metric: 'Retorno Sobre Investimento', result: '34.640%', meaning: 'Prova irrefutável de que um pequeno investimento em automação inteligente pode gerar um retorno financeiro exponencial.' },
            { metric: 'Eficiência e Custo', result: '3.385 horas (ou R$ 200.913,00) economizadas', meaning: 'Liberou uma colaboradora sênior de uma tarefa repetitiva, permitindo foco em análise estratégica.' },
            { metric: 'Agilidade Estratégica', result: 'Dataset de 406.210 CNPJs entregue em dias', meaning: 'Aceleração drástica do ciclo de análise de mercado, garantindo uma vantagem competitiva crucial.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Transformando um Gargalo Operacional em Ativo de Dados</h3>
                <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> A AXS, cliente da Leve Educação, precisava mapear todo o setor de energia no Brasil. O plano inicial de coletar manualmente os dados de mais de 400.000 CNPJs de uma API pública era economicamente inviável e paralisava a estratégia de inteligência de mercado.</p>
                <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - A Solução Direta e Eficaz:</strong> Propus uma solução de automação focada e rápida.</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                    <li><strong className="text-slate-400">Desenvolvimento do Script:</strong> Criei um script em Python que se conectava diretamente ao endpoint da API pública.</li>
                    <li><strong className="text-slate-400">Extração Automatizada:</strong> O script foi projetado para iterar e extrair sistematicamente todos os dados necessários.</li>
                    <li><strong className="text-slate-400">Estruturação de Dados:</strong> As informações foram limpas, padronizadas e estruturadas em um dataset coeso, pronto para consumo.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto Além dos Números:</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong>Validação do Modelo de Consultoria:</strong> Serviu como prova de conceito poderosa para vender expertise técnica para outros clientes.</li>
                     <li><strong>Percepção de Valor:</strong> A entrega de um resultado tão impactante solidificou a percepção de valor da automação inteligente.</li>
                     <li><strong>Foco na Estratégia, Não na Operação:</strong> Exemplifica a filosofia de que a tecnologia deve eliminar tarefas de baixo valor e permitir que o talento humano se concentre na estratégia.</li>
                </ul>
            </>
        ),
        tools: ['Python', 'Pandas', 'API Consumption', 'Web Scraping', 'Data Extraction'],
        links: [],
    },
    {
        id: 7,
        slug: 'eliminacao-alucinacao-ia',
        title: 'Pesquisa Aplicada para Eliminação de Alucinação',
        subtitle: 'Construindo Confiança na IA: Da Incerteza à Precisão Factual em Setores Críticos',
        category: 'Estudo de Caso',
        summary: 'Desenvolvimento de metodologia para 100% de eliminação de alucinação em IA, crucial para setores de alto risco como saúde, jurídico e financeiro.',
        roi: '100% de precisão',
        savings: 'R$ 10.000/ano (potencial)',
        businessImpact: 'Garante a confiabilidade da IA para automação em setores de alto risco (saúde, jurídico, financeiro).',
        keyTools: ['Python', 'Scikit-learn', 'Benchmarking'],
        metrics: [
            { metric: 'Confiabilidade da IA', result: 'Metodologia para 100% de Eliminação de Alucinação', meaning: 'Capacidade comprovada de garantir que a IA não "invente" informações, um pré-requisito para automação em áreas de alto risco.' },
            { metric: 'Mitigação de Risco', result: 'Identificação de Padrões de Erro da API do GPT', meaning: 'A pesquisa permitiu prever falhas dos LLMs, criando sistemas mais robustos que antecipam e tratam possíveis erros.' },
            { metric: 'Otimização de Custos', result: 'Alternativa de R$ 10.000/ano em Economia', meaning: 'A análise revelou um método alternativo com 100% de precisão e economia significativa, demonstrando a capacidade de encontrar a solução mais eficiente.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: O Desafio da Verdade Absoluta na IA</h3>
                <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> Uma empresa de transcrição médica enfrentava o maior obstáculo para a adoção de IA: a alucinação. A IA inventava sintomas e diagnósticos, uma falha de confiança inaceitável que poderia impactar a segurança do paciente.</p>
                <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - A Pesquisa Aplicada como Solução:</strong> A solução exigia um método científico.</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                    <li><strong className="text-slate-400">Criação do Benchmark de Alucinação:</strong> Desenvolvi um mecanismo sistemático para testar e medir a precisão da IA contra um dataset de controle curado por especialistas.</li>
                    <li><strong className="text-slate-400">Testes e Validação:</strong> Conduzi uma série de testes A/B com diferentes prompts e técnicas, usando machine learning para identificar a combinação ótima.</li>
                    <li><strong className="text-slate-400">Geração de Dados Sintéticos:</strong> Gere thousands de cenários para descobrir e mapear os padrões de erro da API do GPT.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto e Aprendizado Estratégico:</h4>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong>Domínio Técnico Diferenciado:</strong> O resultado é uma metodologia proprietária para garantir a precisão factual da IA, uma capacidade rara e de altíssimo valor.</li>
                     <li><strong>A Lição da Obsessão vs. Entrega:</strong> Este projeto foi uma lição sobre alinhamento com stakeholders. A obsessão pela perfeição desalinhou-se com o ritmo do negócio. A maturidade adquirida é inestimável: hoje, equilibro rigor científico com a entrega pragmática de valor.</li>
                 </ul>
            </>
        ),
        tools: ['Python', 'Pandas', 'Scikit-learn', 'OpenAI API (GPT-4)', 'Geração de Dados Sintéticos', 'Testes A/B', 'Benchmarking Estatístico'],
        links: [],
    },
    {
        id: 8,
        slug: 'sistema-recomendacao-ia-generativa',
        title: 'Sistema de Recomendação com IA Generativa',
        subtitle: 'Além do Algoritmo: Personalização Imediata para Uma Experiência de Aprendizado Única',
        category: 'Estudo de Caso',
        summary: 'Criação de um sistema de recomendação inovador que supera o "cold start" dos sistemas de ML tradicionais, oferecendo trilhas de aprendizado relevantes desde o primeiro acesso.',
        roi: 'Inovação',
        businessImpact: 'Aumenta drasticamente a retenção de novos usuários ao oferecer relevância desde o primeiro acesso.',
        keyTools: ['OpenAI API', 'Engenharia de Prompt', 'Dados Sintéticos'],
        metrics: [
            { metric: 'Engajamento Imediato', result: 'Recomendações Personalizadas no Dia Zero', meaning: 'Supera a falha do "cold start" dos sistemas de ML tradicionais, aumentando a retenção de novos usuários com relevância imediata.' },
            { metric: 'Precisão e Relevância', result: 'Recomendação Baseada em Objetivos', meaning: 'Entende a intenção do aluno, não apenas cliques, resultando em recomendações mais profundas e com maior probabilidade de conversão.' },
            { metric: 'Inovação e Diferencial', result: 'Sistema de Recomendação Proprietário', meaning: 'Posiciona a empresa como líder em personalização, criando um ativo de negócio que a concorrência não pode replicar facilmente.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Resolvendo o Paradoxo da Personalização</h3>
                 <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> Como personalizar a experiência para um novo aluno sobre o qual não se tem dados? Sistemas de ML tradicionais são ineficazes no momento mais crítico: o primeiro contato.</p>
                 <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - A Solução com IA Generativa:</strong> Desenvolvi uma solução que gera personalização a partir da intenção declarada do usuário.</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                     <li><strong className="text-slate-400">Captura de Objetivos:</strong> O processo começa com um formulário simples onde o aluno descreve seus objetivos.</li>
                     <li><strong className="text-slate-400">Criação de Personas Sintéticas:</strong> A IA Generativa processa as respostas e cria uma "persona sintética" detalhada para o aluno.</li>
                     <li><strong className="text-slate-400">Recomendação Inteligente:</strong> Com base na persona, a IA constrói uma trilha de aprendizado inicial, sugerindo os cursos mais adequados.</li>
                     <li><strong className="text-slate-400">Garantia de Precisão:</strong> Incorpora técnicas de eliminação de alucinação para garantir que as recomendações sejam sempre baseadas em cursos existentes.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto Além dos Números:</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong>Implementação Ágil:</strong> Desenvolvimento significativamente mais rápido e simples do que um modelo de ML tradicional.</li>
                     <li><strong>Experiência de Usuário Superior:</strong> A plataforma parece "entender" o aluno desde o primeiro momento, aumentando a confiança na marca.</li>
                     <li><strong>Fundação para o Futuro:</strong> O sistema (pronto, aguardando implantação) representa a próxima geração de personalização em EdTech.</li>
                </ul>
            </>
        ),
        tools: ['OpenAI API (GPT-4)', 'Google Sheets', 'Engenharia de Prompt', 'Geração de Dados Sintéticos', 'Análise de Intenção'],
        links: [],
    },
    {
        id: 9,
        slug: 'automacao-processos-internos',
        title: 'Automação de Processos Internos',
        subtitle: 'Otimização Contínua: Liberando o Potencial Humano com Automação Inteligente',
        category: 'Estudo de Caso',
        summary: 'Implementação de duas automações-chave que geraram ROI de 201% e 3.581% respectivamente, eliminando tarefas manuais e liberando a equipe para focar em estratégia.',
        roi: 'Até 3.581%',
        savings: 'R$ 115.414,00 Anual',
        hoursSaved: 'Centenas de horas',
        businessImpact: 'Libera o potencial humano para focar em atividades estratégicas, não em "trabalho ocupado".',
        keyTools: ['GPT-4 Vision', 'Apps Script', 'Python'],
        metrics: [
            { metric: 'Classificação de Imagens', result: 'ROI de 201% (Crescente)', meaning: 'Economia imediata de horas. O ROI aumenta exponencialmente com o volume de conteúdo, tornando a operação mais escalável.' },
            { metric: 'Extração de Avaliações', result: 'ROI de 3.581%', meaning: 'Economia anual projetada de R$ 115.414,00. Automatizou a coleta de feedback, transformando-o em uma fonte contínua de insights.' },
        ],
        narrative: (
            <>
                 <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa dos Projetos: Eliminando o "Trabalho Ocupado"</h3>
                 <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> Processos manuais repetitivos como classificação de imagens e extração de avaliações consumiam centenas de horas, impedindo que a equipe focasse em atividades de maior valor.</p>
                 <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - Soluções Direcionadas:</strong></p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                     <li><strong className="text-slate-400">Para a Classificação de Imagens:</strong> Criei um sistema com a API de Visão do GPT-4 e Google Apps Script que "lê" imagens no Google Drive, extrai o contexto e as classifica automaticamente.</li>
                     <li><strong className="text-slate-400">Para a Extração de Avaliações:</strong> Como parte da arquitetura de dados, desenvolvi um script que se conecta à API do LMS, extrai todas as avaliações, estrutura os dados e os envia para o Data Lake.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto Além dos Números:</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong>Agilidade na Produção de Conteúdo:</strong> O tempo para criar novos materiais didáticos foi drasticamente reduzido.</li>
                     <li><strong>Ciclo de Melhoria Acelerado:</strong> O feedback dos alunos, agora coletado em tempo real, permite correções muito mais rápidas nos cursos.</li>
                     <li><strong>Escalabilidade Comprovada:</strong> Ambas as soluções foram projetadas para escalar com o aumento do volume de dados e arquivos.</li>
                </ul>
            </>
        ),
        tools: ['OpenAI API (GPT-4 Vision)', 'Google Apps Script', 'Python', 'Google Drive', 'Google Sheets', 'AWS'],
        links: [],
    },
    {
        id: 10,
        slug: 'analise-state-of-data-brazil',
        title: 'Análise "State of Data Brazil 2023"',
        subtitle: 'Inteligência de Mercado Proativa: Transformando Dados Públicos em Oportunidades de Negócio',
        category: 'Projeto Pessoal',
        summary: 'Análise exploratória aprofundada do relatório "State of Data Brazil 2023", gerando +10 insights acionáveis sobre as dores e tendências do mercado de dados no Brasil.',
        roi: 'Posicionamento',
        businessImpact: 'Extração de insights para direcionar a oferta de serviços para onde há maior demanda e valor.',
        keyTools: ['Python', 'Pandas', 'Kaggle'],
        metrics: [
            { metric: 'Geração de Insights', result: '+10 Insights Acionáveis', meaning: 'Capacidade de extrair "sinais do ruído", identificando as reais dores e tendências do mercado, como os obstáculos para a adoção de IA.' },
            { metric: 'Posicionamento de Autoridade', result: 'Análise Pública no Kaggle', meaning: 'Demonstra expertise, transparência e compromisso com a comunidade, construindo credibilidade como especialista.' },
            { metric: 'Validação de Oportunidades', result: 'Mapeamento de Lacunas no Mercado', meaning: 'A análise validou hipóteses sobre as necessidades das empresas, direcionando a oferta de serviços para onde há maior demanda.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Antecipando as Necessidades do Mercado</h3>
                <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> Entender as tendências e desafios do mercado é uma necessidade. O relatório "State of Data Brazil 2023" é um tesouro de informações, mas seus dados brutos não respondem: "Onde estão as maiores dores dos meus potenciais clientes?".</p>
                <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - Inteligência Própria:</strong> Conduzi uma análise exploratória aprofundada.</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                     <li><strong className="text-slate-400">Análise e Visualização:</strong> Utilizei Python (Pandas, Matplotlib, Seaborn) para processar e visualizar as respostas da pesquisa.</li>
                     <li><strong className="text-slate-400">Identificação de Padrões:</strong> Fui além das contagens simples, buscando correlações, revelando que a "falta de casos de uso claros" e a "falta de expertise" são dores universais.</li>
                     <li><strong className="text-slate-400">Compartilhamento de Conhecimento:</strong> Documentei todo o processo em um notebook no Kaggle.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto e Relevância para o Negócio:</h4>
                <p>Este projeto demonstra proatividade, visão estratégica e a capacidade de usar a análise de dados para direcionar ações e ofertas de serviço, moldando minha própria consultoria para focar na identificação de casos de uso de alto impacto para os clientes.</p>
            </>
        ),
        tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Kaggle', 'Jupyter Notebook'],
        links: [{ label: 'Análise Completa no Kaggle', url: 'https://www.kaggle.com/code/guguinha/notebooke4f85a3ad4' }],
    },
    {
        id: 11,
        slug: 'creaw-ai-enxame-agentes',
        title: 'Creaw-AI: Orquestrando a Criação de Conteúdo',
        subtitle: 'O Futuro da Produtividade: Orquestrando um "Enxame de Agentes" para Automação de Processos Complexos',
        category: 'Estudo de Caso',
        summary: 'Prova de conceito que valida a metodologia de "Enxame de Agentes" para automatizar até 80% de um processo criativo complexo como o Design Instrucional.',
        roi: 'Prova de Conceito',
        businessImpact: 'Validação da automação de até 80% de um processo criativo, liberando uma equipe inteira para estratégia.',
        keyTools: ['CrewAI', 'MANUS', 'Python'],
        metrics: [
            { metric: 'Prova de Conceito', result: 'Metodologia de "Enxame de Agentes" Validada', meaning: 'Demonstração prática de que um fluxo de trabalho complexo pode ser decomposto e executado por um time de IAs especializadas.' },
            { metric: 'Potencial de Eficiência', result: 'Automação de um Setor Inteiro', meaning: 'A premissa é revolucionária: automatizar até 80% de um processo criativo, liberando uma equipe inteira para focar em estratégia e inovação.' },
            { metric: 'Adaptação Tecnológica', result: 'Evolução de CrewAI para MANUS', meaning: 'Prova da capacidade de não se prender a uma única tecnologia, adotando a melhor solução disponível no mercado.' },
        ],
        narrative: (
            <>
                 <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Da Teoria à Prática na Automação de Setores</h3>
                 <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> Como escalar a produção de conteúdo educacional de alta qualidade, um processo que tradicionalmente exige uma equipe multidisciplinar?</p>
                 <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - A Orquestração de Inteligências:</strong></p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                     <li><strong className="text-slate-400">Conceito Inicial (CrewAI):</strong> Desenvolvi um "enxame" de agentes generativos com papéis específicos: Gerente de Educação, Escritor, Crítico e Pedagogo.</li>
                     <li><strong className="text-slate-400">Prova de Conceito e Competição:</strong> O projeto foi robusto o suficiente para ser compartilhado em um concurso de IA e validado pelo setor.</li>
                     <li><strong className="text-slate-400">Evolução e Adaptação (MANUS):</strong> Com base no feedback, o projeto foi redirecionado para utilizar o MANUS, uma tecnologia de agentes autônomos de ponta, para quantificar o impacto real.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto e Relevância para o Negócio:</h4>
                <p>Este projeto é a demonstração de um processo de inovação contínua. É um vislumbre do futuro da produtividade, provando que é possível automatizar cadeias de valor inteiras, transformando o papel dos humanos de executores para estrategistas e supervisores.</p>
            </>
        ),
        tools: ['CrewAI', 'MANUS', 'OpenAI API', 'Python', 'GitHub'],
        links: [
            { label: 'Artigo Original no LinkedIn', url: 'https://www.linkedin.com/pulse/creawai-enxame-de-agentes-generativos-para-design-gustavo-machado-5zbuc/' },
            { label: 'Código da Fase 1 no GitHub', url: 'https://github.com/Engenheiro-de-Prompt/CreawAI-Enxame-de-Agentes-Generativos-para-Design-Instrucional' },
        ],
    },
    {
        id: 12,
        slug: 'prompt-feature-engineer',
        title: 'Prompt-Feature-Engineer',
        subtitle: 'GPT no Google Sheets: Capacitando Equipes com IA na Ferramenta que Elas Já Usam',
        category: 'Projeto Open Source',
        summary: 'Ferramenta open source que integra a API da OpenAI ao Google Sheets, permitindo que qualquer profissional realize análises complexas com linguagem natural.',
        roi: 'Democratização da IA',
        hoursSaved: 'Semanas de trabalho',
        businessImpact: 'Capacita equipes (marketing, vendas, RH) a usar IA na ferramenta que já dominam (Google Sheets).',
        keyTools: ['Apps Script', 'OpenAI API', 'JavaScript'],
        metrics: [
            { metric: 'Democratização da IA', result: 'Análise de Dados com Linguagem Natural', meaning: 'Permite que qualquer profissional realize análises complexas em uma planilha, sem precisar escrever uma única linha de código.' },
            { metric: 'Eficiência e Automação', result: '4.500 Raciocínios de IA Gerados Simultaneamente', meaning: 'Demonstra a capacidade de escalar análises, processando insights para mais de 500 cursos simultaneamente.' },
            { metric: 'Segurança e Custo', result: 'Integração Direta via API', meaning: 'A solução utiliza a chave de API do próprio usuário, garantindo segurança e eliminando custos de plugins de terceiros.' },
        ],
        narrative: (
            <>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Narrativa do Projeto: Construindo a Ponte Entre a IA e o Usuário de Negócio</h3>
                 <p className="mb-4"><strong className="text-slate-300">O Desafio Estratégico:</strong> Como capacitar uma equipe para usar a inteligência do GPT sem forçá-los a aprender novas plataformas complexas?</p>
                 <p className="mb-4"><strong className="text-slate-300">Minha Abordagem - Uma Solução Prática e Open Source:</strong> Levei a IA para onde as equipes já estavam.</p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                     <li><strong className="text-slate-400">Desenvolvimento da Ferramenta:</strong> Criei um script em Google Apps Script que integra a API da OpenAI diretamente ao Google Sheets.</li>
                     <li><strong className="text-slate-400">Funcionalidade Intuitiva:</strong> A ferramenta adiciona uma função simples (=GPT()) à planilha, permitindo construir prompts complexos que referenciam células.</li>
                     <li><strong className="text-slate-400">Aplicação em um Caso Real:</strong> Utilizei a ferramenta para gerar 4.500 raciocínios lógicos para mais de 500 cursos, economizando um mês de trabalho manual.</li>
                     <li><strong className="text-slate-400">Contribuição para a Comunidade:</strong> Disponibilizei o projeto como open source no GitHub.</li>
                </ul>
                <h4 className="text-xl font-semibold text-cyan-300 mb-2">Impacto e Relevância para o Negócio:</h4>
                <p>O projeto reduz a barreira técnica, é versátil para inúmeras aplicações e demonstra uma mentalidade de colaboração e empoderamento da comunidade, valores importantes para a cultura de inovação.</p>
            </>
        ),
        tools: ['Google Apps Script', 'OpenAI API', 'JavaScript', 'Google Sheets', 'Engenharia de Prompt'],
        links: [
            { label: 'Artigo no LinkedIn', url: 'https://www.linkedin.com/pulse/prompt-feature-engineer-o-poder-do-gpt-no-google-sheets-machado-1qixf/' },
            { label: 'Código no GitHub', url: 'https://github.com/Engenheiro-de-Prompt/Prompt-Feature-Engineer' }
        ],
    },
    {
        id: 13,
        slug: 'machine-learning-lms-netflix',
        title: 'Machine Learning para LMS Estilo Netflix',
        subtitle: 'O Primeiro Passo para a Hiper-Personalização com Machine Learning',
        category: 'Estudo de Caso',
        summary: 'Validação de um modelo de ML com 85% de precisão para segmentar usuários, provando a viabilidade da personalização e abrindo caminho para soluções mais avançadas.',
        roi: '85% de Precisão',
        businessImpact: 'Validou a tese de personalização, catalisando o investimento estratégico em uma plataforma própria.',
        keyTools: ['Python', 'Scikit-learn', 'ETL'],
        metrics: [
            { metric: 'Validação do Modelo', result: '85% de Precisão (Coeficiente de Silhueta)', meaning: 'Demonstração técnica da capacidade de segmentar usuários em clusters de interesse com alta coerência.' },
            { metric: 'Base para Inovação', result: 'Primeiro Modelo de Recomendação Personalizada', meaning: 'Foi o projeto fundamental que validou a tese de que a personalização era viável e desejável.' },
            { metric: 'Aprendizado Estratégico', result: 'Compreensão das Limitações do ML Clássico', meaning: 'Este projeto revelou o desafio do "cold start", o que levou à exploração e desenvolvimento da solução superior com IA Generativa.' },
        ],
        narrative: <p>Este projeto foi o catalisador para a decisão estratégica da Leve Educação de investir em uma plataforma proprietária, provando que a personalização era tecnicamente viável. A experiência com as limitações do ML clássico, como o "cold start", foi crucial para a posterior inovação com IA Generativa.</p>,
        tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebooks', 'TalentLMS API', 'ETL'],
        links: [{ label: 'Artigo no LinkedIn', url: 'https://www.linkedin.com/pulse/machine-learning-transformando-o-lms-em-uma-ao-estilo-gustavo-machado-vw0zf/' }],
    },
    {
        id: 14,
        slug: 'ferramentas-analise-investimentos',
        title: 'Análise de Investimentos',
        subtitle: 'Clareza em Meio à Complexidade: Automatizando a Análise de Investimentos em Criptomoedas',
        category: 'Projeto Pessoal',
        summary: 'Desenvolvimento de uma ferramenta em Python que se conecta à API da Binance para automatizar o cálculo de lucros, perdas e taxas em múltiplas moedas.',
        roi: 'Automação',
        businessImpact: 'Transforma dados financeiros complexos e opacos em insights claros e acionáveis para tomada de decisão.',
        keyTools: ['Python', 'Pandas', 'Binance API'],
        metrics: [
            { metric: 'Automação de Processos Complexos', result: 'Cálculo Automático de Lucros, Perdas e Taxas', meaning: 'Demonstra a habilidade de traduzir regras de negócio complexas em um sistema automatizado, eliminando erros humanos.' },
            { metric: 'Geração de Insights Acionáveis', result: 'Cálculo da "Cotação Mínima para Lucro"', meaning: 'A ferramenta gera insights preditivos, como o preço exato que um ativo precisa atingir para se tornar lucrativo.' },
            { metric: 'Integração com APIs de Terceiros', result: 'Conexão Direta com a API da Binance', meaning: 'Prova da capacidade de se integrar com sistemas externos para extrair dados em tempo real.' },
        ],
        narrative: <p>Este projeto pessoal demonstra a mentalidade de resolução de problemas: identificar uma dor, decompor a complexidade e construir uma solução automatizada e robusta que transforma dados opacos em informações claras e acionáveis.</p>,
        tools: ['Python', 'Pandas', 'Binance API', 'Análise Financeira'],
        links: [{ label: 'Artigo no LinkedIn', url: 'https://www.linkedin.com/pulse/analise-de-investimentos-com-ferramentas-gustavo-machado-69hbf/' }],
    },
    {
        id: 15,
        slug: 'finetune-2023',
        title: 'Finetune-2023',
        subtitle: 'Democratizando a IA Avançada: Simplificando o Fine-Tuning de Modelos para Todos',
        category: 'Projeto Open Source',
        summary: 'Criação de uma ferramenta open source que simplifica drasticamente o processo de preparação de dados para o fine-tuning de modelos da OpenAI.',
        roi: 'Democratização',
        businessImpact: 'Permite que pequenas empresas e desenvolvedores personalizem IA sem depender de especialistas caros.',
        keyTools: ['Python', 'GitHub', 'JSONL'],
        metrics: [
            { metric: 'Redução da Barreira Técnica', result: 'Processo de Preparação de Dados Simplificado', meaning: 'Transforma uma tarefa técnica em um processo simples de preencher uma planilha e executar um comando.' },
            { metric: 'Empoderamento e Inovação', result: 'Democratização do Acesso à Personalização de IA', meaning: 'Permite que não-especialistas personalizem modelos de IA para suas necessidades específicas.' },
            { metric: 'Adaptação e Relevância', result: 'Resposta à Evolução da Tecnologia', meaning: 'Demonstra agilidade para entender novas tecnologias e criar ferramentas que preencham as lacunas do ecossistema.' },
        ],
        narrative: <p>O projeto reflete uma filosofia de trabalho que busca não apenas usar a tecnologia, mas torná-la acessível. Ao simplificar um processo complexo, capacita outros a inovar, demonstrando uma mentalidade de produto e contribuição para a comunidade.</p>,
        tools: ['Python', 'GitHub', 'Fine-Tuning de LLMs', 'Processamento de Dados'],
        links: [{ label: 'Código no GitHub', url: 'https://github.com/Engenheiro-de-Prompt/Finetune-2023' }],
    },
    {
        id: 16,
        slug: 'benchmarking-eag',
        title: 'Benchmarking EAG',
        subtitle: 'Desenvolvendo uma Metodologia de Benchmarking para Avaliação de IA',
        category: 'Projeto de Pesquisa',
        summary: 'Criação de um framework para comparar soluções de IA de forma justa e objetiva, aplicado em um estudo de caso competitivo analisando a Alura.',
        roi: 'Metodologia',
        businessImpact: 'Permite tomada de decisão baseada em dados para justificar investimentos em P&D de IA.',
        keyTools: ['Python', 'BeautifulSoup', 'Web Scraping'],
        metrics: [
            { metric: 'Avaliação Objetiva', result: 'Metodologia de Benchmarking Abrangente', meaning: 'Criação de um framework para comparar soluções de IA de forma justa e objetiva, indo além de métricas superficiais.' },
            { metric: 'Tomada de Decisão Baseada em Dados', result: 'Estabelecimento de Padrões de Avaliação', meaning: 'Permite que uma empresa avalie se uma nova tecnologia é realmente melhor que a anterior, com base em dados.' },
            { metric: 'Inteligência Competitiva', result: 'Análise Comparativa com Líderes de Mercado', meaning: 'Aplicação da metodologia para extrair insights sobre estratégias e tendências de mercado a partir de dados abertos.' },
        ],
        narrative: <p>Este projeto demonstra a competência de definir o que é "sucesso" e medi-lo objetivamente. A metodologia é um exemplo de como usar dados abertos para gerar inteligência de mercado para um cliente, ajudando-o a se posicionar estrategicamente.</p>,
        tools: ['Python', 'Jupyter Notebook', 'BeautifulSoup', 'Requests', 'Pandas', 'Web Scraping'],
        links: [{ label: 'Artigo no LinkedIn', url: 'https://www.linkedin.com/pulse/benchmarking-gustavo-machado-kkw3f/' }],
    },
    {
        id: 17,
        slug: 'analise-comentarios-youtube',
        title: 'Análise de Comentários do YouTube',
        subtitle: 'A Voz do Cliente em Escala: Transformando Comentários do YouTube em Inteligência de Negócio',
        category: 'Projeto Open Source',
        summary: 'Ferramenta em Python que extrai e analisa comentários do YouTube, transformando dados não estruturados em insights de negócio sobre sentimento, tendências e feedback de produtos.',
        roi: 'Análise de Dados',
        businessImpact: 'Transforma feedback de clientes em inteligência para marketing, P&D e melhoria de produto.',
        keyTools: ['Python', 'YouTube API', 'NLP'],
        metrics: [
            { metric: 'Análise de Dados Não Estruturados', result: 'Extração e Análise de Sentimentos Automatizada', meaning: 'Transforma milhares de comentários em um dashboard organizado de sentimentos (positivo, neutro, negativo).' },
            { metric: 'Geração de Insights Acionáveis', result: 'Identificação de Tendências e Lacunas Didáticas', meaning: 'Identifica temas recorrentes e perguntas frequentes, gerando inteligência para marketing, P&D e suporte.' },
            { metric: 'Flexibilidade e Escalabilidade', result: 'Ferramenta Adaptável com Integração Opcional de IA', meaning: 'Pode ser usada para simples extração ou integrada com OpenAI para interpretação semântica avançada.' },
        ],
        narrative: <p>Uma ferramenta de escuta ativa que automatiza a análise da "voz do cliente". Em uma aplicação real, identificou rapidamente informações desatualizadas e erros em um curso, permitindo correções rápidas e melhorando a qualidade do produto.</p>,
        tools: ['Python', 'Pandas', 'YouTube API', 'OpenAI API', 'NLP'],
        links: [{ label: 'Código no GitHub', url: 'https://github.com/Engenheiro-de-Prompt/Analise-de-coment-rios-do-Youtube' }],
    },
    {
        id: 18,
        slug: 'automacao-vendas-spin',
        title: 'Automação de Vendas com Método SPIN',
        subtitle: 'Aja como um Vendedor: Automatizando o Método SPIN com IA Conversacional',
        category: 'Estudo de Caso',
        summary: 'Criação de uma solução inovadora que combina ManyChat e ChatGPT para aplicar o método de vendas SPIN, qualificando leads em escala 24/7.',
        roi: 'Inovação em Vendas',
        businessImpact: 'Qualifica leads em escala 24/7, liberando a equipe de vendas humana para focar no fechamento de negócios.',
        keyTools: ['ManyChat', 'OpenAI API', 'SPIN Selling'],
        metrics: [
            { metric: 'Automação de Processos Complexos', result: 'Aplicação Automatizada do Método SPIN', meaning: 'Prova que metodologias de vendas sofisticadas podem ser traduzidas em um fluxo de IA, mantendo a qualidade do engajamento.' },
            { metric: 'Escalabilidade Inteligente', result: 'Qualificação e Engajamento de Clientes 24/7', meaning: 'Libera a equipe de vendas para focar em fechar negócios, enquanto a IA qualifica os leads iniciais.' },
            { metric: 'Inovação em Vendas', result: 'Integração Nativa de ManyChat + ChatGPT', meaning: 'Estabelece um novo paradigma para a automação de vendas, combinando automação de fluxo com inteligência conversacional.' },
        ],
        narrative: <p>Este projeto prova que a automação de vendas pode ir muito além de simples respostas programadas. É possível automatizar a inteligência e a estratégia por trás de uma conversa de vendas eficaz, funcionando como um "pré-vendedor" incansável.</p>,
        tools: ['ManyChat', 'OpenAI API (ChatGPT)', 'Método SPIN', 'Engenharia de Prompt Conversacional'],
        links: [{ label: 'Artigo no LinkedIn', url: 'https://www.linkedin.com/pulse/aja-como-um-vendedor-gustavo-machado-jzt6f/' }],
    },
];
