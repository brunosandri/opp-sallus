
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Building2, TrendingUp, DollarSign, Calendar } from "lucide-react";

const ModernProjectInfo = () => {
  const projectData = [
    { month: 'Jan', investido: 120000, lucro: 9600 },
    { month: 'Fev', lucro: 16875, investido: 135000 },
    { month: 'Mar', lucro: 23384, investido: 148000 },
    { month: 'Abr', lucro: 29808, investido: 162000 },
    { month: 'Mai', lucro: 38675, investido: 175000 },
    { month: 'Jun', lucro: 48573, investido: 189000 }
  ];

  const chartConfig = {
    investido: {
      label: "Valor Investido",
      color: "#3B82F6",
    },
    lucro: {
      label: "Lucro Distribuído",
      color: "#10B981",
    },
  };

  return (
    <Card className="bg-white shadow-xl border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardTitle className="flex items-center space-x-3">
          <Building2 className="w-6 h-6" />
          <div>
            <h3 className="text-2xl font-bold">Casa na Flórida — Fase 1</h3>
            <p className="text-blue-100 text-sm mt-1">Projeto Imobiliário Premium</p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <h4 className="font-semibold text-gray-700 mb-1">Valor Investido</h4>
            <p className="text-3xl font-bold text-blue-600">$189,000</p>
            <p className="text-sm text-green-600 mt-1">+12.5% este mês</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <h4 className="font-semibold text-gray-700 mb-1">Lucro Distribuído</h4>
            <p className="text-3xl font-bold text-green-600">$48,573</p>
            <p className="text-sm text-green-600 mt-1">+25.7% ROI</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h4 className="font-semibold text-gray-700 mb-1">Status do Projeto</h4>
            <p className="text-xl font-bold text-purple-600">Em Andamento</p>
            <p className="text-sm text-gray-600 mt-1">Fase 2 de 6</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Performance Financeira</h4>
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Investido</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Lucro</span>
              </div>
            </div>
          </div>
          
          <ChartContainer config={chartConfig} className="h-64">
            <AreaChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="investido" 
                stackId="1"
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="lucro" 
                stackId="2"
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.8}
              />
            </AreaChart>
          </ChartContainer>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">65%</p>
            <p className="text-sm text-gray-600">Progresso Geral</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">25.7%</p>
            <p className="text-sm text-gray-600">ROI Anualizado</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">18</p>
            <p className="text-sm text-gray-600">Meses Restantes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">A+</p>
            <p className="text-sm text-gray-600">Rating ESG</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernProjectInfo;
