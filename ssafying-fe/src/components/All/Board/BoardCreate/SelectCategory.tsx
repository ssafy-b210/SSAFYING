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
  onCategoryChange: (newCategory: Option) => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({
  options,
  defaultValue,
  category,
  onCategoryChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option>(
    options.find((option) => option.value === defaultValue) || options[0]
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const newCategory =
      options.find((option) => option.value === selectedValue) || options[0];
    setSelectedOption(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <Category>
      <span>{category}</span>
      <CategoryContainer
        className="select-box"
        value={selectedOption.value}
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
  margin-top: 20px;
  span {
    margin-left: 15px;
    font-weight: bold;
  }
  display: flex;
`;

const CategoryContainer = styled.select`
  display: flex;
  margin-left: 20px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 10px;
`;
