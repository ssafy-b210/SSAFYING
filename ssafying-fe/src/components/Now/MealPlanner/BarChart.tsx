import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { registerables, Chart as ChartJs, Tooltip } from "chart.js/auto";

ChartJs.register(...registerables);

const labels = ["A식단", "B식단"];

const data = {
  labels: labels,
  datasets: [
    {
      data: [65, 59],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
      borderWidth: 1,
      barPercentage: 0.5,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    tooltip: false as any,
  },
};

const ChartComponent: React.FC = () => {
  return (
    <BarContainer>
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: false as any,
          },
        }}
      />
    </BarContainer>
  );
};

export default ChartComponent;

const BarContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 200px;
`;
