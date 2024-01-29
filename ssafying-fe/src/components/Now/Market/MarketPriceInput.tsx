import styled from "styled-components";

function MarketPriceInput() {
  return (
    <PriceInput>
      <h5>금 액</h5>
      <PriceContainer>
        <input type="number" />원
      </PriceContainer>
    </PriceInput>
  );
}

export default MarketPriceInput;

const PriceInput = styled.div`
  display: flex;
  align-items: center;
  h5 {
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
    background-color: #f4f9f4;
    margin: 5px;
  }
`;
