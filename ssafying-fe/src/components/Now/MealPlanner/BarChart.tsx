import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { registerables, Chart as ChartJs } from "chart.js/auto";

ChartJs.register(...registerables);

interface ChartComponentProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
      barPercentage: number;
    }[];
  };
  options: {
    scales: {
      y: {
        beginAtZero: boolean;
      };
    };
    plugins: {
      // tooltip: {
      //   display: boolean;
      // };
      legend: {
        display: boolean;
      };
    };
  };
}

function ChartComponent(props: ChartComponentProps) {
  return (
    <BarContainer>
      <Bar data={props.data} options={props.options} />
    </BarContainer>
  );
}

export default ChartComponent;
export type { ChartComponentProps };

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 200px;
`;
