/* Design Philosophy: Organic Data Visualization
   Deep navy to purple gradients, flowing forms, mesh backgrounds
   Typography: Plus Jakarta Sans (headings), Inter (body), Outfit (accent numbers) */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProjectModal from "@/components/ProjectModal";
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
  ChevronDown
} from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    pdfUrl?: string;
    colabUrl?: string;
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

  const webScrapingDescription = `Web Scraping Dinâmico com Playwright

Extração de dados dinâmicos em ambientes headless com setup completo de infraestrutura.

Componentes do Projeto:

🌐 Automação com Playwright:
• Navegação em sites com JavaScript renderizado
• Tratamento de elementos dinâmicos e lazy loading
• Captura de dados em tempo real
• Gestão de sessões e cookies

🗄️ Infraestrutura Completa:
• Configuração de ambiente headless (Docker)
• Escalabilidade com múltiplas instâncias
• Armazenamento de dados estruturado
• Logs e monitoramento de execução

📊 Processamento de Dados:
• Limpeza e normalização de dados extraídos
• Validação de qualidade
• Integração com data warehouse
• Agendamento de execuções periódicas`;

  const apiFlaskDescription = `API Preditiva — Flask + React

Backend em Flask com endpoints estruturados e frontend em React com consumo assíncrono.

Componentes do Projeto:

🔌 Backend em Flask:
• Arquitetura RESTful com blueprints modulares
• Endpoints para treinamento e predição de modelos
• Autenticação e autorização com JWT
• Documentação automática com Swagger

⚛️ Frontend em React:
• Interface responsiva para input de dados
• Visualização de resultados em tempo real
• Gráficos interativos com Plotly
• Tratamento de erros e feedback ao usuário

🔄 Integração Completa:
• Consumo assíncrono de APIs com axios
• Caching de resultados
• Tratamento de estados de carregamento
• Deploy containerizado com Docker Compose`;

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
            backgroundImage: 'url(/images/hero-abstract.png)',
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

            {/* Decorative Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 border-2 border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-16 border-2 border-pink-500/20 rotate-45 animate-spin-slow" style={{ animationDuration: '25s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-xl flex items-center justify-center text-6xl font-bold">
                    J
                  </div>
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
                className="text-7xl md:text-8xl font-bold text-lime-400 mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                10+
              </div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Anos de Experiência
              </p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Atuo na interseção entre <span className="text-foreground font-semibold">dados, tecnologia e negócio</span> com foco em Marketing Digital, estruturando sistemas técnicos e estratégicos que transformam informação em{" "}
                <span className="text-lime-400 font-semibold">vantagem competitiva</span>.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Este profissional lê sistemas complexos, identifica pontos de alavancagem e transforma dados em decisões estratégicas."
              </blockquote>
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
            {/* Project 1 */}
            <button
              onClick={() => setSelectedProject({
                title: "Previsão de Revenue",
                description: marketing9Description,
                colabUrl: "/assets/marketing9.ipynb"
              })}
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
                title: "Web Scraping Dinâmico com Playwright",
                description: webScrapingDescription
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-yellow-500/30 hover:border-yellow-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full mb-3">
                    <Database className="h-3 w-3" />
                    Data Engineering
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Web Scraping Dinâmico com Playwright
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Extração de dados dinâmicos em ambientes headless com setup completo de infraestrutura.
                  </p>
                </div>
              </Card>
            </button>

            {/* Project 3 */}
            <button
              onClick={() => setSelectedProject({
                title: "API Preditiva — Flask + React",
                description: apiFlaskDescription
              })}
              className="text-left transition-all hover:scale-105"
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 transition-all group h-full cursor-pointer">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full mb-3">
                    <Code className="h-3 w-3" />
                    Full Stack Development
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    API Preditiva — Flask + React
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Backend em Flask com endpoints estruturados e frontend em React com consumo assíncrono.
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
                description: barbeariDescription
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
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold">contato@exemplo.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-semibold">/in/seu-perfil</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                  <p className="font-semibold">github.com/seu-usuario</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-lime-500/30 hover:border-lime-500/60 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Website</p>
                  <p className="font-semibold">seu-site.com</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl border-2 border-lime-400/50 hover:border-lime-400 transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar mensagem
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              J.
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
        />
      )}
    </div>
  );
}
