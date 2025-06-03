import { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Award, TrendingUp, Users, Target, Palette, Code, Download, Eye, Globe, Settings, Instagram, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CVViewer from '@/components/CVViewer';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showCV, setShowCV] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const experiences = [
    {
      company: "Bigpel",
      period: "Maio 2023 - Presente",
      role: "Gestão de Marketing - Gestor de Tráfego",
      achievements: [
        "Crescimento expressivo tornando-se referência nacional em sacolas para confeitaria no Brasil",
        "Mais de 100 mil vendas médias mensais",
        "Gestão completa de e-commerce e campanhas publicitárias",
        "Criação de aplicações SaaS e implementação de IA em marketing"
      ]
    },
    {
      company: "Kizzol Comercial Ltda",
      period: "Junho 2022 - Maio 2025",
      role: "Designer de Embalagens e Designer Gráfico Digital",
      achievements: [
        "Coordenação de embalagens para produtos de alto padrão",
        "Gerenciamento de lojas digitais e criação de layouts",
        "Produção de vídeos promocionais e institucionais",
        "Fotografia e tratamento de produtos"
      ]
    },
    {
      company: "Preent Scree",
      period: "Junho 2015 - Julho 2020",
      role: "Designer Gráfico",
      achievements: [
        "Desenvolvimento de layouts para tampografia",
        "Produção de material gráfico para impressão",
        "Desenvolvimento de campanhas de vendas",
        "Visual merchandising e comunicação interna"
      ]
    }
  ];

  const projects = [
    {
      title: "Site E-commerce Bigpel",
      description: "E-commerce completo para líder nacional em sacolas para confeitaria com mais de 100 mil vendas mensais",
      image: "/lovable-uploads/9f05ccfa-c36d-4e93-804c-e7bc22503f38.png",
      tags: ["E-commerce", "Gestão de Tráfego", "Growth Marketing"],
      link: "https://bigpel.com/"
    },
    {
      title: "XT Box - E-commerce Produtos Decorativos",
      description: "Loja online especializada em produtos decorativos e iluminação com sistema de avaliações",
      image: "/lovable-uploads/ab0461d9-94db-44dc-a208-df677b9b2a2c.png",
      tags: ["E-commerce", "Design UI/UX", "Marketing Digital"],
      link: "https://shopee.com.br/xt_box?entryPoint=ShopBySearch&searchKeyword=xtbox"
    },
    {
      title: "CT Box - Iluminação Especializada",
      description: "E-commerce focado em iluminação decorativa e produtos LED com alto volume de vendas",
      image: "/lovable-uploads/e402083f-d5cf-42d4-88d0-5a9366b7b232.png",
      tags: ["E-commerce", "Iluminação", "Conversão"],
      link: "https://shopee.com.br/ct_box?entryPoint=ShopBySearch&searchKeyword=ct%20box"
    },
    {
      title: "EVTec Store - Tecnologia LED",
      description: "Loja especializada em produtos tecnológicos e soluções LED para diversos segmentos",
      image: "/lovable-uploads/b9fdcfac-b8e0-42f8-9a5c-a80f976a32a3.png",
      tags: ["E-commerce", "Tecnologia", "LED"],
      link: "https://shopee.com.br/evtecstore?entryPoint=ShopBySearch&searchKeyword=evtec%20store&is_from_signup=true"
    }
  ];

  const skills = [
    { category: "Marketing Digital", items: ["Gestor de Tráfego", "Growth Marketing", "SEO", "E-commerce", "Funil de Vendas"] },
    { category: "Design", items: ["Design Gráfico", "Design de Embalagem", "Ilustração Digital", "Motion Graphics"] },
    { category: "Tecnologia", items: ["HTML5", "C++", "Inteligência Artificial", "SaaS", "Automações"] },
    { category: "Criação", items: ["Edição de Vídeos", "Animação", "3D Modeling", "Fotografia"] }
  ];

  const socialMediaLinks = [
    { name: "Bigpel Fábrica", url: "https://www.instagram.com/bigpel_fabrica/", description: "Perfil oficial da fábrica de embalagens" },
    { name: "Adriano Pereira Oficial", url: "https://www.instagram.com/adrianopereira_oficial/", description: "Perfil pessoal e profissional" },
    { name: "EVTec Store", url: "https://www.instagram.com/evtecstore/", description: "Produtos tecnológicos e LED" },
    { name: "Cont.com Contabilidade", url: "https://www.instagram.com/contcomcontabilidade/", description: "Serviços contábeis especializados" }
  ];

  const socialMediaGrowth = [
    {
      title: "Bigpel Fábrica - Crescimento Exponencial",
      description: "Transformação de uma pequena fábrica em referência nacional com milhares de seguidores",
      image: "/lovable-uploads/9f05ccfa-c36d-4e93-804c-e7bc22503f38.png",
      metrics: "+500% seguidores",
      period: "12 meses"
    },
    {
      title: "EVTec Store - Engajamento Premium",
      description: "Estratégia focada em produtos tecnológicos com alta conversão",
      image: "/lovable-uploads/b9fdcfac-b8e0-42f8-9a5c-a80f976a32a3.png",
      metrics: "+300% engajamento",
      period: "8 meses"
    },
    {
      title: "XT Box - Crescimento em Decoração",
      description: "Posicionamento como referência em produtos decorativos e iluminação",
      image: "/lovable-uploads/ab0461d9-94db-44dc-a208-df677b9b2a2c.png",
      metrics: "+200% leads qualificados",
      period: "6 meses"
    },
    {
      title: "CT Box - Autoridade em Iluminação",
      description: "Construção de marca especializada em soluções LED premium",
      image: "/lovable-uploads/e402083f-d5cf-42d4-88d0-5a9366b7b232.png",
      metrics: "+400% alcance",
      period: "10 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Everton Duque</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              <a href="#experience" className="text-white/80 hover:text-white transition-colors">Experiência</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projetos</a>
              <a href="#cv" className="text-white/80 hover:text-white transition-colors">Currículo</a>
              <a href="#growth" className="text-white/80 hover:text-white transition-colors">Crescimento</a>
              <a href="#social" className="text-white/80 hover:text-white transition-colors">Redes Sociais</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowAdmin(true)}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Everton <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Duque</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Gestor de Tráfego & Designer Digital
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Especialista em Growth Marketing com mais de 10 anos de experiência. 
              Responsável por campanhas que geram mais de 100 mil vendas mensais e 
              criação de soluções SaaS inovadoras com IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
                onClick={() => setShowCV(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Currículo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideIn">
              <h3 className="text-2xl font-semibold text-white mb-6">Profissional Multidisciplinar</h3>
              <p className="text-gray-300 mb-6">
                Com 41 anos e ampla experiência em marketing digital e design, atuo como Gestor de Tráfego 
                especializado em Growth Marketing. Minha expertise combina conhecimentos técnicos avançados 
                com visão estratégica para resultados excepcionais.
              </p>
              <p className="text-gray-300 mb-6">
                Atualmente cursando Pós-graduação em Inteligência Artificial Aplicada ao Growth Marketing, 
                sempre buscando inovação e resultados mensuráveis para meus clientes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-400/30">Lisboa, Portugal</Badge>
                <Badge className="bg-purple-600/20 text-purple-400 border-purple-400/30">Home Office</Badge>
                <Badge className="bg-green-600/20 text-green-400 border-green-400/30">Disponível para Viagens</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white">100k+</h4>
                  <p className="text-gray-300">Vendas Mensais</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white">10+</h4>
                  <p className="text-gray-300">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white">100+</h4>
                  <p className="text-gray-300">Ferramentas de IA</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white">Referência</h4>
                  <p className="text-gray-300">Nacional Brasil</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Experiência Profissional</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{exp.company}</CardTitle>
                  <CardDescription className="text-gray-300">{exp.role} • {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Portfólio de Projetos E-commerce</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} className="bg-blue-600/20 text-blue-400 border-blue-400/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 w-full"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar Loja
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Especialista em E-commerce com resultados comprovados:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">+300%</h4>
                  <p className="text-gray-300">Crescimento Médio</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">4+</h4>
                  <p className="text-gray-300">Lojas Gerenciadas</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">100k+</h4>
                  <p className="text-gray-300">Vendas Mensais</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Currículo Profissional</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-4">
                  <Globe className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                  Visualizar Currículo
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Disponível em múltiplos idiomas para oportunidades internacionais
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                  <Button 
                    onClick={() => setShowCV(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Visualizar CV
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Idiomas disponíveis:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-green-600/20 text-green-400 border-green-400/30">Português</Badge>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-400/30">English</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-400/30">Français</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Growth Gallery Section */}
      <section id="growth" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            <BarChart3 className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            Galeria de Crescimento - Redes Sociais
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Resultados comprovados na gestão e crescimento de perfis nas redes sociais. 
            Cada projeto representa uma estratégia personalizada com foco em conversão e engajamento.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {socialMediaGrowth.map((growth, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg hover:transform hover:scale-105 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={growth.image} 
                    alt={growth.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    style={{ objectPosition: '50% 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <Badge className="bg-green-600/80 text-green-100 border-green-400/50 mb-2">
                          {growth.metrics}
                        </Badge>
                        <Badge className="bg-blue-600/80 text-blue-100 border-blue-400/50 ml-2">
                          {growth.period}
                        </Badge>
                      </div>
                      <Instagram className="w-8 h-8 text-pink-400" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{growth.title}</CardTitle>
                  <CardDescription className="text-gray-300">{growth.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Growth Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">+400%</h4>
                <p className="text-gray-300">Crescimento Médio</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">50k+</h4>
                <p className="text-gray-300">Seguidores Gerados</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">4</h4>
                <p className="text-gray-300">Perfis Transformados</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
                <p className="text-gray-300">Taxa de Sucesso</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section id="social" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Mídias Sociais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaLinks.map((link, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg hover:bg-white/15 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{link.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{link.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/20 text-white hover:bg-white/10 w-full"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    Seguir no Instagram
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Competências</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    {index === 0 && <TrendingUp className="w-6 h-6 text-white" />}
                    {index === 1 && <Palette className="w-6 h-6 text-white" />}
                    {index === 2 && <Code className="w-6 h-6 text-white" />}
                    {index === 3 && <Award className="w-6 h-6 text-white" />}
                  </div>
                  <CardTitle className="text-white text-lg">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.items.map((item, i) => (
                      <div key={i} className="text-gray-300 text-sm py-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Contato</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Vamos Conversar?</h3>
                <p className="text-gray-300 mb-8">
                  Estou sempre aberto para discutir novos projetos, oportunidades criativas 
                  ou parcerias em crescimento digital. Entre em contato!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <span className="text-white">duqueo7.ed@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-white">+351 929 034 902 (Portugal)</div>
                      <div className="text-gray-400">(11) 96365-6618 (Brasil)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <div>
                      <div className="text-white">Vila Franca de Xira, Lisboa</div>
                      <div className="text-gray-400">Portugal</div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-white mb-6">Links Profissionais</h4>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-white/10 justify-start"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Behance Portfolio
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-white/10 justify-start"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Portfolio Wix 2020
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-white/10 justify-start"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-gray-400 text-sm text-center">
                      Disponível para Home Office, Viagens e Mudanças
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Everton Duque dos Santos. Especialista em Growth Marketing e Design Digital.
          </p>
        </div>
      </footer>

      {/* CV Viewer Modal */}
      {showCV && (
        <CVViewer 
          isOpen={showCV} 
          onClose={() => setShowCV(false)} 
        />
      )}

      {/* Admin Panel Modal */}
      {showAdmin && (
        <AdminPanel 
          isOpen={showAdmin} 
          onClose={() => setShowAdmin(false)} 
        />
      )}
    </div>
  );
};

export default Index;
