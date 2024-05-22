// RandomNicknameGenerator.tsx

import React, { useState, useEffect } from "react";
import NickNameData from "./NickNameData.json";

interface RandomNicknameGeneratorProps {
  onNicknameGenerated: (nickname: string) => void;
}

const RandomNicknameGenerator: React.FC<RandomNicknameGeneratorProps> = ({
  onNicknameGenerated,
}) => {
  const [randomNickname, setRandomNickname] = useState<string | null>(null);

  const generateRandomNickname = () => {
    const determiner =
      NickNameData.determiners[
        Math.floor(Math.random() * NickNameData.determiners.length)
      ];
    const animal =
      NickNameData.animals[
        Math.floor(Math.random() * NickNameData.animals.length)
      ];
    const generatedNickname = `${determiner} ${animal}`;
    setRandomNickname(generatedNickname);
    onNicknameGenerated(generatedNickname);
  };

  useEffect(() => {
    generateRandomNickname();
  }, [onNicknameGenerated]);

  return (
    <div>
      <button onClick={generateRandomNickname}>랜덤 닉네임 생성하기</button>
      {randomNickname && <p>{randomNickname}</p>}
    </div>
  );
};

export default RandomNicknameGenerator;
