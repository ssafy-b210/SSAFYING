import styled from "styled-components";
import React, { useState } from "react";

export interface Option {
  value: string;
  label: string;
}

interface SelectCategoryProps {
  options: Option[];
  defaultValue: string;
  category: string;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({
  options,
  defaultValue,
  category,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Category>
      <h5>{category}</h5>
      <CategoryContainer
        className="select-box"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CategoryContainer>
    </Category>
  );
};

export default SelectCategory;

const Category = styled.div`
  h5 {
    margin-left: 20px;
  }
  display: flex;
`;

const CategoryContainer = styled.select`
  display: flex;
  margin-left: 20px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 20px;
`;
