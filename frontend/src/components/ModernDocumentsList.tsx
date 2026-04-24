import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Documento = {
  nome: string;
  url: string;
  email: string;
  status?: "verified" | "pending" | "default";
  tipo?: string;
  tamanho?: string;
  data?: string;
  descricao?: string;
};

type Props = {
  docs: Documento[];
};

const ModernDocumentsList = ({ docs }: Props) => {
  const [checkedDocs, setCheckedDocs] = useState<string[]>([]);

  const toggleCheck = (nome: string) => {
    setCheckedDocs((prev) =>
      prev.includes(nome) ? prev.filter((n) => n !== nome) : [...prev, nome]
    );
  };

  const getStatusIcon = (status: string = "") => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />;
      default:
        return <Shield className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string = "") => {
    switch (status) {
      case "verified":
        return "from-green-50 to-green-100 border-green-200";
      case "pending":
        return "from-orange-50 to-orange-100 border-orange-200";
      default:
        return "from-gray-50 to-gray-100 border-gray-200";
    }
  };

  const totalVerificados = docs.filter((d) => d.status === "verified").length;
  const docsGerais = docs.filter((doc) => doc.email === "geral");
  const docsPessoais = docs.filter((doc) => doc.email !== "geral");

  const renderDoc = (doc: Documento, index: number) => (
    <div
      key={index}
      className={`bg-gradient-to-r ${getStatusColor(
        doc.status
      )} border rounded-xl p-4 transition-all duration-200 hover:shadow-lg`}
    >
      <div className="flex items-start space-x-4">
        <div className="pt-1">
          <div
            className={`w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 flex items-center justify-center ${
              checkedDocs.includes(doc.nome)
                ? "bg-blue-500 border-blue-500"
                : "border-gray-400 hover:border-blue-400"
            }`}
            onClick={() => toggleCheck(doc.nome)}
          >
            {checkedDocs.includes(doc.nome) && (
              <CheckCircle2 className="w-3 h-3 text-white" />
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 truncate">
                {doc.nome}
              </h3>
              {getStatusIcon(doc.status)}
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <span className="bg-gray-200 px-2 py-1 rounded-full">
                {doc.tipo || "PDF"}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            {doc.descricao || "Documento vinculado ao projeto."}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Tamanho: {doc.tamanho || "1.2 MB"}</span>
              <span>•</span>
              <span>Atualizado: {doc.data || "–"}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-blue-100"
              >
                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4 text-blue-600" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-green-100"
              >
                <a href={doc.url} download>
                  <Download className="w-4 h-4 text-green-600" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-700 text-white">
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-6 h-6" />
          <div>
            <span>Documentos do Projeto</span>
            <p className="text-sm text-gray-200 font-normal mt-1">
              {docs.length} documentos • {checkedDocs.length} revisados
            </p>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-8">
        {docsGerais.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Documentos Gerais</h3>
            <div className="space-y-4">
              {docsGerais.map(renderDoc)}
            </div>
          </div>
        )}

        {docsPessoais.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mt-6 mb-2">Seus Documentos</h3>
            <div className="space-y-4">
              {docsPessoais.map(renderDoc)}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Status dos Documentos</h4>
              <p className="text-sm text-gray-600">
                {totalVerificados} verificados • {docs.length - totalVerificados} pendentes
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                {docs.length > 0
                  ? Math.round((totalVerificados / docs.length) * 100)
                  : 0}
                %
              </p>
              <p className="text-sm text-gray-600">Completo</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernDocumentsList;