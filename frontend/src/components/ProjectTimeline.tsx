
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectTimeline = () => {
  const phases = [
    { id: 1, completed: true },
    { id: 2, completed: true },
    { id: 3, completed: true },
    { id: 4, completed: true },
    { id: 5, completed: true },
    { id: 6, completed: false }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acompanhamento da Obra</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Timeline */}
        <div className="flex justify-between items-center mb-6">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                phase.completed 
                  ? 'bg-primary border-primary text-white' 
                  : 'border-gray-300 bg-white'
              }`}>
                {phase.completed && '✓'}
              </div>
              {index < phases.length - 1 && (
                <div className={`w-16 h-0.5 ${
                  phase.completed ? 'bg-primary' : 'bg-gray-300'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Photo Placeholders */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-2">
              <div className="w-full h-24 border-2 border-gray-300 bg-gray-50"></div>
              <div className="h-2 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectTimeline;
