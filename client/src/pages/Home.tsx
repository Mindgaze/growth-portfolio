/* Design Philosophy: Organic Data Visualization
   Deep navy to purple gradients, flowing forms, mesh backgrounds
   Typography: Plus Jakarta Sans (headings), Inter (body), Outfit (accent numbers) */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProjectModal from "@/components/ProjectModal";
import { gtmEvents } from "@/lib/gtmEvents";
import { 
  Brain, 
  Cog, 
  TrendingUp, 
  Target,
  BarChart3,
  Database,
  Code,
  Lightbulb,
  Rocket,
  Wrench,
  Mail,
  Linkedin,
  Github,
  Globe,
  ChevronDown,
  MessageCircle
} from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    pdfUrl?: string;
    colabUrl?: string;
    websiteUrl?: string;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const p1HubDescription = `Planeamento Estratégico e Copywriting: Setor Médico

Desenvolvimento de uma estratégia completa de lançamento para um curso especializado em diagnóstico de tireoide, focado em médicos generalistas.

Componentes do Projeto:

📋 Arquitetura de Conversão (LP):
Estruturação de uma Landing Page utilizando gatilhos de autoridade, escassez e prova social, desenhada para converter um público com "pouca consciência" da marca.

✍️ Copywriting de Alta Performance:
Escrita persuasiva focada na "dor" da insegurança diagnóstica e na "solução" da praticidade clínica.

📊 Estratégia de Tráfego Pago (Meta Ads):
• Planeamento de campanhas segmentadas por interesses médicos e comportamento
• Utilização de públicos Advantage+ e estratégias de retargeting para diminuir o custo por aquisição (CPA)
• Cronograma de investimento (75% Topo de Funil / 25% Meio de Funil) para construção de audiência`;

  const marketing9Description = `Modelo de Previsão de Revenue

Marketing Revenue Predictor - Production ML System

Pipeline completo de Machine Learning para predição de receita em campanhas de marketing, com API REST e deploy público.

🔄 Machine Learning
• RandomForestRegressor com hyperparameter tuning (GridSearchCV)
• Feature engineering automático para variáveis temporais
• Pipeline scikit-learn serializado (.pkl) pronto para produção

🚀 API & Deploy
• API REST Flask com endpoint /predict
• Deploy público via ngrok com túnel HTTPS
• Validação de entrada e error handling robusto

📊 Tech Stack
scikit-learn | Flask | pandas | joblib | ngrok

🌟 Resultado
Sistema production-ready que permite predições de receita via HTTP request, democratizando acesso a ML para stakeholders não-técnicos.

Modelo Performance: R² 0.87 | MAE R$ 1.243 | Cross-validation estável

Pipeline completo: Data → Preprocessing → Feature Engineering → Training → Serialization → API → Public Deployment`;

  const webScrapingDescription = `Web Scraping Dinâmico e Relatórios com IA

Arquitetura Unificada (Market Intelligence Pro - Unified): Um sistema robusto que integra automação de navegador e análise de dados em um único fluxo.

🌐 Web Scraping Dinâmico:
• Utiliza Playwright para navegar em sites complexos (SPAs, React, Vue)
• Supera as limitações de scrapers tradicionais que não executam JavaScript
• Tratamento de elementos dinâmicos, lazy loading e sessões
• Captura de dados em tempo real com gestão de cookies

🤖 Processamento de Linguagem Natural (LLM):
• Sistema preparado para enviar conteúdo extraído para modelos de IA
• Filtram o ruído e extraem apenas informações relevantes para o negócio
• Identificação automática de preços, diferenciais e propostas de valor
• Análise de inteligência competitiva em tempo real

🚀 API Flask de Baixa Latência:
• Endpoint /scrape: Recebe a URL do protótipo Lovable e inicia a extração
• Endpoint /health: Monitoramento constante para garantir que o serviço está online
• Pronto para processar requisições em escala
• Tratamento robusto de erros e retry automático

📄 Exportação Documental:
• Integração com biblioteca python-docx
• Geração de relatórios profissionais automaticamente após análise
• Formatação automática com gráficos e tabelas
• Export em múltiplos formatos (DOCX, PDF)`;

  const apiFlaskDescription = `Market Intelligence Pro: Ecossistema Inteligente de BI

O Market Intelligence Pro eh uma plataforma de analise avancada que transforma dados brutos em ativos estrategicos. Hospedado no Google Cloud, o sistema integra modelos de Machine Learning para previsao financeira e o poder do LLM Gemini para gerar insights de negocio em tempo real.

1. Data Lab: Gestao Inteligente de Dados
O coracao operacional do projeto eh o Data Lab, um ambiente projetado para centralizar e organizar o fluxo de informacoes.
- Update Dinamico: Interface intuitiva para upload de datasets (CSV/Excel) diretamente para a nuvem
- Ecossistema Google: Integracao nativa com Google Drive para armazenamento seguro e Google Colab para experimentacao agil

2. Dashboards: Visualizacao Estrategica
A aplicacao converte numeros complexos em interfaces visuais claras atraves do prototipo desenvolvido em Lovable (React).
- Metricas em Tempo Real: Monitoramento de KPIs criticos como Custo de Aquisicao (CAC), ROI e volume de Leads

3. Preditor de Receita: O Futuro Baseado em Dados
Diferente de relatorios comuns que olham para o passado, este sistema utiliza Machine Learning para prever o futuro usando o Algoritmo Random Forest.
- Simulador de Cenarios: Permite que o stakeholder ajuste variaveis para visualizar o impacto projetado na receita

4. IA Generativa (LLM Gemini): De Dados a Insights
A inteligencia do projeto eh potencializada pelo Google Gemini, que atua como um consultor de negocios virtual.
- Analise Automatizada: A IA le as tabelas de dados e redige explicacoes em linguagem natural
- Extracao de Insights: O sistema identifica gargalos operacionais e sugere acoes corretivas
- Relatorios Executivos: Geracao de resumos visando obter insights valiosos

Tech Stack: Google Cloud, Flask, React, Random Forest, Google Gemini LLM, Google Drive, Google Colab`;

  const frameworkDescription = `Framework Estratégico para Consultoria Cloud

Objetivo: Posicionar a consultoria como um parceiro estratégico indispensável, indo além da simples revenda de infraestrutura.

Componentes do Projeto:

🔍 Diagnóstico de Mercado:
• Análise do crescimento do setor de Cloud no Brasil
• Identificação de lacunas de atendimento nos grandes players
• Mapeamento de oportunidades de diferenciação
• Análise de concorrência e posicionamento

📊 Matriz de Diferenciação:
• Atendimento Humanizado vs. Automatização dos Gigantes
• Customização vs. Padronização
• Suporte especializado vs. Autoatendimento
• Consultoria estratégica vs. Venda transacional

🎯 Estratégia de Posicionamento:
• Desenvolvimento de proposta de valor única
• Definição de buyer personas
• Criação de messaging framework
• Plano de go-to-market`;

  const churnDescription = `Análise e Predição de Churn

Sistema completo de Machine Learning para identificar e prever clientes com risco de churn, permitindo ações preventivas estratégicas.

🎯 Objetivo:
Reduzir a taxa de churn através de identificação precoce de clientes em risco e implementação de estratégias de retenção personalizadas.

📊 Componentes:
• Análise exploratória de dados (EDA) para identificar padrões de comportamento
• Feature engineering com variáveis comportamentais e demográficas
• Modelos de classificação (Logistic Regression, Random Forest, Gradient Boosting)
• Avaliação de performance com métricas de negócio (Recall, Precision, AUC-ROC)
• Interpretabilidade de modelos com SHAP values

🔧 Tech Stack:
Python | scikit-learn | pandas | matplotlib | seaborn | Jupyter Notebook

💡 Resultado:
Modelo preditivo que identifica clientes em risco com 85% de acurácia, permitindo ações de retenção direcionadas e aumento de customer lifetime value.`;

  const barbeariDescription = `Landing Page — Barbearia Dom Pafa

Landing page criada em menos de 8 horas para campanha sazonal com foco em conversão mobile.

Componentes do Projeto:

⚡ Desenvolvimento Ágil:
• Design responsivo mobile-first
• Implementação em HTML/CSS/JavaScript vanilla
• Otimização de performance (< 2s load time)
• SEO básico e meta tags

📱 Otimização para Conversão:
• CTA estrategicamente posicionados
• Formulário de agendamento integrado
• Galeria de serviços com imagens otimizadas
• Depoimentos e avaliações sociais

🎨 Design & UX:
• Layout limpo e profissional
• Paleta de cores alinhada com marca
• Tipografia legível e hierarquizada
• Animações sutis para engajamento`;

  const timesfmDescription = `TimesFM 2.5: Forecasting de Séries Temporais com Foundation Models

Experimento prático: Previsão de métricas do LinkedIn (impressões, engajamento, novos seguidores) usando TimesFM 2.5 — foundation model de séries temporais open-source do Google Research (200M parâmetros, zero-shot).

🎯 O Desafio Real:
Dados brutos do LinkedIn Analytics (XLSX) com todo o ruído operacional: dias sem publicação, spikes de viralização, distribuição algorítmica imprevisível, comportamento altamente não-linear. Nenhum dataset acadêmico limpo — o cenário mais próximo da realidade que um profissional de growth encontra.

🧠 Por que TimesFM muda o jogo:
Modelos clássicos (ARIMA, Prophet, SARIMA) precisam ser treinados série a série. TimesFM foi pré-treinado em bilhões de pontos de séries temporais reais e sintéticas, funcionando como um LLM de séries temporais. Resultado: previsões zero-shot sem fine-tuning.

⚠️ O Problema Real: Esparsidade e Não-Estacionaridade
Em dias sem publicação, engajamento vai a zero. Novos seguidores chegam em pulsos irregulares. Um único post viral gera spike de 5-10x. Conclusão: para séries com 40-70% de zeros estruturais, forecasting diário perde poder preditivo operacional.

📊 O que foi gerado:
• Previsões para 30 dias com intervalos de confiança (IC 80% e IC 40%)
• Backtesting formal com métricas: MAE, RMSE, SMAPE
• Interpretação com Gemini: transformando forecasting técnico em análise automatizada com recomendações

🔗 Stack: TimesFM 2.5 | Google Colab | Gemini API | Pandas | Matplotlib`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663319433617/SW6ZkUhrbVCS84SVhu4NKj/hero-abstract_913950b3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 gradient-mesh opacity-60" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p 
                className="text-sm md:text-base text-muted-foreground tracking-wide uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Data Science • Growth • Strategy
              </p>
              
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Analista de Dados &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                  Estrategista de Growth
                </span>
              </h1>

              <p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Transformo dados, tecnologia e estratégia em decisões que geram{" "}
                <span className="text-lime-400 font-semibold">impacto real</span>
              </p>

              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("sobre")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl transition-all hover:scale-105"
                >
                  Sobre mim
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 border-2 border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-16 border-2 border-pink-500/20 rotate-45 animate-spin-slow" style={{ animationDuration: '25s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/images/filipe-profile.png" 
                    alt="Filipe Rodrigues" 
                    className="w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-primary/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-flow opacity-20" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sobre <span className="text-primary">mim</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <div 
                className="text-5xl md:text-6xl font-bold text-lime-400 mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Growth Marketing +<br />Ciência de Dados
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                = Crescimento Escalável
              </p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="text-foreground font-semibold">Especialista em Growth Marketing e IA</span> que transforma dados em decisões estratégicas e decisões em crescimento mensurável.
              </p>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <span className="text-lime-400 font-semibold">Na prática:</span> Gerencio portfólios de tráfego pago (180+ contas Meta Ads, R$10k+/mês), desenvolvo sistemas de machine learning em produção, e construo automações que eliminam gargalos e maximizam ROI.
                </p>
                
                <p className="leading-relaxed">
                  <span className="text-lime-400 font-semibold">Stack técnico:</span> Python, SQL, scikit-learn, TensorFlow, Flask, Playwright, sentence-transformers, Meta Ads Platform. Certificado Meta Digital Marketing Associate. Pós-graduado em Ciência de Dados e IA.
                </p>
                
                <p className="leading-relaxed">
                  <span className="text-lime-400 font-semibold">Meu diferencial:</span> Combino mentalidade estratégica de marketing com rigor técnico de engenharia de dados. Entrego sistemas funcionais, não apenas relatórios. Foco em KPIs que importam: ROI, conversão, crescimento sustentável.
                </p>
                
                <p className="leading-relaxed italic border-l-4 border-primary pl-4">
                  Pronto para colaborar em projetos que exigem visão de negócio e execução técnica de alto nível.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/assets/CV_Filipe_Rodrigues.pdf" target="_blank" rel="noopener noreferrer" onClick={() => gtmEvents.curriculumViewed()}>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl border-2 border-lime-400/50 hover:border-lime-400 transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    Visualizar Currículo
                  </Button>
                </a>
                <a href="/assets/CV_Filipe_Rodrigues.pdf" download onClick={() => gtmEvents.curriculumDownloaded()}>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-base rounded-xl border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Baixar PDF
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Competências <span className="text-lime-400">Técnicas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Data Science & ML */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Ciência de Dados & Machine Learning
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Pipelines", "Custom Transformers", "Feature Engineering", "Model Evaluation"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Data Engineering */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Engenharia de Dados & Automação
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Playwright", "Web Scraping", "Shell Script", "Cloud Environments"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Growth & Marketing */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Growth & Marketing Analytics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Meta Ads", "KPIs", "Funis", "Retargeting"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Strategy */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Estratégia & Planeamento
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Diagnóstico", "Diferenciação", "Frameworks", "Posicionamento"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Projetos <span className="text-primary">Desenvolvidos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção de projetos que demonstram a integração entre dados, tecnologia e estratégia de negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project 1 - TimesFM (moved to top) */}
            <button
              onClick={() => {
                gtmEvents.projectClicked("TimesFM LinkedIn Analytics", "Time Series Forecasting & AI");
                setSelectedProject({
                  title: "TimesFM LinkedIn Analytics",
                  description: timesfmDescription,
                  websiteUrl: "https://colab.research.google.com/drive/1A5B0t-GA4GWS2Ms9n98QJ5QrG82fZ2vG#scrollTo=NrPTQsDEa2vW"
                });
              }}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-orange-500/30 hover:border-orange-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full mb-3">
                    <TrendingUp className="h-3 w-3" />
                    Time Series Forecasting & AI
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    TimesFM LinkedIn Analytics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Foundation model de séries temporais para predição zero-shot de métricas do LinkedIn com Gemini.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 2 - Previsão de Revenue */}
            <button
              onClick={() => {
                gtmEvents.projectClicked("Previsão de Revenue", "Data Science & Machine Learning");
                setSelectedProject({
                  title: "Previsão de Revenue",
                  description: marketing9Description,
                  colabUrl: "/assets/marketing9.ipynb"
                });
              }}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full mb-3">
                    <BarChart3 className="h-3 w-3" />
                    Data Science & Machine Learning
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Previsão de Revenue
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pipeline completo de ML com boas práticas, custom transformer e otimização de modelos.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 2 */}
            <button
              onClick={() => setSelectedProject({
                title: "Web Scraping Dinâmico e Relatórios com IA",
                description: webScrapingDescription,
                colabUrl: "/assets/Marketing_Inteligence2.ipynb",
                websiteUrl: "https://webscrapingreport.lovable.app"
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full mb-3">
                    <Database className="h-3 w-3" />
                    Data Engineering & AI
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Web Scraping Dinâmico e Relatórios com IA
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Arquitetura unificada com Playwright, LLM e API Flask para inteligência competitiva automatizada.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 3 */}
            <button
              onClick={() => setSelectedProject({
                title: "Market Intelligence Pro: Ecossistema Inteligente de BI",
                description: apiFlaskDescription,
                websiteUrl: "https://market-intelligence-pro-611316859676.us-west1.run.app/"
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full mb-3">
                    <Code className="h-3 w-3" />
                    Business Intelligence & AI
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Market Intelligence Pro: Ecossistema Inteligente de BI
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Plataforma de análise avançada com ML, Google Gemini e dashboards em tempo real hospedada no Google Cloud.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 4 */}
            <button
              onClick={() => setSelectedProject({
                title: "Framework Estratégico para Consultoria Cloud",
                description: frameworkDescription,
                pdfUrl: "/assets/framework-cloud.pdf"
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-lime-500/50 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 text-lime-400 text-xs rounded-full mb-3">
                    <Lightbulb className="h-3 w-3" />
                    Business Strategy
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Framework Estratégico para Consultoria Cloud
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Framework completo de diferenciação competitiva para consultoria de TI.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 5 */}
            <button
              onClick={() => setSelectedProject({
                title: "Lançamento de Curso Médico — P1 HUB",
                description: p1HubDescription,
                pdfUrl: "/assets/p1hub-estrategia.pdf"
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-pink-500/50 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full mb-3">
                    <Rocket className="h-3 w-3" />
                    Marketing Strategy
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Lançamento de Curso Médico — P1 HUB
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Planeamento Estratégico e Copywriting: Setor Médico. Estratégia completa de lançamento com arquitetura de conversão, copywriting de alta performance e tráfego pago segmentado.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 6 */}
            <button
              onClick={() => setSelectedProject({
                title: "Landing Page — Barbearia Dom Pafa",
                description: barbeariDescription,
                websiteUrl: "https://novembro-azul-barber.lovable.app"
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-lime-500/50 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 text-lime-400 text-xs rounded-full mb-3">
                    <Wrench className="h-3 w-3" />
                    Agile Execution & UX
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Landing Page — Barbearia Dom Pafa
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Landing page criada em menos de 8 horas para campanha sazonal com foco em conversão mobile.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 7 - Churn */}
            <button
              onClick={() => {
                gtmEvents.projectClicked("Análise e Predição de Churn", "Predictive Analytics");
                setSelectedProject({
                  title: "Análise e Predição de Churn",
                  description: churnDescription,
                  colabUrl: "/assets/Chrun3.ipynb"
                });
              }}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-indigo-500/30 hover:border-indigo-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full mb-3">
                    <Brain className="h-3 w-3" />
                    Predictive Analytics
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Análise e Predição de Churn
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sistema ML para identificar clientes em risco com 85% de acurácia e estratégias de retenção.
                  </p>
                </div>
              </Card>
            </button>


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Vamos <span className="text-lime-400">conversar</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interessado em trabalhar juntos ou discutir oportunidades? Entre em contato através dos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <a href="mailto:rodriguesfilipe6108@gmail.com" className="block" onClick={() => gtmEvents.emailClicked()}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all cursor-pointer hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold">rodriguesfilipe6108@gmail.com</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="https://www.linkedin.com/in/filipe-rodrigues-24678317a/" target="_blank" rel="noopener noreferrer" className="block" onClick={() => gtmEvents.linkedinClicked()}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all cursor-pointer hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="font-semibold">filipe-rodrigues-24678317a</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="https://github.com/Mindgaze" target="_blank" rel="noopener noreferrer" className="block" onClick={() => gtmEvents.githubClicked()}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all cursor-pointer hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                    <p className="font-semibold">Mindgaze</p>
                  </div>
                </div>
              </Card>
            </a>

            <a href="https://wa.me/5511986339285" target="_blank" rel="noopener noreferrer" className="block" onClick={() => gtmEvents.whatsappClicked()}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all cursor-pointer hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <p className="font-semibold">+55 11 98633-9285</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:rodriguesfilipe6108@gmail.com" onClick={() => gtmEvents.emailClicked()}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl border-2 border-lime-400/50 hover:border-lime-400 transition-all hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar mensagem
              </Button>
            </a>
            <a href="https://wa.me/5511986339285" target="_blank" rel="noopener noreferrer" onClick={() => gtmEvents.whatsappClicked()}>
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base rounded-xl border-2 border-green-400/50 hover:border-green-400 transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Filipe Rodrigues
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 • Desenvolvido com estratégia e precisão
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          pdfUrl={selectedProject.pdfUrl}
          colabUrl={selectedProject.colabUrl}
          websiteUrl={selectedProject.websiteUrl}
        />
      )}
    </div>
  );
}
