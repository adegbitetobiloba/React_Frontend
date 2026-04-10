import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", students: 100 },
  { name: "Feb", students: 200 },
  { name: "Mar", students: 350 }
];

function DashboardChart() {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="students" stroke="#00ed64" />
    </LineChart>
  );
}

export default DashboardChart;
