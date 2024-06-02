import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"

const AdminChart = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1400, amt: 1400 },
    { name: "Page C", uv: 200, pv: 1800, amt: 1500 },
    { name: "Page D", uv: 100, pv: 2000, amt: 2000 },
  ]
  return (
    <LineChart width={750} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#bfdbfe" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  )
}

export default AdminChart
