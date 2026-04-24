import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-white px-4">
      <div className="max-w-xl text-center space-y-6">
        <img src="/logo.png" alt="Salus//Opp" className="mx-auto h-24" />
        <h1 className="text-4xl font-bold text-gray-800">
          Portal do Investidor – Salus//Opp
        </h1>
        <p className="text-lg text-gray-600">
          Acompanhe seus ativos, obras em andamento e documentos de forma segura e profissional.
        </p>
        <Button onClick={() => navigate("/")} className="mt-4 px-8 py-2">
          Acessar Login
        </Button>
      </div>
    </div>
  );
};

export default Index;
