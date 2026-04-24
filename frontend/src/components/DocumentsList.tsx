
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentsList = () => {
  const documents = [
    { name: "Contrato.pdf", checked: false },
    { name: "Invoice_123.pdf", checked: false },
    { name: "Relatório_Mensal.pdf", checked: false }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center space-x-3 pb-3 border-b border-gray-200 last:border-b-0">
              <div className="w-5 h-5 border-2 border-gray-400"></div>
              <span className="text-sm">{doc.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsList;
