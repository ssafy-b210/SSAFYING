import styled from "styled-components";
import React, { useEffect } from "react";

function SelectCategory() {
  useEffect(() => {
    const btn = document.querySelector(
      ".btn-select"
    ) as HTMLButtonElement | null;
    const list = document.querySelector(".list-member");

    const handleClick = (event: Event) => {
      if (event.target && (event.target as Element).nodeName === "BUTTON") {
        btn!.innerText = (event.target as HTMLButtonElement).innerText;
        btn!.classList.remove("on");
      }
    };

    if (btn) {
      btn.addEventListener("click", () => {
        btn.classList.toggle("on");
      });
    }

    if (list) {
      list.addEventListener("click", handleClick);
    }

    return () => {
      // Cleanup: remove event listeners when the component is unmounted
      if (btn) {
        btn.removeEventListener("click", () => {
          btn.classList.toggle("on");
        });
      }

      if (list) {
        list.removeEventListener("click", handleClick);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Category>
      <h5>카테고리</h5>
      <CategoryContainer>
        <select className="select-box">
          <option value="1">자유</option>
          <option value="2">취업</option>
          <option value="3">정보</option>
          <option value="4">개발</option>
          <option value="5">싸피꿀팁</option>
          <option value="6">생활</option>
          <option value="7">홍보</option>
        </select>
      </CategoryContainer>
    </Category>
  );
}

export default SelectCategory;

const Category = styled.div`
  h5 {
    margin-left: 20px;
  }
  display: flex;
`;

const CategoryContainer = styled.div`
  display: flex;
  margin-left: 20px;
  .select-box {
    height: 25px;
    border: 1px solid gray;
    border-radius: 10px;
    margin-top: 20px;
  }
`;
