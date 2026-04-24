import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Shield, Zap } from "lucide-react";

type Props = {
  tokenId: number;
  participacao: string;
  valorinv: string;
  valorcapt: string;
  imagem?: string;
  smartContractUrl?: string;
};

const ModernNFTCard = ({ tokenId, participacao, valorinv, valorcapt, imagem, smartContractUrl }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border-0 shadow-2xl overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50"></div>

      <CardHeader className="relative z-10">
        <CardTitle className="text-center text-lg font-bold flex items-center justify-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span>NFT Vinculado</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center space-y-6 relative z-10">
        {/* NFT visual */}
        <div className="relative">
          <div
            className={`w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 transition-transform duration-300 ${
              isHovered ? "scale-105 rotate-1" : ""
            }`}
          >
            <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20"></div>

              {imagem ? (
                <img
                  src={imagem}
                  alt={`NFT ${tokenId}`}
                  className="w-full h-full object-cover rounded-xl z-10"
                />
              ) : (
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text z-10">
                  #{tokenId}
                </div>
              )}

              <div className="absolute top-2 right-2">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl -z-10 opacity-75"></div>
        </div>

        {/* NFT Details */}
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Salus//Opp NFT #{tokenId}
            </h3>
            <p className="text-blue-200 text-sm mt-1">Token ID #{tokenId}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Participação:</span>
              <span className="text-xl font-bold text-green-400">{participacao}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Valor investido:</span>
              <span className="text-lg font-semibold text-blue-300">{valorinv}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-sm">Valor captado projeto:</span>
              <span className="text-lg font-semibold text-blue-300">{valorcapt}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-400/30"
            >
              <Eye className="w-4 h-4 mr-2" />
              Detalhes
            </Button>

            {smartContractUrl ? (
              <Button
                variant="secondary"
                size="sm"
                className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-400/30"
              >
                <a
                  href={smartContractUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contrato
                </a>
              </Button>
            ) : null}
          </div>

          <div className="text-xs text-gray-400 bg-black/20 rounded-lg p-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Smart Contract Ativo</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernNFTCard;

