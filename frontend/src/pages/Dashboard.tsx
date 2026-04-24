import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Plus, TrendingUp, Wallet } from "lucide-react";
import ModernNFTCard from "@/components/ModernNFTCard";
import ModernProjectTimeline from "@/components/ModernProjectTimeline";
import ModernDocumentsList from "@/components/ModernDocumentsList";
import NFTLinkModal from "@/components/NFTLinkModal";

type NFT = {
  tokenId: number;
  participacao: string;
  valorinv: string;
  valorcapt: string;
};

type Documento = {
  nome: string;
  url: string;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isNFTModalOpen, setIsNFTModalOpen] = useState(false);

  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [documentos, setDocumentos] = useState<Documento[]>([]);

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Proteção da rota + leitura segura do localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("token");

    if (!storedEmail || !storedToken) {
      navigate("/");
      return;
    }

    setEmail(storedEmail);
    setToken(storedToken);
  }, [navigate]);

  // Carrega os dados após o email estar disponível
  useEffect(() => {
    if (!email) return;

    fetch(`${BASE_URL}/nfts/${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then(setNFTs)
      .catch(console.error);

    fetch(`${BASE_URL}/documentos/${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then(setDocumentos)
      .catch(console.error);
  }, [email, BASE_URL]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // Evita renderização antes de carregar localStorage
  if (!email || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Carregando painel...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Salus//Opp
              </h1>
              <p className="text-sm text-gray-500">Painel do Investidor</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsNFTModalOpen(true)}
              className="border-blue-200 hover:bg-blue-50"
            >
              <Plus className="w-4 h-4 mr-2" />
              Vincular NFT
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-200 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="p-6 space-y-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Atualizado em tempo real</span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* NFTs */}
          <div className="xl:col-span-1 space-y-4">
            {nfts.map((nft) => (
              <ModernNFTCard
                key={nft.tokenId}
                tokenId={nft.tokenId}
                participacao={nft.participacao}
                valorinv={nft.valorinv}
                valorcapt={nft.valorcapt}
                imagem={`https://magnificent-kleicha-fde726.netlify.app/imagens/nftimagem.jpg`}
                smartContractUrl="https://gold-pawpaw-0be.notion.site/SalusOppNFT-sol-229f529207c280d28ae4ca3bed602762?source=copy_link"
              />
            ))}
          </div>

          {/* Obra */}
          <div className="xl:col-span-3">
            <ModernProjectTimeline />
          </div>
        </div>

        {/* Documentos */}
        <div>
          <ModernDocumentsList docs={documentos} />
        </div>
      </main>

      {/* Modal de vinculação de NFT */}
      <NFTLinkModal
        isOpen={isNFTModalOpen}
        onClose={() => setIsNFTModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;

