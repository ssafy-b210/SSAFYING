import styled from "styled-components";

interface CreatePriceProps {
  onPriceChange: (newPrice: number) => void;
}

function MarketPriceInput({ onPriceChange }: CreatePriceProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value);
    onPriceChange(newPrice);
  };
  return (
    <PriceInput>
      <h4>금 액</h4>
      <PriceContainer>
        <input type="number" onChange={handleInputChange} />원
      </PriceContainer>
    </PriceInput>
  );
}

export default MarketPriceInput;

const PriceInput = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-left: 20px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  input {
    width: 200px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: #d9d9d9;
    margin: 5px;
  }
`;
