import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartResult = {
  _id: string;
  percentage: number;
  createdAt: string;
};

type ResultsChartProps = {
  results: ChartResult[];
};

const ResultsChart = ({ results }: ResultsChartProps) => {
  const chartData = results
    .slice()
    .reverse()
    .map((result, index) => ({
      name: `Тест ${index + 1}`,
      резултат: result.percentage,
    }));

  return (
    <div className="results-chart-card">
      <div className="results-chart-header">
        <p>Анализ</p>
        <h2>Развитие на резултатите</h2>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="резултат"
            stroke="#111"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
