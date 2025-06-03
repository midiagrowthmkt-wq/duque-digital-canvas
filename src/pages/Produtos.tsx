
import { ArrowLeft, Package, Lightbulb, Palette, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Produtos = () => {
  const navigate = useNavigate();

  const lightingProducts = [
    {
      title: "Luminária Cisne Dourada",
      description: "Design elegante com acabamento dourado e asas de cristal",
      image: "/lovable-uploads/114dd059-c7fc-4b22-90e6-043a43645d2d.png",
      category: "Iluminação Decorativa",
      features: ["Design Luxuoso", "Cristal Premium", "LED Integrado"]
    },
    {
      title: "Pendente Cristal Vintage",
      description: "Luminárias pendentes com cristal lapidado e estrutura dourada",
      image: "/lovable-uploads/357a3f4c-761d-403d-908d-46c3cda3b581.png",
      category: "Pendentes",
      features: ["Cristal Lapidado", "Múltiplas Peças", "Efeito Vintage"]
    },
    {
      title: "Luminária Esférica Premium",
      description: "Design moderno com padrão cristalino e base dourada",
      image: "/lovable-uploads/418d53b7-a125-44de-ae82-b0dd12efaf89.png",
      category: "Iluminação Moderna",
      features: ["Design Esférico", "Padrão Geométrico", "Iluminação Ambiente"]
    },
    {
      title: "Pendente Lua Crescente",
      description: "Luminária em formato de lua com cristais facetados",
      image: "/lovable-uploads/f8d194b4-75f0-49a3-b4da-820361d2ef10.png",
      category: "Design Temático",
      features: ["Formato Lua", "Cristais Facetados", "Iluminação Suave"]
    },
    {
      title: "Luminária Asas de Anjo",
      description: "Design inspirado em asas com cristal translúcido",
      image: "/lovable-uploads/04d2dd8e-f746-483e-a550-8669b6a0252a.png",
      category: "Design Artístico",
      features: ["Design Único", "Cristal Translúcido", "Efeito Angelical"]
    }
  ];

  const packagingProducts = [
    {
      title: "Projeto Arquitetônico LED",
      description: "Iluminação externa para projetos residenciais premium",
      image: "/lovable-uploads/4787270e-cf00-488f-bfd3-2beb49c9a81d.png",
      category: "Iluminação Arquitetônica",
      features: ["LED Exterior", "Projeto Personalizado", "Eficiência Energética"]
    },
    {
      title: "Projetor Natalino Roja",
      description: "Embalagem e produto para iluminação decorativa natalina",
      image: "/lovable-uploads/f01b706e-a858-43f0-a710-bde681e56f24.png",
      category: "Produtos Sazonais",
      features: ["Design de Embalagem", "Produto Completo", "Marketing Visual"]
    },
    {
      title: "Linha Completa LED YOC",
      description: "Família de produtos LED com embalagens coordenadas",
      image: "/lovable-uploads/96dbdc29-dc7a-4faf-a605-d3c86623ff5b.png",
      category: "Design de Linha",
      features: ["Identidade Visual", "Múltiplos SKUs", "Padronização"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="pt-8 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Projetos & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Design</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Portfólio completo de produtos de iluminação e design de embalagens. 
              Cada projeto reflete inovação, qualidade e excelência em design.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-400/30">
                <Lightbulb className="w-4 h-4 mr-2" />
                Iluminação Premium
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-400 border-purple-400/30">
                <Package className="w-4 h-4 mr-2" />
                Design de Embalagens
              </Badge>
              <Badge className="bg-green-600/20 text-green-400 border-green-400/30">
                <Palette className="w-4 h-4 mr-2" />
                Design Gráfico
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Lighting Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            <Lightbulb className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
            Produtos de Iluminação
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Coleção exclusiva de luminárias premium com design sofisticado e tecnologia LED avançada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lightingProducts.map((product, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg hover:transform hover:scale-105 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-600/80 text-yellow-100 border-yellow-400/50">
                      <Star className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{product.title}</CardTitle>
                  <CardDescription className="text-gray-300">{product.description}</CardDescription>
                  <Badge variant="outline" className="w-fit border-blue-400/30 text-blue-400">
                    {product.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300 text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Design Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            <Package className="w-10 h-10 mx-auto mb-4 text-purple-400" />
            Design de Embalagens & Projetos
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Desenvolvimento completo de identidade visual, embalagens e projetos especiais para produtos de iluminação.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagingProducts.map((product, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-lg hover:transform hover:scale-105 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600/80 text-purple-100 border-purple-400/50">
                      <Palette className="w-3 h-3 mr-1" />
                      Design
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{product.title}</CardTitle>
                  <CardDescription className="text-gray-300">{product.description}</CardDescription>
                  <Badge variant="outline" className="w-fit border-purple-400/30 text-purple-400">
                    {product.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300 text-sm">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Package className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">50+</h4>
                <p className="text-gray-300">Produtos Desenvolvidos</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">15+</h4>
                <p className="text-gray-300">Linhas de Iluminação</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Palette className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">100+</h4>
                <p className="text-gray-300">Designs de Embalagem</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg text-center">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">98%</h4>
                <p className="text-gray-300">Satisfação Cliente</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Everton Duque dos Santos. Especialista em Design de Produtos e Embalagens.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Produtos;
