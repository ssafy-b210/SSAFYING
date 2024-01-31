import React, { useState } from "react";
import styled from "styled-components";
import ChartComponent, {
  ChartComponentProps,
} from "../../../components/Now/MealPlanner/BarChart";
import MealPlannerComp from "../../../components/Now/MealPlanner/MealPlannerComp";

function MealPlannerView() {
  const chartData = {
    labels: ["A식단", "B식단"],
    datasets: [
      {
        data: [1, 10],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
        borderWidth: 1,
        barPercentage: 0.5,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: false as any,
    },
  };

  return (
    <div>
      <MealPlannerComp></MealPlannerComp>
      <ChartComponent data={chartData} options={chartOptions} />
    </div>
  );
}

export default MealPlannerView;
