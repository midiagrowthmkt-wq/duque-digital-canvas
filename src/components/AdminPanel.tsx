
import { useState } from 'react';
import { X, Eye, EyeOff, Save, Edit, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Senha simples para demonstração (em produção seria mais segura)
  const adminPassword = 'admin2025';

  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Senha incorreta!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setLoginError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
        <CardHeader className="border-b border-white/10">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-white text-2xl">Painel Administrativo</CardTitle>
              <CardDescription className="text-gray-400">
                Área restrita para edição do portfólio
              </CardDescription>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {!isAuthenticated ? (
            // Login Screen
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Acesso Restrito</h3>
                <p className="text-gray-400">Digite a senha para acessar o painel</p>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite a senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                
                {loginError && (
                  <p className="text-red-400 text-sm text-center">{loginError}</p>
                )}
                
                <Button 
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Entrar
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  <p>Dica: senha demo = admin2025</p>
                </div>
              </div>
            </div>
          ) : (
            // Admin Dashboard
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Dashboard Administrativo</h3>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Sair
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <Edit className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Editar Projetos</h4>
                    <p className="text-gray-400 mb-4">Adicionar, editar ou remover projetos do portfólio</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Gerenciar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <Plus className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Novo E-commerce</h4>
                    <p className="text-gray-400 mb-4">Adicionar nova loja ao portfólio</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Adicionar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center">
                    <Save className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Configurações</h4>
                    <p className="text-gray-400 mb-4">Alterar informações pessoais e contato</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Configurar
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Estatísticas do Portfólio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">4</div>
                      <div className="text-gray-400">Projetos E-commerce</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">100k+</div>
                      <div className="text-gray-400">Vendas Mensais</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">3</div>
                      <div className="text-gray-400">Idiomas CV</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">10+</div>
                      <div className="text-gray-400">Anos Experiência</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Badge className="bg-green-600/20 text-green-400 border-green-400/30">
                  Sistema Ativo - Bem-vindo ao painel administrativo!
                </Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
