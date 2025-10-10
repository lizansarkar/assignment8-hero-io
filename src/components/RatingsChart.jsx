import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  return (
    <div className="w-full h-72 sm:h-96 bg-gray-50 p-4 rounded-2xl shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip cursor={{ fill: "#f3f3f3" }} />
          <Legend />
          <Bar dataKey="count" fill="#00c49f" barSize={20} radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;


