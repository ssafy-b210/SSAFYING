import React, { useState, useEffect } from "react";
import CustomDate from "../../../components/Now/MealPlanner/TodayDate";
import styled from "styled-components";
import ChartComponent, {
  ChartComponentProps,
} from "../../../components/Now/MealPlanner/BarChart";
import MealPlannerComp from "../../../components/Now/MealPlanner/MealPlannerComp";
import CenterHeader from "../../../components/Common/CenterHeader";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/reducers/user";

function MealPlannerView() {
  const [voteCountA, setVoteCountA] = useState<number>(0);
  const [voteCountB, setVoteCountB] = useState<number>(0);
  const user = useAppSelector(selectUser);
  const [hasVotedToday, setHasVotedToday] = useState<boolean>(false);
  //한명당 하루에 투표 한번만 할 수 있게 하기

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // 페이지 로드 시 사용자의 투표 여부를 확인합니다.
    const votedToday = localStorage.getItem(
      `voted_${user.userId}_${getCurrentDate()}`
    );
    if (votedToday) {
      setHasVotedToday(true);
    }
  }, [user.userId]);

  const handleVoteA = () => {
    if (!hasVotedToday) {
      setVoteCountA((prevCount) => prevCount + 1);
      setHasVotedToday(true);
      localStorage.setItem(`voted_${user.userId}_${getCurrentDate()}`, "true");
    }
  };

  const handleVoteB = () => {
    if (!hasVotedToday) {
      setVoteCountB((prevCount) => prevCount + 1);
      setHasVotedToday(true);
      localStorage.setItem(`voted_${user.userId}_${getCurrentDate()}`, "true");
    }
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
        <CustomDate /> 당신의 점심을 투표해주세요! <br></br> 투표는 수정이
        불가하니 신중한 투표 부탁드립니다 :) 🍽
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

const IsMealMsg = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;
const MealPlannerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
