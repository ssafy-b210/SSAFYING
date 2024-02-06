import React, { useState } from "react";
import CustomDate from "../../../components/Now/MealPlanner/TodayDate";
import styled from "styled-components";
import ChartComponent, {
  ChartComponentProps,
} from "../../../components/Now/MealPlanner/BarChart";
import MealPlannerComp from "../../../components/Now/MealPlanner/MealPlannerComp";
import CenterHeader from "../../../components/Common/CenterHeader";

function MealPlannerView() {
  const [voteCountA, setVoteCountA] = useState<number>(0);
  const [voteCountB, setVoteCountB] = useState<number>(0);

  const handleVoteA = () => {
    setVoteCountA((prevCount) => prevCount + 1);
  };

  const handleVoteB = () => {
    setVoteCountB((prevCount) => prevCount + 1);
  };

  const chartData = {
    labels: ["A식단", "B식단"],
    datasets: [
      {
        data: [voteCountA, voteCountB],
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
      legend: {
        display: false as const,
      },
    },
  };

  return (
    <div>
      <IsMealMsg>
        <CustomDate></CustomDate> 당신의 점심을 투표해주세요
      </IsMealMsg>
      <MealPlannerContainer>
        <MealPlannerComp onVote={handleVoteA} />
        <MealPlannerComp onVote={handleVoteB} />
      </MealPlannerContainer>
      <ChartComponent data={chartData} options={chartOptions} />
    </div>
  );
}

export default MealPlannerView;

const IsMealMsg = styled.h3`
  text-align: center;
`;
const MealPlannerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
