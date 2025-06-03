
import { useState } from 'react';
import { X, Download, Globe, Eye, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVViewer = ({ isOpen, onClose }: CVViewerProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt');

  const cvData = {
    pt: {
      title: "CURRICULUM VITAE",
      personalInfo: {
        title: "INFORMAÇÕES PESSOAIS",
        name: "Everton Duque dos Santos",
        maritalStatus: "Casado",
        age: "41 anos",
        address: "Rua 25 de Abril, 19, Cave Direita, 2625-602 Vialonga, Lisboa, Portugal",
        phonePortugal: "+351 929 034 902",
        phoneBrazil: "+55 11 96365-6618",
        email: "duqueo7.ed@gmail.com"
      },
      professionalProfile: {
        title: "PERFIL PROFISSIONAL",
        description: "Gestor de Marketing Digital especializado em Growth Marketing e tráfego pago, com ampla experiência em gestão de campanhas multicanal e implementação de estratégias digitais. Sólida formação em e-commerce e automação de marketing, complementada por conhecimentos avançados de ferramentas de IA."
      },
      experience: {
        title: "EXPERIÊNCIA PROFISSIONAL",
        jobs: [
          {
            title: "Gestor de Marketing Digital | Bigpel",
            period: "2023 – Presente",
            description: "Gestão de campanhas publicitárias e estratégias de marketing digital. Responsável pelo crescimento da marca no setor de confeitaria (100k+ vendas mensais). Gestão de e-commerce, SEO e desenvolvimento web. Implementação de soluções SaaS e automações de IA."
          },
          {
            title: "Designer e Gestor Digital | Kizzol Comercial",
            period: "2022 – 2025",
            description: "Desenvolvimento e manutenção de lojas online. Design de produtos premium e tecnologia. Coordenação de marketing digital e produção audiovisual."
          }
        ]
      },
      competencies: {
        title: "COMPETÊNCIAS PRINCIPAIS",
        skills: ["Growth Marketing e Growth Hacking", "Gestão de Tráfego Pago", "E-commerce e Marketing Digital", "Automação de Marketing", "SEO e Desenvolvimento Web", "Gestão de Campanhas Multicanal", "IA para Marketing"]
      },
      education: {
        title: "FORMAÇÃO",
        degrees: [
          "Pós-graduação (em andamento): Inteligência Artificial Aplicada ao Growth Marketing",
          "Licenciatura em Design Gráfico - Centro Universitário Estácio de São Paulo"
        ]
      },
      tools: {
        title: "FERRAMENTAS DIGITAIS",
        list: "Meta Ads, Google Ads, TikTok Ads, Adobe Suite, DaVinci, Blender, HTML5, Ferramentas SEO, Ferramentas de IA"
      },
      languages: {
        title: "IDIOMAS",
        list: ["Português (Nativo)", "Espanhol (Intermediário)", "Inglês (Básico)"]
      }
    },
    en: {
      title: "CURRICULUM VITAE",
      personalInfo: {
        title: "PERSONAL INFORMATION",
        name: "Everton Duque dos Santos",
        maritalStatus: "Married",
        age: "41 years old",
        address: "Rua 25 de Abril, 19, Cave Direita, 2625-602 Vialonga, Lisbon, Portugal",
        phonePortugal: "+351 929 034 902",
        phoneBrazil: "+55 11 96365-6618",
        email: "duqueo7.ed@gmail.com"
      },
      professionalProfile: {
        title: "PROFESSIONAL PROFILE",
        description: "Digital Marketing Manager specialized in Growth Marketing and paid traffic, with extensive experience in multichannel campaign management and digital strategy implementation. Strong background in e-commerce and marketing automation, complemented by advanced knowledge of AI tools."
      },
      experience: {
        title: "PROFESSIONAL EXPERIENCE",
        jobs: [
          {
            title: "Digital Marketing Manager | Bigpel",
            period: "2023 – Present",
            description: "Management of advertising campaigns and digital marketing strategies. Responsible for brand growth in the confectionery sector (100k+ monthly sales). E-commerce management, SEO, and web development. Implementation of SaaS solutions and AI automations."
          },
          {
            title: "Designer and Digital Manager | Kizzol Comercial",
            period: "2022 – 2025",
            description: "Development and maintenance of online stores. Premium product design and technology. Digital marketing coordination and audiovisual production."
          }
        ]
      },
      competencies: {
        title: "CORE COMPETENCIES",
        skills: ["Growth Marketing and Growth Hacking", "Paid Traffic Management", "E-commerce and Digital Marketing", "Marketing Automation", "SEO and Web Development", "Multichannel Campaign Management", "AI for Marketing"]
      },
      education: {
        title: "EDUCATION",
        degrees: [
          "Postgraduate Degree (Ongoing): Artificial Intelligence Applied to Growth Marketing",
          "Bachelor's Degree in Graphic Design - Centro Universitário Estácio de São Paulo"
        ]
      },
      tools: {
        title: "DIGITAL TOOLS",
        list: "Meta Ads, Google Ads, TikTok Ads, Adobe Suite, DaVinci, Blender, HTML5, SEO Tools, AI Tools"
      },
      languages: {
        title: "LANGUAGES",
        list: ["Portuguese (Native)", "Spanish (Intermediate)", "English (Basic)"]
      }
    },
    fr: {
      title: "CURRICULUM VITAE",
      personalInfo: {
        title: "INFORMATIONS PERSONNELLES",
        name: "Everton Duque dos Santos",
        maritalStatus: "Marié",
        age: "41 ans",
        address: "Rua 25 de Abril, 19, Cave Direita, 2625-602 Vialonga, Lisbonne, Portugal",
        phonePortugal: "+351 929 034 902",
        phoneBrazil: "+55 11 96365-6618",
        email: "duqueo7.ed@gmail.com"
      },
      professionalProfile: {
        title: "PROFIL PROFESSIONNEL",
        description: "Gestionnaire de Marketing Digital spécialisé en Growth Marketing et trafic payant, avec une vaste expérience en gestion de campagnes multicanaux et implémentation de stratégies digitales. Solide formation en e-commerce et automatisation marketing, complétée par des connaissances avancées d'outils d'IA."
      },
      experience: {
        title: "EXPÉRIENCE PROFESSIONNELLE",
        jobs: [
          {
            title: "Gestionnaire de Marketing Digital | Bigpel",
            period: "2023 – Présent",
            description: "Gestion de campagnes publicitaires et stratégies de marketing digital. Responsable de la croissance de la marque dans le secteur de la confiserie (100k+ ventes mensuelles). Gestion e-commerce, SEO et développement web. Implémentation de solutions SaaS et automations IA."
          },
          {
            title: "Designer et Gestionnaire Digital | Kizzol Comercial",
            period: "2022 – 2025",
            description: "Développement et maintenance de boutiques en ligne. Design de produits premium et technologie. Coordination marketing digital et production audiovisuelle."
          }
        ]
      },
      competencies: {
        title: "COMPÉTENCES PRINCIPALES",
        skills: ["Growth Marketing et Growth Hacking", "Gestion du Trafic Payant", "E-commerce et Marketing Digital", "Automatisation Marketing", "SEO et Développement Web", "Gestion de Campagnes Multicanaux", "IA pour Marketing"]
      },
      education: {
        title: "FORMATION",
        degrees: [
          "Master (en cours) : Intelligence Artificielle Appliquée au Growth Marketing",
          "Licence en Design Graphique - Centro Universitário Estácio de São Paulo"
        ]
      },
      tools: {
        title: "OUTILS DIGITAUX",
        list: "Meta Ads, Google Ads, TikTok Ads, Adobe Suite, DaVinci, Blender, HTML5, Outils SEO, Outils IA"
      },
      languages: {
        title: "LANGUES",
        list: ["Portugais (Natif)", "Espagnol (Intermédiaire)", "Anglais (Basique)"]
      }
    }
  };

  const currentCV = cvData[selectedLanguage as keyof typeof cvData];

  const handleExport = () => {
    const printContent = document.getElementById('cv-content');
    if (printContent) {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>CV - Everton Duque dos Santos</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
                .cv-header { text-align: center; margin-bottom: 30px; }
                .cv-section { margin-bottom: 25px; }
                .cv-section h3 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
                .cv-job { margin-bottom: 15px; }
                .cv-job-title { font-weight: bold; color: #1e40af; }
                .cv-period { font-style: italic; color: #666; }
                ul { padding-left: 20px; }
                li { margin-bottom: 5px; }
                @media print { body { margin: 20px; } }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        newWindow.document.close();
        newWindow.print();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-2xl font-bold">Visualizador de Currículo</h2>
          <div className="flex items-center gap-4">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-40 bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt">🇵🇹 Português</SelectItem>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="fr">🇫🇷 Français</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleExport} variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={onClose} variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6">
          <div id="cv-content" className="space-y-6">
            <div className="cv-header text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{currentCV.title}</h1>
              <h2 className="text-xl text-blue-600 font-semibold">{currentCV.personalInfo.name}</h2>
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.personalInfo.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><strong>Status:</strong> {currentCV.personalInfo.maritalStatus}</div>
                <div><strong>Idade:</strong> {currentCV.personalInfo.age}</div>
                <div className="md:col-span-2"><strong>Endereço:</strong> {currentCV.personalInfo.address}</div>
                <div><strong>Tel. Portugal:</strong> {currentCV.personalInfo.phonePortugal}</div>
                <div><strong>Tel. Brasil:</strong> {currentCV.personalInfo.phoneBrazil}</div>
                <div className="md:col-span-2"><strong>Email:</strong> {currentCV.personalInfo.email}</div>
              </div>
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.professionalProfile.title}
              </h3>
              <p className="text-sm leading-relaxed">{currentCV.professionalProfile.description}</p>
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.experience.title}
              </h3>
              {currentCV.experience.jobs.map((job, index) => (
                <div key={index} className="cv-job mb-4">
                  <div className="cv-job-title font-bold text-gray-800">{job.title}</div>
                  <div className="cv-period text-gray-600 italic text-sm">{job.period}</div>
                  <p className="text-sm mt-2">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.competencies.title}
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {currentCV.competencies.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.education.title}
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {currentCV.education.degrees.map((degree, index) => (
                  <li key={index}>{degree}</li>
                ))}
              </ul>
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.tools.title}
              </h3>
              <p className="text-sm">{currentCV.tools.list}</p>
            </div>

            <div className="cv-section">
              <h3 className="text-lg font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                {currentCV.languages.title}
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {currentCV.languages.list.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
