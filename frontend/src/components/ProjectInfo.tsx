
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Casa na Flórida — Fase 2</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Valor Investido</h4>
            <p className="text-2xl font-bold">$ —,,—</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">— Lucro Distribuído</h4>
            <p className="text-2xl font-bold">$ —,,—</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectInfo;
