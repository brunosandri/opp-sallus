
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, DollarSign, Percent, Calendar } from "lucide-react";

const ProjectMetrics = () => {
  const performanceData = [
    { month: 'Jan', value: 120000, roi: 8.2 },
    { month: 'Fev', value: 135000, roi: 12.5 },
    { month: 'Mar', value: 148000, roi: 15.8 },
    { month: 'Abr', value: 162000, roi: 18.4 },
    { month: 'Mai', value: 175000, roi: 22.1 },
    { month: 'Jun', value: 189000, roi: 25.7 }
  ];

  const distributionData = [
    { name: 'Real Estate', value: 65, color: '#3B82F6' },
    { name: 'NFTs', value: 25, color: '#8B5CF6' },
    { name: 'Liquid Assets', value: 10, color: '#10B981' }
  ];

  const chartConfig = {
    value: {
      label: "Valor ($)",
      color: "#3B82F6",
    },
    roi: {
      label: "ROI (%)",
      color: "#8B5CF6",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Investment */}
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium opacity-90">
            Valor Total Investido
          </CardTitle>
          <DollarSign className="h-4 w-4 opacity-75" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$189,000</div>
          <p className="text-xs opacity-75">
            +12.5% vs. mês anterior
          </p>
        </CardContent>
      </Card>

      {/* ROI */}
      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium opacity-90">
            ROI Atual
          </CardTitle>
          <Percent className="h-4 w-4 opacity-75" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">25.7%</div>
          <p className="text-xs opacity-75">
            +3.6% vs. mês anterior
          </p>
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span>Performance (6 meses)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-24">
            <LineChart data={performanceData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Distribution Chart */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Distribuição de Ativos</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-32">
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                paddingAngle={5}
                dataKey="value"
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Detailed Performance */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>ROI Detalhado</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-32">
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="roi" 
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectMetrics;
