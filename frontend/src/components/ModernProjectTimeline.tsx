import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, CheckCircle2, Clock, MapPin } from "lucide-react";

const ModernProjectTimeline = () => {
  const phases = [
    { 
      id: 1, 
      completed: true, 
      title: "1. Compra do Terreno",
      description: "Análise, negociação, documentos e registro Warranty Dead",
      date: "24/03/2025",
      progress: 100
    },
    { 
      id: 2, 
      completed: true, 
      title: "2. Permits",
      description: "Site plan e licenças para construção",
      date: "11/06/2025",
      progress: 100
    },
    { 
      id: 3, 
      completed: true, 
      title: "3. Fundação",
      description: "Limpeza do lote, Escavação, Marcação e Concretagem",
      date: "até 12/08/2025",
      progress: 100
    },
    { 
      id: 4, 
      completed: true, 
      title: "4. Telhado e Framing",
      description: "Montagem telhado e Colocação das divisórias internas",
      date: "até 18/10/2025",
      progress: 100
    },
    {
      id: 5, 
      completed: true, 
      title: "5. Rough-ins e Sistemas",
      description: "Instalação de tubulações, Eletrica e Ar-condicionado",
      date: "até 19/12/2025",
      progress: 100
    },
    {
      id: 6, 
      completed: true, 
      title: "6. Acabamentos e Finalização",
      description: "Revestimentos e pintura, Instalação de Armários, calçada",
      date: "até 14/02/2026",
      progress: 100
    }


  ];

  const photos = [
    { title: "Limpeza do lote", progress: 100, color: "from-green-400 to-green-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/cleanlot.jpg"},
    { title: "elevação", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/elevationlot.jpg"},
    { title: "concreto", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/1.png"},
    { title: "alvenaria em bloco 01", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/2.png"},
    { title: "alvenaria em bloco 02", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/3.png"},
    { title: "alvenaria em bloco 03", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/4.png"},
    { title: "telhado em bloco 03", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/5.png"},
    { title: "telhado em bloco 03", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/6.png"},
    { title: "telhado em bloco 03", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/7.png"},
    { title: "Framing em bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/8.png"},
    { title: "Framing em bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/9.png"},
    { title: "Framing em bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/10.png"},
    { title: "Framingem bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/11.png"},     
    { title: "Framingem bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/12.png"},
    { title: "Rough-ins e Sistemas em bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/13.png"},
    { title: "Rough-ins e Sistemas em bloco 04", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/14.png"},
    { title: "Rough-ins e Sistemas em bloco 05", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/15.png"},
    { title: "Rough-ins e Sistemas em bloco 05", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/16.png"},     
    { title: "Rough-ins e Sistemas em bloco 05", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/17.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/18.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/19.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/20.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/21.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/22.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/23.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/24.png"},
    { title: "Construction finishing touches em bloco 06", progress: 100, color: "from-blue-400 to-blue-600", imagem: "https://magnificent-kleicha-fde726.netlify.app/imagens/25.png"}];

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="w-6 h-6" />
          <span>Acompanhamento da Obra</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Modern Timeline */}
        <div className="space-y-6 mb-8">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  phase.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : phase.progress > 0
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-gray-300 bg-white text-gray-400'
                }`}>
                  {phase.completed ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : phase.progress > 0 ? (
                    <Clock className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-bold">{phase.id}</span>
                  )}
                </div>
                {index < phases.length - 1 && (
                  <div className={`w-0.5 h-16 mt-2 ${
                    phase.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                  <span className="text-sm text-gray-500">{phase.date}</span>
                </div>
                <p className="text-gray-600 mb-3">{phase.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      phase.completed 
                        ? 'bg-gradient-to-r from-green-400 to-green-600'
                        : phase.progress > 0
                        ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                        : 'bg-gray-300'
                    }`}
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-500">Progresso</span>
                  <span className="text-sm font-semibold text-gray-700">{phase.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Galeria de Fotos</h4>
            <Button variant="outline" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Ver Todas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`aspect-square rounded-xl bg-gradient-to-br ${photo.color} p-1 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                    <img src={photo.imagem}
                     alt={photo.title}
                     className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <p className="text-white text-sm font-medium">{photo.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full bg-gradient-to-r ${photo.color} transition-all duration-500`}
                      style={{ width: `${photo.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernProjectTimeline;
